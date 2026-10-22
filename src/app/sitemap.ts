import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.lahomefitness.com';
  const lastModified = new Date();
  return ['', '/training', '/pricing', '/coaching', '/contact', '/privacy', '/terms'].map(path => ({
    url: `${base}${path}`, lastModified, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : ['/privacy','/terms'].includes(path) ? 0.3 : 0.8,
  }));
}
