import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/blog'].map((path) => ({
    url: new URL(path || '/', site.url).toString(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const articles = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, site.url).toString(),
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
