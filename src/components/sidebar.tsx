'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/blog', name: 'Writing' },
] as const;

export default function Navigation() {
  const pathname = usePathname() || '/';

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label={`${site.name} home`}>
        <span className="wordmark-mark" aria-hidden="true">M</span>
        <span>{site.shortName}</span>
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map(({ path, name }) => {
            const isActive =
              path === '/'
                ? pathname === path
                : pathname === path || pathname.startsWith(`${path}/`);

            return (
              <li key={path}>
                <Link
                  href={path}
                  aria-current={isActive ? 'page' : undefined}
                  className={clsx('nav-link', isActive && 'nav-link-active')}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
