import { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.baseUrl
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/auth/*', // Disallow auth pages from being indexed
        '/api/*',  // Disallow API routes
        '/admin/*', // Disallow admin pages if any
        '/_next/*', // Disallow Next.js internal files
        '/private/*', // Disallow private pages if any
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
