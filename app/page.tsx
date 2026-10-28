import getProjectMetadata from "@/components/projects/getProjectMetadata";
import type { Metadata } from "next";
import EditorialHero from "@/components/home/EditorialHero";
import BackgroundIndex from "@/components/home/BackgroundIndex";
import TrendingNow from "@/components/home/TrendingNow";
import SupportCta from "@/components/home/SupportCta";
import GeneratorsSection from "@/components/home/GeneratorsSection";
import BrowseByType from "@/components/home/BrowseByType";
import { CATEGORY_LABELS, CATEGORY_ORDER, TRENDING_SLUGS } from "@/components/home/data";

export const metadata: Metadata = {
  alternates: { canonical: "https://backseasy.com/" },
};

export default function Home() {
  const allProjects = getProjectMetadata();

  const categories = CATEGORY_ORDER.filter((type) => allProjects.some((p) => p.type === type)).map((type) => ({
    type,
    label: CATEGORY_LABELS[type] ?? type,
  }));

  const bySlug = new Map(allProjects.map((p) => [p.slug, p]));
  const trending = TRENDING_SLUGS.map((slug) => bySlug.get(slug)).filter((p): p is NonNullable<typeof p> => !!p);

  const webAppStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Backseasy",
    "description": "Free background generator for web designers and developers. Create stunning, customizable backgrounds with CSS gradients, animations, and modern UI patterns.",
    "url": "https://backseasy.com/",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any (web browser)",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "creator": { "@type": "Person", "name": "Flavio Aquila", "url": "https://github.com/Icegreeen" },
    "publisher": { "@type": "Organization", "name": "Backseasy", "url": "https://backseasy.com/", "logo": "https://backseasy.com/logo.png" },
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  };

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Backseasy Background Collection",
    "description": "Free collection of customizable backgrounds for web designers and developers",
    "url": "https://backseasy.com/",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allProjects.length,
      "itemListElement": trending.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://backseasy.com/projects/${project.slug}/`,
        "name": project.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
      />

      <EditorialHero total={allProjects.length} categories={categories.length} latest={allProjects.reduce((m, p) => (p.date > m ? p.date : m), "")} />
      <BackgroundIndex projects={allProjects} categories={categories} total={allProjects.length} />
      <GeneratorsSection />
      <BrowseByType projects={allProjects} />
      <TrendingNow projects={trending} />
      <SupportCta />
    </>
  );
}
