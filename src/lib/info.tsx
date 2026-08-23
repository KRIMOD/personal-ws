import me from '@/app/avatar.jpg';
import { site } from '@/lib/site';

export const name = site.name;
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I&apos;m Mamar, usually called Krimo. I&apos;m a{' '}
      <b>Salesforce technical consultant</b> with a background in full-stack web
      development.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I&apos;m based in Algeria and work across the Salesforce ecosystem, Apex,
      TypeScript, JavaScript, and Next.js. I enjoy building practical,
      maintainable applications and integrations that make complex business
      processes easier to use.
    </>
  );
};
