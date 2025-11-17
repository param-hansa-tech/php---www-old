import type { MetadataRoute } from 'next'

const ORIGIN = "https://paramhansa.life";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${ORIGIN}/sitemap.xml`,
  }
}