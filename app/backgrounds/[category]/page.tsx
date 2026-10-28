import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectCard from "@/components/home/ProjectCard";
import { CATEGORIES } from "@/components/home/data";
import { fraunces } from "@/components/home/fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  const all = getProjectMetadata();
  return CATEGORIES.filter((c) => all.some((p) => p.type === c.type)).map((c) => ({ category: c.slug }));
}

const find = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = find(params.category);
  if (!cat) return {};
  const url = `https://backseasy.com/backgrounds/${cat.slug}/`;
  return {
    title: `${cat.title} - Free Download`,
    description: cat.blurb,
    alternates: { canonical: url },
    openGraph: {
      title: cat.title,
      description: cat.blurb,
      url,
      siteName: "Backseasy",
      type: "website",
      images: [{ url: "https://backseasy.com/seoBack.png", width: 1200, height: 630, alt: cat.title }],
    },
    twitter: { card: "summary_large_image", title: cat.title, description: cat.blurb, images: ["https://backseasy.com/seoBack.png"] },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = find(params.category);
  if (!cat) notFound();

  const projects = getProjectMetadata()
    .filter((p) => p.type === cat.type)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  if (!projects.length) notFound();

  const others = CATEGORIES.filter((c) => c.slug !== cat.slug);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": cat.title,
      "description": cat.blurb,
      "url": `https://backseasy.com/backgrounds/${cat.slug}/`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": projects.length,
        "itemListElement": projects.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://backseasy.com/projects/${p.slug}/`,
          "name": p.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://backseasy.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Backgrounds", "item": "https://backseasy.com/all_backgrounds/" },
        { "@type": "ListItem", "position": 3, "name": cat.title, "item": `https://backseasy.com/backgrounds/${cat.slug}/` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="w-full max-w-[1440px] mt-[56px]">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-8 text-[13px] text-white/50 mb-24">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/all_backgrounds/" className="hover:text-white">All backgrounds</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/80">{cat.label}</span>
        </nav>

        <h1 className={`${fraunces.className} text-[clamp(40px,6.4vw,92px)] leading-[0.98] tracking-[-0.04em]`}>{cat.title}</h1>
        <p className="mt-24 max-w-[640px] text-[18px] leading-[1.6] text-white/70">{cat.blurb}</p>
        <p className="mt-12 text-[13px] text-white/50">{projects.length} free backgrounds</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-[40px]">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <section className="mt-[90px] border-t border-stroke-1 pt-[32px]" aria-labelledby="more-types">
          <h2 id="more-types" className={`${fraunces.className} text-[clamp(26px,3vw,38px)] tracking-[-0.03em] mb-24`}>
            More types
          </h2>
          <ul className="flex flex-wrap gap-8">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/backgrounds/${c.slug}/`}
                  className="inline-flex px-[16px] py-[8px] rounded-full border border-stroke-1 text-[13.5px] text-white/70 hover:text-white hover:border-white/25 duration-200"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
