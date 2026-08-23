'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const navItems = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/blog', name: 'blog' },
] as const;

function Logo() {
  return (
    <Link
      aria-label={`${site.name} home`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-current font-serif text-sm font-bold tracking-tight outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-neutral-800"
      href="/"
    >
      MT
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname() || '/';

  return (
    <aside className="-mx-4 font-serif md:mx-0 md:w-[150px] md:shrink-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <div className="mb-2 ml-2 flex flex-col items-start px-4 md:mb-8 md:ml-3 md:px-0">
          <Logo />
        </div>
        <nav
          aria-label="Primary navigation"
          className="relative flex flex-row items-start px-4 md:flex-col md:overflow-auto md:px-0"
        >
          <div className="mt-2 mb-2 flex flex-row md:mt-0 md:flex-col">
            {navItems.map(({ path, name }) => {
              const isActive =
                path === '/'
                  ? pathname === path
                  : pathname === path || pathname.startsWith(`${path}/`);

              return (
                <Link
                  key={path}
                  href={path}
                  aria-current={isActive ? 'page' : undefined}
                  className={clsx(
                    'rounded-md outline-none transition-colors hover:text-neutral-800 focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-neutral-200',
                    isActive
                      ? 'bg-neutral-100 font-bold dark:bg-neutral-800'
                      : 'text-neutral-500'
                  )}
                >
                  <span className="block px-2.5 py-1.5">{name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
