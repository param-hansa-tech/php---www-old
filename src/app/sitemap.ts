import type { MetadataRoute } from 'next'

const ORIGIN = "https://paramhansa.life";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${ORIGIN}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${ORIGIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${ORIGIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}