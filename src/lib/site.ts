const fallbackUrl = 'https://personal-ws.vercel.app';

export const site = {
  name: 'Mamar Abdelkrim Temam',
  shortName: 'Mamar Temam',
  nickname: 'Krimo',
  description:
    'Salesforce technical consultant and full-stack web developer from Algeria.',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl),
  github: 'https://github.com/krimod',
  linkedin: 'https://www.linkedin.com/in/mamar-abdelkrim-temam/',
};
