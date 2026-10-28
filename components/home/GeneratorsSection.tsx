"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { fraunces, jetbrains } from "./fonts";
import { GENERATORS } from "./data";

const Skeleton = () => <div className="h-[420px] rounded-out bg-white/[.03] animate-pulse" aria-hidden="true" />;

// Cada gerador é um chunk separado e só é baixado quando o usuário chega à seção
const PANELS: Record<string, React.ComponentType> = {
  glass: dynamic(() => import("@/app/components/Gradient/FrostedGlassBackground"), { ssr: false, loading: Skeleton }),
  blackhole: dynamic(() => import("@/app/black-hole/background-customizatizer"), { ssr: false, loading: Skeleton }),
  nebula: dynamic(() => import("@/app/components/NebulaEffect/NebulaEffect"), { ssr: false, loading: Skeleton }),
  mesh: dynamic(() => import("@/app/components/BackgroundGenerators/MeshGradient/SimpleMeshGradient"), { ssr: false, loading: Skeleton }),
  particles: dynamic(
    () => import("@/app/components/BackgroundGenerators/ParticleSystem").then((m) => ({ default: m.StableParticleSystem })),
    { ssr: false, loading: Skeleton }
  ),
};

export default function GeneratorsSection() {
  const [activeId, setActiveId] = useState(GENERATORS[0].id);
  const [armed, setArmed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Só monta o gerador quando a seção chega perto da tela (evita JS/CPU no load inicial)
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = GENERATORS.find((g) => g.id === activeId) ?? GENERATORS[0];
  const Panel = PANELS[active.id];

  return (
    <section id="generators" ref={ref} className="w-full max-w-[1440px] mt-[110px] scroll-mt-[24px]" aria-labelledby="generators-title">
      <div className="flex flex-wrap items-baseline justify-between gap-12 mb-24">
        <h2 id="generators-title" className={`${fraunces.className} text-[clamp(32px,4vw,52px)] tracking-[-0.03em]`}>
          Make your own
        </h2>
        <p className="text-body text-white/60 max-w-[460px]">
          {GENERATORS.length} generators. Tweak the sliders, watch it change, copy the code.
        </p>
      </div>

      <div className="flex flex-col gap-[28px]">
        <div
          role="tablist"
          aria-label="Generators"
          className="flex lg:grid lg:grid-cols-5 gap-8 lg:gap-0 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 [scrollbar-width:none]"
        >
          {GENERATORS.map((g, i) => {
            const on = g.id === active.id;
            return (
              <button
                key={g.id}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls="generator-panel"
                onClick={() => setActiveId(g.id)}
                className={`shrink-0 flex flex-col items-start justify-start text-left transition-all duration-300 max-[1023px]:px-[16px] max-[1023px]:py-[8px] max-[1023px]:rounded-full max-[1023px]:border lg:border-t-2 lg:px-[4px] lg:pr-[18px] lg:pt-[16px] lg:pb-[8px] ${
                  on
                    ? "max-[1023px]:bg-white max-[1023px]:text-black max-[1023px]:border-white lg:border-[#ff9d2e]"
                    : "max-[1023px]:border-stroke-1 lg:border-white/10 text-white/70 hover:text-white lg:hover:border-white/30"
                }`}
              >
                <span className={`${jetbrains.className} hidden lg:block text-[12px] mb-[6px] ${on ? "text-[#ff9d2e]" : "text-white/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block text-[15px] lg:text-[22px] font-medium tracking-[-0.02em] text-inherit lg:text-white">
                  <span className={on ? "lg:text-[#ff9d2e]" : ""}>{g.label}</span>
                </span>
                <span className="hidden lg:block text-[13px] text-white/50 mt-[4px] leading-[1.45]">{g.desc}</span>
              </button>
            );
          })}
        </div>

        <div id="generator-panel" role="tabpanel" className="min-w-0 border border-stroke-1 rounded-24 bg-white/[.015]">
          <div className="flex items-center justify-between gap-12 px-[18px] py-[12px] border-b border-stroke-1">
            <div className="flex items-center gap-8 text-[13px] text-white/60">
              <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e]" aria-hidden="true" />
              <span>{active.label}</span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="hidden sm:inline">{active.desc}</span>
            </div>
            {active.href && (
              <Link href={active.href} className="shrink-0 text-[13px] text-white/70 hover:text-white">
                Open full page →
              </Link>
            )}
          </div>
          <div className="p-[18px] min-h-[480px] overflow-x-auto">{armed ? <Panel key={active.id} /> : <Skeleton />}</div>
        </div>
      </div>
    </section>
  );
}
