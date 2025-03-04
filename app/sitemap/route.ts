import { MetadataRoute } from "next";

export default async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://backseasy.com";

  const staticPaths = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/all_backgrounds`, lastModified: new Date().toISOString() },
    //{ url: `${baseUrl}/auth`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
  ];

  return [...staticPaths];
}