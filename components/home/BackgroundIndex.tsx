"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { fraunces, jetbrains } from "./fonts";

export interface IndexProject {
  title: string;
  image: string;
  type: string;
  date: string;
  slug: string;
  author: string;
}

interface Props {
  projects: IndexProject[];
  categories: { type: string; label: string }[];
  total: number;
}

const LIMIT = 8;

export default function BackgroundIndex({ projects, categories, total }: Props) {
  const [category, setCategory] = useState("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  // Slugs cujo preview já foi montado: cada imagem só baixa na 1ª vez que é visitada e depois fica
  // montada (troca instantânea com crossfade, como no HTML).
  const [seen, setSeen] = useState<Set<string>>(new Set());

  const items = projects
    .filter((p) => category === "all" || p.type === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, LIMIT);
  const active = items.find((p) => p.slug === activeSlug) ?? items[0];

  const markSeen = (...slugs: string[]) =>
    setSeen((prev) => {
      if (slugs.every((s) => prev.has(s))) return prev;
      const next = new Set(prev);
      slugs.forEach((s) => next.add(s));
      return next;
    });

  // Ao montar / trocar de filtro: carrega o primeiro e pré-carrega os 2 seguintes quando o navegador estiver ocioso
  useEffect(() => {
    if (!items.length) return;
    markSeen(items[0].slug);
    const id = window.setTimeout(() => markSeen(...items.slice(1, 3).map((p) => p.slug)), 800);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const select = (slug: string) => {
    setActiveSlug(slug);
    markSeen(slug);
  };

  return (
    <section className="w-full max-w-[1440px] mt-[10px]" aria-labelledby="index-title">
      <div className="flex flex-wrap items-center justify-between gap-12 mb-8">
        <h2 id="index-title" className={`${fraunces.className} text-[clamp(32px,4vw,52px)] tracking-[-0.03em]`}>
          The index
        </h2>
        <div className="flex flex-wrap gap-6" role="group" aria-label="Filter by category">
          {[{ type: "all", label: "All" }, ...categories].map((c) => (
            <button
              key={c.type}
              type="button"
              aria-pressed={category === c.type}
              onClick={() => {
                setCategory(c.type);
                setActiveSlug(null);
              }}
              className={`px-[14px] py-[7px] rounded-full border text-[13px] transition-all duration-200 ${category === c.type
                ? "bg-white text-black border-white"
                : "border-stroke-1 text-white/70 hover:text-white hover:border-white/20"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.05fr] gap-[56px] items-start">
        <div>
          <ul key={category} className="animate-[fadeUp_0.35s_ease]">
            {items.map((p, i) => {
              const on = active?.slug === p.slug;
              return (
                <li
                  key={p.slug}
                  onMouseEnter={() => select(p.slug)}
                  onFocus={() => select(p.slug)}
                  className="border-b border-white/10"
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`grid grid-cols-[34px_1fr_auto_60px] items-center gap-16 py-18 px-[10px] transition-all duration-300 ${on ? "lg:pl-[22px] bg-gradient-to-r from-[#ff9d2e]/10 to-transparent" : "bg-transparent"
                      }`}
                  >
                    <span className={`${jetbrains.className} text-[12px] text-white/50`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[clamp(20px,2.3vw,30px)] font-medium tracking-[-0.02em] transition-colors duration-300 ${on ? "text-[#ff9d2e]" : ""
                        }`}
                    >
                      {p.title}
                    </span>
                    <span className="text-[12.5px] text-white/50 capitalize">{p.type}</span>
                    <span
                      aria-hidden="true"
                      className={`relative block h-[34px] overflow-hidden rounded-[8px] border border-stroke-1 bg-white/[.04] transition-opacity duration-300 ${
                        on ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <SafeImage
                        src={p.image}
                        alt=""
                        fill
                        loading="lazy"
                        quality={50}
                        sizes="60px"
                        className="object-cover"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/all_backgrounds" className="inline-flex mt-24 text-body text-white/70 hover:text-white">
            Browse all {total} backgrounds →
          </Link>
        </div>

        {active && (
          <div className="hidden lg:block sticky top-[96px]">
            <div
              className="relative aspect-[4/3.3] rounded-24 overflow-hidden border border-stroke-1 bg-white/[.03]"
            >
              {items.map(
                (p) =>
                  seen.has(p.slug) && (
                    <div
                      key={p.slug}
                      className={`absolute inset-0 transition-opacity duration-[450ms] ease-out ${p.slug === active.slug ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <SafeImage
                        src={p.image}
                        alt={`${p.title} background preview`}
                        fill
                        quality={70}
                        sizes="(max-width: 1024px) 0px, 45vw"
                        className="object-cover"
                      />
                    </div>
                  )
              )}
              <div className="absolute left-[14px] right-[14px] bottom-[14px] flex items-center justify-between gap-12 px-[18px] py-[14px] rounded-out bg-black/55 backdrop-blur-[14px] border border-white/15">
                <div>
                  <b className="block text-[20px] font-medium">{active.title}</b>
                  <span className="text-[12.5px] text-white/60 capitalize">
                    {active.type} · by {active.author}
                  </span>
                </div>
                <Link
                  href={`/projects/${active.slug}`}
                  className="px-16 py-[9px] rounded-[12px] bg-white text-black text-[13px] font-medium hover:bg-white/85 transition-colors"
                >
                  Open →
                </Link>
              </div>
            </div>
            <p className={`${jetbrains.className} mt-12 text-[12px] text-white/50`}>/projects/{active.slug}</p>
          </div>
        )}
      </div>
    </section>
  );
}
