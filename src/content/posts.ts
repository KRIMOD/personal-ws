import type { ComponentType } from 'react';
import ChaosPost from './la-theorie-du-chaos.mdx';
import TraditionsPost from './les-traditions-ya-wlido.mdx';

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  language: 'fr';
  image?: string;
  component: ComponentType;
};

export const posts: readonly BlogPost[] = [
  {
    slug: 'la-theorie-du-chaos',
    title: 'La théorie du chaos',
    publishedAt: '2018-08-18',
    summary:
      "De Poincaré à Lorenz, une introduction à la théorie du chaos, à la sensibilité aux conditions initiales et à l'effet papillon.",
    language: 'fr',
    image: '/static/images/la-theorie-du-chaos/image1.png',
    component: ChaosPost,
  },
  {
    slug: 'les-traditions-ya-wlido',
    title: 'Les traditions ya wlido',
    publishedAt: '2018-06-07',
    summary:
      "Un voyage à travers les régions d'Algérie, leurs cuisines, leurs musiques, leurs vêtements et leurs traditions populaires.",
    language: 'fr',
    component: TraditionsPost,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat('fr-DZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}
