import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { CATEGORIES } from "./data";
import { fraunces } from "./fonts";

export default function BrowseByType({ projects }: { projects: ProjectMetadata[] }) {
  const tiles = CATEGORIES.map((c) => {
    const items = projects
      .filter((p) => p.type === c.type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { ...c, count: items.length, cover: items[0] };
  }).filter((t) => t.count > 0);

  return (
    <section className="w-full max-w-[1440px] mt-[110px]" aria-labelledby="types-title">
      <div className="flex flex-wrap items-baseline gap-16 mb-24">
        <h2 id="types-title" className={`${fraunces.className} text-[clamp(32px,4vw,52px)] tracking-[-0.03em]`}>
          Browse by type
        </h2>
        <Link href="/all_backgrounds/" className="text-sub text-white/60 hover:text-white">
          See everything →
        </Link>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {tiles.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/backgrounds/${t.slug}/`}
              className="group relative isolate flex flex-col justify-end aspect-[4/3.2] overflow-hidden rounded-out border border-stroke-1 p-16 hover:border-white/25 hover:-translate-y-[3px] duration-200"
            >
              {t.cover && (
                <SafeImage
                  src={t.cover.image}
                  alt=""
                  fill
                  loading="lazy"
                  quality={55}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover -z-10 opacity-80 group-hover:opacity-100 group-hover:scale-[1.06] duration-[600ms]"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <b className="block text-[17px] font-medium leading-tight tracking-[-0.01em]">{t.title}</b>
              <span className="text-[12.5px] text-white/60 mt-[4px]">{t.count} backgrounds →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
