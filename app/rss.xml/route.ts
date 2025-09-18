import getProjectMetadata from '@/components/projects/getProjectMetadata';
import getBlogMetadata from '@/components/blog/getBlogMetadata';

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
      <title>${project.title} - Free ${project.type} Background</title>
      <description>Free ${project.type} background for web design. Download and customize this ${project.title} background pattern for your projects.</description>
      <link>https://backseasy.com/projects/${project.slug}</link>
      <guid>https://backseasy.com/projects/${project.slug}</guid>
      <pubDate>${new Date(project.date).toUTCString()}</pubDate>
      <category>${project.type}</category>
    </item>`).join('')}
    
    ${blogs.slice(0, 5).map(blog => `
    <item>
      <title>${blog.title}</title>
      <description>${blog.description}</description>
      <link>https://backseasy.com/blog/${blog.slug}</link>
      <guid>https://backseasy.com/blog/${blog.slug}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <category>Blog</category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
