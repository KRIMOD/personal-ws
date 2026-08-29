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
        <p className="page-kicker">Writing</p>
        <h1 className="page-title">Notes and essays.</h1>
        <p className="mt-6 max-w-xl text-[1.03rem] text-[var(--secondary)]">
          Occasional writing about technology, ideas, and Algerian culture.
        </p>
      </header>
      <div className="border-b border-[var(--line)] pb-2.5">
        <h2 className="section-heading">All posts</h2>
      </div>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug} lang={post.language} className="border-b border-[var(--line)]">
            <Link
              className="group grid gap-2 py-5 no-underline sm:grid-cols-[1fr_auto] sm:gap-8"
              href={`/blog/${post.slug}`}
            >
              <div>
                <span className="text-[1.08rem] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">{post.title}</span>
                <p className="mt-1 text-[0.94rem] leading-relaxed text-[var(--secondary)]">{post.summary}</p>
              </div>
              <time className="ui-label tabular-nums sm:pt-1" dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
