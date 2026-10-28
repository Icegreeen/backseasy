import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";

const BASE = "https://backseasy.com";
const PROJECT_FOLDERS = ["butterfly", "black", "square", "sky", "white", "animated", "svg", "atmosphere", "objects", "new"];

const readEntries = (dir: string, urlPrefix: string): MetadataRoute.Sitemap => {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        url: `${BASE}/${urlPrefix}/${file.replace(".md", "")}/`,
        lastModified: data.date ? new Date(data.date) : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    });
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "all_backgrounds", "glass-effect", "nebula-effect", "black-hole", "blogs"].map((p) => ({
    url: p ? `${BASE}/${p}/` : `${BASE}/`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.9,
  }));

  const projects = PROJECT_FOLDERS.flatMap((f) => readEntries(path.join(process.cwd(), "projects", f), "projects"));
  const blogs = readEntries(path.join(process.cwd(), "blog"), "blog");

  return [...staticPages, ...projects, ...blogs];
}
