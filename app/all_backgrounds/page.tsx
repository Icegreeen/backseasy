
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectCard from "@/components/home/ProjectCard";
import { fraunces } from "@/components/home/fonts";
import { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/components/home/data";

export const metadata: Metadata = {
  title: "All Backgrounds - Free Background Collection",
  description: "Browse our complete collection of free backgrounds for web design. Animated backgrounds, gradients, glassmorphism effects, and modern UI patterns. Download and customize instantly!",
  keywords: [
    "all backgrounds",
    "background collection",
    "free backgrounds",
    "web design backgrounds",
    "animated backgrounds",
    "gradient backgrounds",
    "glassmorphism backgrounds",
    "CSS backgrounds",
    "background patterns",
    "UI/UX backgrounds",
    "frontend backgrounds",
    "design backgrounds"
  ],
  openGraph: {
    title: "All Backgrounds - Free Background Collection",
    description: "Browse our complete collection of free backgrounds for web design. Animated backgrounds, gradients, glassmorphism effects, and modern UI patterns.",
    url: "https://backseasy.com/all_backgrounds/",
    siteName: "Backseasy",
    images: [
      {
        url: "https://backseasy.com/seoBack.png",
        width: 1200,
        height: 630,
        alt: "Backseasy Background Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Backgrounds - Free Background Collection",
    description: "Browse our complete collection of free backgrounds for web design. Animated backgrounds, gradients, and modern UI patterns.",
    images: ["https://backseasy.com/seoBack.png"],
  },
  alternates: {
    canonical: "https://backseasy.com/all_backgrounds/",
  },
};

export default function AllBackgrounds() {
  const allProjects = getProjectMetadata();

  const sections = CATEGORIES.map((c) => ({
    ...c,
    items: allProjects
      .filter((p) => p.type === c.type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  })).filter((c) => c.items.length > 0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Backgrounds - Free Background Collection",
    "description": "Complete collection of free backgrounds for web design including animated backgrounds, gradients, glassmorphism effects, and modern UI patterns.",
    "url": "https://backseasy.com/all_backgrounds/",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allProjects.length,
      "itemListElement": allProjects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://backseasy.com/projects/${project.slug}/`,
        "name": project.title,
      })),
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://backseasy.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Backgrounds", "item": "https://backseasy.com/all_backgrounds/" },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="w-full max-w-[1440px] mt-[56px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-8 text-[13px] text-white/50 mb-24">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/80">All backgrounds</span>
        </nav>

        <h1 className={`${fraunces.className} text-[clamp(44px,7vw,104px)] leading-[0.96] tracking-[-0.045em]`}>
          All backgrounds<span className="text-[#ff9d2e]">.</span>
        </h1>
        <p className="mt-24 max-w-[620px] text-[18px] leading-[1.6] text-white/70">
          {allProjects.length} free backgrounds in {sections.length} types. Pick one, copy the code, ship it.
        </p>

        <ul className="flex flex-wrap gap-8 mt-[32px]" aria-label="Jump to a type">
          {sections.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="inline-flex items-center gap-8 px-[14px] py-[7px] rounded-full border border-stroke-1 text-[13px] text-white/70 hover:text-white hover:border-white/25 duration-200"
              >
                {c.label}
                <span className="text-white/40">{c.items.length}</span>
              </a>
            </li>
          ))}
        </ul>

        {sections.map((c) => (
          <section key={c.slug} id={c.slug} className="mt-[10px] scroll-mt-[24px]" aria-labelledby={`${c.slug}-title`}>
            <div className="flex flex-wrap items-baseline gap-16 mb-24">
              <h2 id={`${c.slug}-title`} className={`${fraunces.className} text-[clamp(28px,3.4vw,44px)] tracking-[-0.03em]`}>
                {c.title}
              </h2>
              <span className="text-[13px] text-white/45">{c.items.length} backgrounds</span>
              <Link href={`/backgrounds/${c.slug}/`} className="text-sub text-white/60 hover:text-white">
                View this type →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              {c.items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
