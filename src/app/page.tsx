import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowIcon,
  GitHubIcon,
  LinkedinIcon,
  ViewsIcon,
} from '@/components/icons';
import { name, about, bio, avatar } from '@/lib/info';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={site.github}
            className="flex items-center gap-2 rounded-sm outline-none hover:text-neutral-800 focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-neutral-200"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={site.linkedin}
            className="flex items-center gap-2 rounded-sm outline-none hover:text-neutral-800 focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-neutral-200"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            <span>I write sometimes</span>
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="mt-8 flex flex-col space-y-2 text-sm text-neutral-500 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={site.linkedin}
          >
            <ArrowIcon />
            <p className="h-7">Let&apos;s get in touch</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
