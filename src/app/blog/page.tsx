import type { Metadata } from 'next';
import Link from 'next/link';
import { formatPublishedDate, posts } from '@/content/posts';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog',
    description: 'Writing about technology, ideas, and Algerian culture.',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description: 'Writing about technology, ideas, and Algerian culture.',
    images: ['/opengraph-image'],
  },
};

export default async function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      <ul className="space-y-5">
        {sortedPosts.map((post) => (
          <li key={post.slug} lang={post.language}>
            <Link
              className="group flex flex-col space-y-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#111010]"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="group-hover:underline">{post.title}</span>
                <time
                  className="text-xs text-neutral-500 dark:text-neutral-400"
                  dateTime={post.publishedAt}
                >
                  {formatPublishedDate(post.publishedAt)}
                </time>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {post.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
