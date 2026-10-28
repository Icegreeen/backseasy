import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/components/home/data";

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
  const staticPages = ["", "all_backgrounds", "glass-effect", "nebula-effect", "black-hole", "mesh-gradient", "particle-system", "geometric-pattern", "3d-background", "blogs"].map((p) => ({
    url: p ? `${BASE}/${p}/` : `${BASE}/`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.9,
  }));

  const projects = PROJECT_FOLDERS.flatMap((f) => readEntries(path.join(process.cwd(), "projects", f), "projects"));
  const blogs = readEntries(path.join(process.cwd(), "blog"), "blog");

  const categories = CATEGORIES.map((c) => ({
    url: `${BASE}/backgrounds/${c.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categories, ...projects, ...blogs];
}
