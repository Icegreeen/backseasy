import fs from "fs";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import getBlogMetadata from "../../../components/blog/getBlogMetadata";
import matter from "gray-matter";
import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const getBlogContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) notFound();
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    content: matterResult.content,
    image: matterResult.data.image,
    date: matterResult.data.date,
    author: matterResult.data.author,
    type: matterResult.data.type,
    title: matterResult.data.title,
    description: matterResult.data.description as string | undefined,
  };
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { title, image, date, author, description } = getBlogContent(params.slug);
  const desc = description || title;
  const url = `https://backseasy.com/blog/${params.slug}/`;
  const imageUrl = image?.startsWith("http") ? image : `https://backseasy.com${image}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: "Backseasy",
      type: "article",
      publishedTime: date ? new Date(date).toISOString() : undefined,
      authors: author ? [author] : undefined,
      images: image ? [{ url: imageUrl }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description: desc, images: image ? [imageUrl] : undefined },
  };
}

export default function Blog(props: any) {
  const slug = props.params.slug;
  const { content, image, date, author, type, title } = getBlogContent(slug);
  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": image,
    "datePublished": date,
    "dateModified": date,
    "author": { "@type": "Person", "name": author },
    "publisher": { "@type": "Organization", "name": "Backseasy", "logo": { "@type": "ImageObject", "url": "https://backseasy.com/logo.png" } },
    "mainEntityOfPage": `https://backseasy.com/blog/${slug}/`,
    "inLanguage": "en-US",
  };
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
    <div className="flex flex-col my-12 gap-64 max-[600px]:gap-36 items-center align-middle p-48 mt-48 border border-stroke-1 rounded-out max-w-[1300px] min-h-screen w-full">
      <div className="flex flex-col gap-48 max-[600px]:gap-32">
        <Link href={"/blogs"} className="flex items-center transition-transform  hover:opacity-45">
          <img src="/icons/back.svg" alt="back" />
          <span className="text-4">Back</span>
        </Link>

        <h1 className="text-1 font-bold leading-none">{title}</h1>
          <div className="flex justify-between max-[450px]:justify-start max-[420px]:flex-wrap gap-16">
            <p className="text-body whitespace-nowrap">{type}</p>

            <a className="flex items-center transition-transform hover:opacity-45 hover:scale-105" href="https://github.com/Icegreeen">
              <img src="/icons/github.png" className="h-24 mx-8" alt="github" />
              <p className="text-body whitespace-nowrap ">{author}</p>
            </a>

            <p className="text-body whitespace-nowrap">
              {moment(date).format("MMMM D, YYYY")}
            </p>
          </div>
          <Image
            src={image}
            width={1220}
            height={714}
            quality={75}
            priority
            sizes="(max-width: 1300px) 100vw, 1220px"
            alt={title}
            className="aspect-[12/6] object-cover w-full h-auto border border-stroke-2 rounded-in"
          />
      </div>
      <article className="prose w-full prose-img:rounded-out prose-img:border prose-img:border-stroke-2 lg:prose-xl prose-h1:text-1 prose-h1:font-bold prose-h2:text-2 prose-h3:text-3 prose-p:text-text-1 prose-p:text-body prose-li:text-body prose-ul:text-body prose-p:font-normal prose-headings:w-full prose-headings:text-text-1 prose-a:text-brand-blue prose-a:font-normal prose-a:ease-out prose-a:transition-all prose-a:duration-150 hover:prose-a:text-brand-blue/80 prose-code:text-[#b3b3b3] prose-li:text-text-1 prose-ul:text-text-1 prose-blockquote:text-[#d3d3d3]">
        <Markdown>{content}</Markdown>
      </article>
    </div>
    </>
  );
}
