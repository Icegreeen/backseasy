import getProjectMetadata from '@/components/projects/getProjectMetadata';
import getBlogMetadata from '@/components/blog/getBlogMetadata';

const esc = (v: string) =>
  String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const projects = getProjectMetadata();
  const blogs = getBlogMetadata();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Backseasy - Free Background Generator</title>
    <description>Create stunning, customizable backgrounds for websites and apps instantly! Free CSS gradient generator, animated backgrounds, and modern UI patterns.</description>
    <link>https://backseasy.com</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://backseasy.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://backseasy.com/logo.png</url>
      <title>Backseasy</title>
      <link>https://backseasy.com</link>
    </image>
    
    ${projects.slice(0, 10).map(project => `
    <item>
      <title>${esc(project.title)} - Free ${esc(project.type)} Background</title>
      <description>Free ${esc(project.type)} background for web design. Download and customize this ${esc(project.title)} background pattern for your projects.</description>
      <link>https://backseasy.com/projects/${project.slug}/</link>
      <guid>https://backseasy.com/projects/${project.slug}/</guid>
      <pubDate>${new Date(project.date).toUTCString()}</pubDate>
      <category>${esc(project.type)}</category>
    </item>`).join('')}
    
    ${blogs.slice(0, 5).map(blog => `
    <item>
      <title>${esc(blog.title)}</title>
      <description>${esc(blog.description)}</description>
      <link>https://backseasy.com/blog/${blog.slug}/</link>
      <guid>https://backseasy.com/blog/${blog.slug}/</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <category>Blog</category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
