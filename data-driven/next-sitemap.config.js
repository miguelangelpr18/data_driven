/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://datadriven.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://datadriven.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transform function to add additional metadata
    const customConfig = {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };

    // Add specific priorities for important pages
    if (path === '/') {
      customConfig.priority = 1.0;
    } else if (path.includes('contacto') || path.includes('plan')) {
      customConfig.priority = 0.9;
    }

    return customConfig;
  },
};
