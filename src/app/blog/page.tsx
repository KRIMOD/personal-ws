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
      <header className="mb-14">
        <div className="section-label"><span>Archive</span><span>{sortedPosts.length} posts</span></div>
        <h1 className="page-title">Writing</h1>
        <p className="mt-5 max-w-xl text-[1rem] text-[var(--secondary)]">
          Occasional writing about technology, ideas, and Algerian culture.
        </p>
      </header>
      <ul className="border-t border-[var(--line)]">
        {sortedPosts.map((post) => (
          <li key={post.slug} lang={post.language} className="border-b border-[var(--line)]">
            <Link
              className="group grid gap-1 py-3 no-underline sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              href={`/blog/${post.slug}`}
            >
              <div>
                <span className="text-[1rem] text-[var(--foreground)]">{post.title}</span>
                <p className="mt-0.5 text-[0.9rem] leading-relaxed text-[var(--muted)]">{post.summary}</p>
              </div>
              <time className="meta" dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
