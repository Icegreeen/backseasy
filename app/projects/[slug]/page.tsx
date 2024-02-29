import fs from "fs";
import Markdown from "markdown-to-jsx";
import getProjectMetadata from "../../../components/projects/getProjectMetadata";
import matter from "gray-matter";
import Image from "next/image";
import moment from "moment";

const getProjectContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    content: matterResult.content,
    image: matterResult.data.image,
    date: matterResult.data.date,
    author: matterResult.data.author,
    type: matterResult.data.type,
    title: matterResult.data.title,
  };
};

export const generateStaticParams = async () => {
  const projects = getProjectMetadata();
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export default function Project(props: any) {
  const slug = props.params.slug;
  const { content, image, date, author, type, title } = getProjectContent(slug);
  return (
    <div className="flex flex-col gap-64 max-[600px]:gap-36 items-center align-middle p-48 mt-128 border border-stroke-1 rounded-out max-w-[1300px] min-h-screen w-full">
      <div className="flex flex-col gap-48 max-[600px]:gap-32">
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
          alt="Banner"
          className="aspect-[16/6] object-cover w-full h-auto border border-stroke-2 rounded-in"
        />
      </div>
      <article className="prose w-full prose-img:rounded-out prose-img:border prose-img:border-stroke-2 lg:prose-xl prose-h1:text-1 prose-h1:font-bold prose-h2:text-2 prose-h3:text-3 prose-p:text-text-1 prose-p:text-body prose-li:text-body prose-ul:text-body prose-p:font-normal prose-headings:w-full prose-headings:text-text-1 prose-a:text-brand-blue prose-a:font-normal prose-a:ease-out prose-a:transition-all prose-a:duration-150 hover:prose-a:text-brand-blue/80 prose-code:text-[#b3b3b3] prose-li:text-text-1 prose-ul:text-text-1 prose-blockquote:text-[#d3d3d3]">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
