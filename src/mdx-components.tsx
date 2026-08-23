import type { AnchorHTMLAttributes } from 'react';
import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

function CustomLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <a {...props} />;
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />;
  }

  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link href={href} {...props} />;
  }

  if (/^https?:\/\//i.test(href) || href.startsWith('//')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }

  return <a href={href} {...props} />;
}

function RoundedImage({ alt, className, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      className={['rounded-lg', className].filter(Boolean).join(' ')}
      sizes="(max-width: 768px) 100vw, 650px"
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: CustomLink,
    Image: RoundedImage,
    ...components,
  };
}
