import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Salesforce technical consultant and developer from Algeria.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About',
    description: 'Salesforce technical consultant and developer from Algeria.',
    type: 'website',
    url: '/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description: 'Salesforce technical consultant and developer from Algeria.',
    images: ['/opengraph-image'],
  },
};

const capabilities = [
  ['Salesforce', 'Apex, integrations, custom applications, and platform architecture.'],
  ['Web development', 'TypeScript, JavaScript, React, Next.js, and modern web standards.'],
  ['Problem solving', 'Turning complicated workflows into systems that are easier to understand and use.'],
] as const;

export default function AboutPage() {
  return (
    <div>
      <header>
        <div className="section-label"><span>Profile</span><span>About</span></div>
        <h1 className="page-title">A builder with a practical streak.</h1>
        <p className="mt-6 max-w-xl text-[1.03rem] leading-[1.65] text-[var(--secondary)]">
          I&apos;m Mamar Abdelkrim Temam, usually called Krimo. I&apos;m a Salesforce
          technical consultant from Algeria with a background in full-stack web
          development.
        </p>
      </header>

      <section className="mt-14" aria-labelledby="approach-title">
        <div className="border-b border-[var(--line)] pb-2">
          <h2 id="approach-title" className="section-heading">How I work</h2>
        </div>
        <div className="prose mt-5">
          <p>
            I enjoy understanding the real problem before reaching for a tool.
            Most good software starts with careful listening, a clear model of
            the work, and fewer moving parts than you first imagined.
          </p>
          <p>
            My work spans Salesforce, Apex, TypeScript, JavaScript, and Next.js.
            I care about maintainability, useful interfaces, and systems that
            leave the people using them with less friction than before.
          </p>
          <p>
            Outside client work, I&apos;m interested in writing, photography,
            videography, music, and Algerian culture. This site is a small place
            for those interests to meet.
          </p>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="capabilities-title">
        <div className="border-b border-[var(--line)] pb-2">
          <h2 id="capabilities-title" className="section-heading">What I do</h2>
        </div>
        <dl>
          {capabilities.map(([term, description]) => (
            <div key={term} className="grid gap-1 border-b border-[var(--line)] py-4 sm:grid-cols-[140px_1fr] sm:gap-8">
              <dt className="text-[0.95rem] font-semibold text-[var(--foreground)]">{term}</dt>
              <dd className="text-[var(--secondary)]">{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <h2 className="section-heading mb-3">Contact</h2>
        <p className="max-w-xl text-[var(--secondary)]">
          The best place to reach me professionally is LinkedIn. You can also
          follow my code and experiments on GitHub.
        </p>
        <div className="mt-4 flex gap-5 text-[0.95rem]">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </section>
    </div>
  );
}
