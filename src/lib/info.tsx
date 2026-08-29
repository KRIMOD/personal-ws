import me from '@/app/avatar.jpg';
import { site } from '@/lib/site';

export const name = site.name;
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I&apos;m Mamar, usually called Krimo. I&apos;m a{' '}
      <b>tech lead, developer, and CRM consultant at Ornidex</b> in Paris.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I&apos;m nine-time Salesforce certified and work across CRM architecture,
      development, integrations, voice, data, and AI. I enjoy building
      maintainable systems that make complex business processes easier to use.
    </>
  );
};
