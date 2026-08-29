import type { Metadata } from 'next';
import { site } from '@/lib/site';

const description =
  'Tech lead, CRM consultant, and nine-time Salesforce certified developer at Ornidex in Paris.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About',
    description,
    type: 'website',
    url: '/about',
    images: [
      { url: '/opengraph-image', width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description,
    images: ['/opengraph-image'],
  },
};

const expertise = [
  {
    term: 'Salesforce',
    description:
      'Sales Cloud, Service Cloud, Marketing Cloud, Account Engagement (formerly Pardot), Net Zero Cloud, and Service Cloud Voice.',
  },
  {
    term: 'AI & data',
    description:
      'Agentforce, Data 360 (Data Cloud), and MuleSoft solutions that connect customer data, automation, and AI-assisted workflows.',
  },
  {
    term: 'CRM platforms',
    description:
      'Salesforce-led CRM architecture and delivery, alongside multiple customer service projects built with Freshdesk.',
  },
  {
    term: 'Engineering',
    description:
      'Technical leadership, Apex and web development, integrations, solution design, delivery, and collaboration with implementation partners.',
  },
] as const;

const selectedWork = [
  {
    title: 'Service Cloud Voice',
    description:
      'Implemented Service Cloud Voice solutions and worked directly with an integration partner to shape and deliver their voice offering.',
  },
  {
    title: 'CTI migration',
    description:
      'Helped organizations move from legacy computer telephony integration setups to Service Cloud Voice, covering the technical migration and operational transition.',
  },
  {
    title: 'AI-enabled CRM',
    description:
      'Helped companies prepare for and adopt AI-enabled customer operations using Agentforce, Data 360, and MuleSoft.',
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      <header>
        <div className="section-label">
          <span>Profile</span>
          <span>Paris, France</span>
        </div>
        <h1 className="page-title">Tech lead, developer, and CRM consultant.</h1>
        <div className="mt-6 space-y-5 text-[1.03rem] leading-[1.65] text-[var(--secondary)]">
          <p>
            I&apos;m Mamar Abdelkrim Temam, usually called Krimo. I work at{' '}
            <strong className="text-[var(--foreground)]">Ornidex</strong> in
            Paris&apos;s 9th arrondissement, where I combine technical leadership,
            hands-on development, and CRM consulting.
          </p>
          <p>
            I&apos;m nine-time Salesforce certified. My work covers solution
            architecture, implementation, integrations, and the practical work
            of helping teams adopt new customer service, data, and AI
            capabilities.
          </p>
        </div>
      </header>

      <section className="mt-14" aria-labelledby="expertise-title">
        <div className="border-b border-[var(--line)] pb-2">
          <h2 id="expertise-title" className="section-heading">
            Expertise
          </h2>
        </div>
        <dl>
          {expertise.map(({ term, description: detail }) => (
            <div
              key={term}
              className="grid gap-1 border-b border-[var(--line)] py-4 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <dt className="text-[0.95rem] font-semibold text-[var(--foreground)]">
                {term}
              </dt>
              <dd className="text-[var(--secondary)]">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14" aria-labelledby="work-title">
        <div className="border-b border-[var(--line)] pb-2">
          <h2 id="work-title" className="section-heading">
            Selected work
          </h2>
        </div>
        <div>
          {selectedWork.map(({ title, description: detail }) => (
            <article key={title} className="border-b border-[var(--line)] py-4">
              <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
              <p className="mt-1 text-[var(--secondary)]">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="approach-title">
        <h2 id="approach-title" className="section-heading mb-3">
          How I work
        </h2>
        <div className="prose">
          <p>
            I like to understand the operating problem before choosing the
            technology. Good CRM work is not only configuration or code; it is
            a clear model of the customer journey, reliable integrations, and a
            system that teams can confidently operate after delivery.
          </p>
          <p>
            I&apos;m comfortable moving between architecture discussions,
            implementation details, partner coordination, and hands-on problem
            solving. The goal is always the same: reduce complexity and leave a
            maintainable solution behind.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-heading mb-3">Contact</h2>
        <p className="max-w-xl text-[var(--secondary)]">
          The best place to reach me professionally is LinkedIn. You can also
          find my code and personal experiments on GitHub.
        </p>
        <div className="mt-4 flex gap-5 text-[0.95rem]">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
