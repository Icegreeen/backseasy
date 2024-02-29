import fs from "fs";
import matter from "gray-matter";
import { BlogMetadata } from "./BlogMetadata";

const getBlogMetadata = (): BlogMetadata[] => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));

  const blogs = markdownBlogs
    .map((filename) => {
      const fileContents = fs.readFileSync(`blog/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        type: matterResult.data.type,
        image: matterResult.data.image,
        author: matterResult.data.author,
        date: matterResult.data.date,
        slug: filename.replace(".md", ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
};

export default getBlogMetadata;
