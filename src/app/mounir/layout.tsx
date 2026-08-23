import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Palette card studio',
  description:
    'Create a four-color palette card with an optional background and export it as a PNG.',
  alternates: {
    canonical: '/mounir',
  },
  openGraph: {
    title: 'Palette card studio',
    description:
      'Create a four-color palette card with an optional background and export it as a PNG.',
    type: 'website',
    url: '/mounir',
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
    title: 'Palette card studio',
    description:
      'Create a four-color palette card with an optional background and export it as a PNG.',
    images: ['/opengraph-image'],
  },
};

export default function MounirLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
