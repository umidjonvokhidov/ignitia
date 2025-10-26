import { MetadataRoute } from 'next';
import { env } from '@/lib/env';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.baseUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/auth/*', '/api/*', '/admin/*', '/_next/*', '/private/*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
