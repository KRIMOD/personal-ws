import type { Metadata } from 'next';
import { GitHubIcon, ArrowIcon, LinkedinIcon } from '@/components/icons';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Salesforce technical consultant and developer from Algeria.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About',
    description: 'Salesforce technical consultant and developer from Algeria.',
    type: 'website',
    url: '/about',
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
    title: 'About',
    description: 'Salesforce technical consultant and developer from Algeria.',
    images: ['/opengraph-image'],
  },
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I&apos;m Mamar. Most people know me as <b>Krimo</b>.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I&apos;m a <b>Salesforce technical consultant</b> from Algeria with a
          background in full-stack web development. I work with Apex,
          TypeScript, JavaScript, and Next.js to build applications and
          integrations around real business needs.
        </p>
        <hr />
        <p>
          I&apos;m passionate about creative pursuits including music,
          photography, videography, and of course, coding. This combination of
          interests keeps me curious about how technology can be useful without
          becoming needlessly complicated.
        </p>
        <p>
          I <b>love</b> building for the web, from a single HTML file to larger
          applications. The web gives anyone a place to learn, write, create,
          and share what they make.
        </p>
        <p className="mb-8">
          This site is where I keep personal experiments and occasional writing
          about technology, ideas, and Algerian culture.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={site.github}
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={site.linkedin}
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
