import fs from "fs";
import Markdown from "markdown-to-jsx";
import getProjectMetadata from "../../../components/projects/getProjectMetadata";
import matter from "gray-matter";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import path from "path";
import { Metadata } from "next";

const getProjectContent = (slug: string) => {
  const folder = "projects/";
  const possibleFolders = ['butterfly', 'black', 'square', 'sky', 'white', 'animated', 'svg', 'atmosphere', 'objects'];

  const findFile = (folderName: string) => path.join(folder, folderName, `${slug}.md`);

  let file: string | undefined;

  for (const folderName of possibleFolders) {
      const filePath = findFile(folderName);
      if (fs.existsSync(filePath)) {
          file = filePath;
          break;
      }
  }

  if (!file) {
      throw new Error(`File not found for slug: ${slug}`);
  }

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  const { content: matterContent, data: { image, date, author, type, title } } = matterResult;

  return { content: matterContent, image, date, author, type, title };
};


export const generateStaticParams = async () => {
  const projects = getProjectMetadata();
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { title, type, image, date, author } = getProjectContent(params.slug);
  const description = `Free ${type} background for web design. Download and customize this ${title} background pattern for your projects. Created by ${author}.`;
  
  return {
    title: `${title} - Free ${type} Background | Backseasy`,
    description,
    keywords: [
      `${type} background`,
      `${title} background`,
      "free background",
      "web design background",
      "CSS background",
      "background pattern",
      "download background",
      "custom background",
      "animated background",
      "gradient background"
    ],
    openGraph: {
      title: `${title} - Free ${type} Background`,
      description,
      url: `https://backseasy.com/projects/${params.slug}`,
      siteName: "Backseasy",
      images: [
        {
          url: image.startsWith('http') ? image : `https://backseasy.com${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${type} Background`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Free ${type} Background`,
      description,
      images: [image.startsWith('http') ? image : `https://backseasy.com${image}`],
    },
    alternates: {
      canonical: `https://backseasy.com/projects/${params.slug}`,
    },
  };
}

export default function Project(props: any) {
  const slug = props.params.slug;
  const { content, image, date, author, type, title } = getProjectContent(slug);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": `Free ${type} background for web design. Download and customize this ${title} background pattern for your projects.`,
    "url": `https://backseasy.com/projects/${slug}`,
    "image": image.startsWith('http') ? image : `https://backseasy.com${image}`,
    "author": {
      "@type": "Person",
      "name": author
    },
    "creator": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Backseasy",
      "url": "https://backseasy.com"
    },
    "dateCreated": date,
    "dateModified": date,
    "inLanguage": "en-US",
    "genre": type,
    "keywords": `${type} background, ${title} background, free background, web design background, CSS background`,
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "mainEntity": {
      "@type": "DigitalDocument",
      "name": title,
      "description": `Free ${type} background pattern for web design`,
      "encodingFormat": "text/markdown"
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
      <div className="flex flex-col gap-64 max-[600px]:gap-36 items-center align-middle p-48 my-48 border border-stroke-1 rounded-out max-w-[1300px] min-h-screen w-full">
        <div className="flex flex-col gap-48 max-[600px]:gap-32">

          <Link href={"/"} className="flex items-center transition-transform  hover:opacity-45">
            <img src="/icons/back.svg" alt="back" />
            <h1 className="text-4">Back</h1>
          </Link>
          
          <h1 className="text-1 font-bold leading-none">{title}</h1>
          <div className="flex justify-between max-[450px]:justify-start max-[420px]:flex-wrap gap-16">
            <p className="text-body whitespace-nowrap">{type}</p>
            <p className="text-body whitespace-nowrap">{author}</p>
            <p className="text-body whitespace-nowrap">
              {moment(date).format("MMMM D, YYYY")}
            </p>
          </div>
          <Image
            src={image}
            width={1220}
            height={714}
            quality={100}
            alt={`${title} - ${type} Background`}
            className="aspect-[12/6] object-cover w-full h-auto border border-stroke-2 rounded-in"
          />
          {/* aspect-[12/6] */}
        </div>
        <article className="prose w-full prose-img:rounded-out prose-img:border prose-img:border-stroke-2 lg:prose-xl prose-h1:text-1 prose-h1:font-bold prose-h2:text-2 prose-h3:text-3 prose-p:text-text-1 prose-p:text-body prose-li:text-body prose-ul:text-body prose-p:font-normal prose-headings:w-full prose-headings:text-text-1 prose-a:text-brand-blue prose-a:font-normal prose-a:ease-out prose-a:transition-all prose-a:duration-150 hover:prose-a:text-brand-blue/80 prose-code:text-[#b3b3b3] prose-li:text-text-1 prose-ul:text-text-1 prose-blockquote:text-[#d3d3d3]">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </>
  );
}
