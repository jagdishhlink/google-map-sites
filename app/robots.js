export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/admin/' }],
    sitemap: 'https://techvisionstore.com/sitemap.xml',
  };
}
