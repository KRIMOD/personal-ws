import Link from 'next/link';
import { formatPublishedDate, posts } from '@/content/posts';
import { site } from '@/lib/site';

const topics = [
  'Salesforce architecture',
  'Apex and integrations',
  'Web development',
  'Developer experience',
  'Personal software',
  'Algerian culture',
];

export default function HomePage() {
  const sortedPosts = [...posts].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );

  return (
    <div>
      <section aria-labelledby="bio-heading">
        <div className="section-label">
          <span id="bio-heading">Bio</span>
          <span>Algiers, Algeria</span>
        </div>
        <div className="space-y-6 text-[1.03rem] leading-[1.62] text-[var(--foreground)]">
          <p>
            I&apos;m a Salesforce technical consultant and web developer from
            Algeria. I work with Apex, TypeScript, JavaScript, and Next.js to
            build useful applications and integrations.
          </p>
          <p>
            My goal is to make complicated systems easier to understand and
            simpler to use. I care about practical software, thoughtful
            interfaces, and work that holds up over time.
          </p>
        </div>
        <div className="mt-5 flex gap-5 text-[0.95rem] text-[var(--secondary)]">
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link href="/about">More about me</Link>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="notes-heading">
        <h2 id="notes-heading" className="section-heading mb-5">Notes</h2>
        <ul className="grid list-[square] grid-cols-1 gap-x-12 gap-y-1 pl-5 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic} className="pl-1 text-[var(--secondary)]">
              <span className="underline decoration-[var(--line)] underline-offset-3">{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="blogs-heading">
        <h2 id="blogs-heading" className="section-heading mb-5">Blogs</h2>
        <ul className="border-t border-[var(--line)]">
          {sortedPosts.map((post) => (
            <li key={post.slug} lang={post.language} className="border-b border-[var(--line)]">
              <Link
                href={`/blog/${post.slug}`}
                className="grid gap-0.5 py-3 no-underline sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-5"
              >
                <span>{post.title}</span>
                <time className="meta" dateTime={post.publishedAt}>
                  {formatPublishedDate(post.publishedAt)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
