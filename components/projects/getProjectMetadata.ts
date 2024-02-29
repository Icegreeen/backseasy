import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "./ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  const projects = markdownProjects
    .map((filename) => {
      const fileContents = fs.readFileSync(`projects/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        image: matterResult.data.image,
        type: matterResult.data.type,
        date: matterResult.data.date,
        slug: filename.replace(".md", ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return projects;
};

export default getProjectMetadata;
