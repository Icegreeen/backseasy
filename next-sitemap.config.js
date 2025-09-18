// next-sitemap.config.js
const fs = require('fs');
const path = require('path');

// Function to get all project metadata
function getProjectMetadata() {
  const projects = [];
  const projectFolders = ['butterfly', 'black', 'square', 'sky', 'white', 'animated', 'svg', 'atmosphere', 'objects'];
  
  projectFolders.forEach(folder => {
    const folderPath = path.join(process.cwd(), 'projects', folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.md'));
      files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const matter = require('gray-matter');
        const { data } = matter(content);
        projects.push({
          slug: file.replace('.md', ''),
          lastmod: data.date || new Date().toISOString(),
          priority: 0.8,
          changefreq: 'weekly'
        });
      });
    }
  });
  
  return projects;
}

// Function to get all blog metadata
function getBlogMetadata() {
  const blogs = [];
  const blogPath = path.join(process.cwd(), 'blog');
  
  if (fs.existsSync(blogPath)) {
    const files = fs.readdirSync(blogPath).filter(file => file.endsWith('.md'));
    files.forEach(file => {
      const filePath = path.join(blogPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const matter = require('gray-matter');
      const { data } = matter(content);
      blogs.push({
        slug: file.replace('.md', ''),
        lastmod: data.date || new Date().toISOString(),
        priority: 0.7,
        changefreq: 'monthly'
      });
    });
  }
  
  return blogs;
}

module.exports = {
  siteUrl: 'https://backseasy.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/dashboard', '/auth', '/admin', '/api/*'],
  additionalPaths: async (config) => {
    const projects = getProjectMetadata();
    const blogs = getBlogMetadata();
    
    const projectPaths = projects.map(project => ({
      loc: `/projects/${project.slug}`,
      lastmod: project.lastmod,
      priority: project.priority,
      changefreq: project.changefreq,
    }));
    
    const blogPaths = blogs.map(blog => ({
      loc: `/blog/${blog.slug}`,
      lastmod: blog.lastmod,
      priority: blog.priority,
      changefreq: blog.changefreq,
    }));
    
    return [
      {
        loc: '/all_backgrounds',
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'daily',
      },
      {
        loc: '/glass-effect',
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'weekly',
      },
      {
        loc: '/nebula-effect',
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'weekly',
      },
      {
        loc: '/black-hole',
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'weekly',
      },
      {
        loc: '/blogs',
        lastmod: new Date().toISOString(),
        priority: 0.8,
        changefreq: 'weekly',
      },
      ...projectPaths,
      ...blogPaths,
    ];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/auth', '/admin', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/dashboard', '/auth', '/admin', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://backseasy.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/projects/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/blog/')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.includes('/all_backgrounds') || path.includes('-effect')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq,
      priority,
    };
  },
};
  