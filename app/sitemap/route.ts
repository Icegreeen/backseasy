export const GET = async () => {
  const baseUrl = "https://backseasy.com";

  const staticPaths = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/all_backgrounds`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  ${staticPaths
    .map(
      (path) => `
    <url>
      <loc>${path.url}</loc>
      <lastmod>${path.lastModified}</lastmod>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
