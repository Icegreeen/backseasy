
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Backgrounds - Free Background Collection | Backseasy",
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
    title: "All Backgrounds - Free Background Collection | Backseasy",
    description: "Browse our complete collection of free backgrounds for web design. Animated backgrounds, gradients, glassmorphism effects, and modern UI patterns.",
    url: "https://backseasy.com/all_backgrounds",
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
    title: "All Backgrounds - Free Background Collection | Backseasy",
    description: "Browse our complete collection of free backgrounds for web design. Animated backgrounds, gradients, and modern UI patterns.",
    images: ["https://backseasy.com/seoBack.png"],
  },
  alternates: {
    canonical: "https://backseasy.com/all_backgrounds",
  },
};

export default function Home() {
  const allProjects = getProjectMetadata();

  // Filtrar projetos brancos e pretos
  const butterflyProjects = allProjects.filter((project) => {
    return project.type === "butterfly"; 
  });
  const blackProjects = allProjects.filter((project) => {
    return project.type === "black";
  });

  const squareProjects = allProjects.filter((project) => {
    return project.type === "square";
  });

  const skyProjects = allProjects.filter((project) => {
    return project.type === "sky";
  });

  const whiteProjects = allProjects.filter((project) => {
    return project.type === "white";
  });

  const animatedProjects = allProjects.filter((project) => {
    return project.type === "animated";
  });

  const svgProjects = allProjects.filter((project) => {
    return project.type === "svg";
  });

  const objectsProjects = allProjects.filter((project) => {
    return project.type === "objects";
  });


  // Mapear os projetos em pré-visualizações
  const butterflyProjectPreviews = butterflyProjects.map((project) => (
    <ProjectPreview category={"butterfly"} key={project.slug} {...project} />
  ));

  const blackProjectPreviews = blackProjects.map((project) => (
    <ProjectPreview category={"black"} key={project.slug} {...project} />
  ));

  const squareProjectPreviews = squareProjects.map((project) => (
    <ProjectPreview category={"square"} key={project.slug} {...project} />
  ));

  const skyProjectPreviews = skyProjects.map((project) => (
    <ProjectPreview category={"sky"} key={project.slug} {...project} />
  ));

  const whiteProjectPreviews = whiteProjects.map((project) => (
    <ProjectPreview category={"white"} key={project.slug} {...project} />
  ));

  const animatedProjectPreviews = animatedProjects.map((project) => (
    <ProjectPreview category={"animated"} key={project.slug} {...project} />
  ));

  const svgProjectPreviews = svgProjects.map((project) => (
    <ProjectPreview category={"svg"} key={project.slug} {...project} />
  ));

  const objectsProjectPreviews = objectsProjects.map((project) => (
    <ProjectPreview category={"objects"} key={project.slug} {...project} />
  ));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Backgrounds - Free Background Collection",
    "description": "Complete collection of free backgrounds for web design including animated backgrounds, gradients, glassmorphism effects, and modern UI patterns.",
    "url": "https://backseasy.com/all_backgrounds",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allProjects.length,
      "itemListElement": allProjects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": `Free ${project.type} background for web design`,
          "url": `https://backseasy.com/projects/${project.slug}`,
          "image": project.image.startsWith('http') ? project.image : `https://backseasy.com${project.image}`,
          "author": {
            "@type": "Person",
            "name": project.author
          },
          "genre": project.type,
          "isAccessibleForFree": true
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://backseasy.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "All Backgrounds",
          "item": "https://backseasy.com/all_backgrounds"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
     <div className="border my-12 border-stroke-1 rounded-out max-w-[1800px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
        <h2 className="text-3 font-medium">Animated backgrounds</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {animatedProjectPreviews}
          </div>

          <h2>Svgs</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {svgProjectPreviews}
          </div>

        <h2 className="text-3 font-medium">Backgrounds concepts</h2>
          <h2>Black</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {blackProjectPreviews}
          </div>

          <h2>Square </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {squareProjectPreviews}
          </div>

          <h2>Sky </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {skyProjectPreviews}
          </div>

          <h2>Butterfly </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {butterflyProjectPreviews}
          </div>

          <h2>White</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {whiteProjectPreviews}
          </div>

          <h2>Object</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {objectsProjectPreviews}
          </div>
      </div>

    </>
  );
}

