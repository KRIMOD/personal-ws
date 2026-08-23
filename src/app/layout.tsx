import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Sidebar from '@/components/sidebar';
import { site } from '@/lib/site';

const kaisei = localFont({
  src: '../../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111010' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
      <body className="relative mx-4 mt-8 mb-40 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-black px-4 py-2 text-sm text-white transition-transform focus:translate-y-0 dark:bg-white dark:text-black"
        >
          Skip to content
        </a>
        <Sidebar />
        <main
          id="main-content"
          className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
