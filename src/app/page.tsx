import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';
import { formatPublishedDate, posts } from '@/content/posts';
import { avatar, name } from '@/lib/info';
import { site } from '@/lib/site';

export default function HomePage() {
  const latestPosts = [...posts]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 2);

  return (
    <div>
      <section aria-labelledby="intro-title">
        <p className="page-kicker">Consultant · Developer · Writer</p>
        <div className="grid items-start gap-8 sm:grid-cols-[1fr_116px] sm:gap-12">
          <div>
            <h1 id="intro-title" className="page-title">
              Hey, I&apos;m Mamar.
            </h1>
            <div className="mt-7 space-y-5 text-[1.08rem] leading-[1.72] text-[var(--secondary)]">
              <p>
                I&apos;m a Salesforce technical consultant from Algeria with a
                background in full-stack web development.
              </p>
              <p>
                I work across Apex, TypeScript, JavaScript, and Next.js,
                building practical applications and integrations around real
                business needs.
              </p>
            </div>
          </div>
          <Image
            alt={name}
            className="order-first aspect-square rounded-[12px] object-cover grayscale sm:order-last"
            src={avatar}
            placeholder="blur"
            width={116}
            height={116}
            priority
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[0.8rem]">
          <a className="text-[var(--muted)] hover:text-[var(--foreground)]" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="text-[var(--muted)] hover:text-[var(--foreground)]" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <section className="mt-20" aria-labelledby="writing-title">
        <div className="flex items-baseline justify-between border-b border-[var(--line)] pb-2.5">
          <h2 id="writing-title" className="section-heading">
            Selected writing
          </h2>
          <Link href="/blog" className="ui-label hover:text-[var(--foreground)]">
            View all
          </Link>
        </div>
        <ul>
          {latestPosts.map((post) => (
            <li key={post.slug} lang={post.language} className="border-b border-[var(--line)]">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-1 py-4 no-underline sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="text-[1.02rem] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </span>
                <time className="ui-label tabular-nums" dateTime={post.publishedAt}>
                  {formatPublishedDate(post.publishedAt)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 border-l-2 border-[var(--accent)] pl-5" aria-labelledby="work-title">
        <p className="page-kicker">Currently</p>
        <h2 id="work-title" className="section-heading">
          Building useful systems for people and businesses.
        </h2>
        <p className="mt-3 max-w-xl text-[var(--secondary)]">
          I&apos;m interested in thoughtful web products, Salesforce architecture,
          and the space where technical systems meet everyday work.
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center font-sans text-[0.8rem] font-semibold text-[var(--foreground)] no-underline hover:text-[var(--accent)]"
        >
          Let&apos;s work together <ArrowIcon />
        </a>
      </section>
    </div>
  );
}
