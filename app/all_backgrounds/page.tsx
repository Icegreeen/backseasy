
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { Metadata } from "next";

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

const SECTIONS: { type: string; title: string }[] = [
  { type: "new", title: "New animated backgrounds" },
  { type: "animated", title: "Animated CSS backgrounds" },
  { type: "atmosphere", title: "Atmospheric background effects" },
  { type: "svg", title: "Vector SVG backgrounds" },
  { type: "black", title: "Dark mode backgrounds" },
  { type: "square", title: "Geometric pattern backgrounds" },
  { type: "sky", title: "Sky & nature backgrounds" },
  { type: "butterfly", title: "Artistic butterfly backgrounds" },
  { type: "white", title: "Light mode & minimalist backgrounds" },
  { type: "objects", title: "Object backgrounds for web design" },
];

export default function AllBackgrounds() {
  const allProjects = getProjectMetadata();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="border my-12 border-stroke-1 rounded-out max-w-[1800px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
        <h1 className="text-2 font-medium">All free backgrounds ({allProjects.length})</h1>
        {SECTIONS.map(({ type, title }) => {
          const projects = allProjects.filter((p) => p.type === type);
          if (!projects.length) return null;
          return (
            <section key={type} className="flex flex-col gap-32">
              <h2 className="text-3 font-medium">{title}</h2>
              <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
                {projects.map((project) => (
                  <ProjectPreview category={type} key={project.slug} {...project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
