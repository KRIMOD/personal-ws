import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Lora, Manrope } from 'next/font/google';
import Navigation from '@/components/sidebar';
import { site } from '@/lib/site';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-reading',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: site.url,
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: '/',
    siteName: site.shortName,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/opengraph-image'],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ea' },
    { media: '(prefers-color-scheme: dark)', color: '#181715' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${manrope.variable}`}>
      <body className="relative min-h-screen antialiased">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to content
        </a>
        <div className="site-shell">
          <Navigation />
          <main id="main-content">{children}</main>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} {site.shortName}</span>
            <span>Algiers, Algeria</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
