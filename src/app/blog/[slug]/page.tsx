import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  formatPublishedDate,
  getPost,
  posts,
} from '@/content/posts';
import { site } from '@/lib/site';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  const canonical = `/blog/${post.slug}`;
  const image = post.image ?? '/opengraph-image';

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      url: canonical,
      locale: 'fr_FR',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [image],
    },
  };
}

export default async function Blog({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const PostContent = post.component;
  const canonicalUrl = new URL(`/blog/${post.slug}`, site.url).toString();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: post.language,
    url: canonicalUrl,
    image: new URL(post.image ?? '/opengraph-image', site.url).toString(),
    author: {
      '@type': 'Person',
      name: site.name,
      url: site.url.toString(),
    },
  };

  return (
    <article lang={post.language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <header className="mb-12">
        <p className="page-kicker">Essay</p>
        <h1 className="page-title">
          {post.title}
        </h1>
        <time
          className="ui-label mt-5 inline-block tabular-nums"
          dateTime={post.publishedAt}
        >
          {formatPublishedDate(post.publishedAt)}
        </time>
      </header>
      <div className="prose">
        <PostContent />
      </div>
    </article>
  );
}
