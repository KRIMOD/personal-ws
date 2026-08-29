import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Mamar Temam home">
        @krimod
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/blog">Writing</Link>
      </nav>
    </header>
  );
}
