import { MetadataRoute } from "next";

export default function GET(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private", "/api"],
      },
    ],
    sitemap: "https://backseasy.com/sitemap.xml",
  };
}
