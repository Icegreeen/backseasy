export const GET = async () => {
  const robots = `
  User-agent: *
  Allow: /

  Disallow: /dashboard

  Sitemap: https://backseasy.com/sitemap.xml
  `;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
