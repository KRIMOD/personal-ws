import React, { Children } from 'react'
import NextLink from 'next/link'
import NextHead from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/dist/client/router'

// TODO : What do i need for UI utility
// [] - Button
// [] - Form elements
//   [] - Checkbox
//   [] - Input
//   [] - Radio
//   [] - Range
//   [] - Select
//   [] - TextArea
//   [] - Toggle
// [] - Table
//   [] -
// [] - Divider
// [] - Link
// [] -
// [] -
// [] -

export const A = ({
  children,
  font = 'medium',
  underline = true,
  className = '',
  href,
  ...props
}) => {
  const border = underline
    ? 'border-b border-blue-300 hover:border-blue-400 '
    : ''
  className += ` ${border} font-${font} text-blue-500`
  const isInternalLink = href?.startsWith('/')

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} className={className}>
          {children}
        </a>
      </NextLink>
    )
  } else {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }
}

export function Title({ size = 'md', children }) {
  const styles = {
    xs: 'text-2xl font-semibold leading-tight text-gray-800 md:text-3xl lg:text-4xl lg:font-medium xl:text-5xl',
    sm: 'text-3xl font-semibold leading-tight text-gray-800 md:text-4xl lg:text-5xl lg:font-medium xl:text-6xl',
    md: 'text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl'
  }
  return <h1 className={styles[size]}>{children}</h1>
}

export function Lead({ children }) {
  return (
    // <p className='mt-6 text-lg text-gray-700 md:text-xl lg:text-2xl'>
    <p className="my-4 text-gray-600 dark:text-gray-400">{children}</p>
  )
}

export function Spacer({ size = 'md' }) {
  const styles = {
    md: 'mt-8',
    lg: 'mt-8 md:mt-10 xl:mt-16',
    xl: 'mt-8 md:mt-16 xl:mt-24'
  }

  return <div className={styles[size]} />
}

export function Container({ size, children }) {
  const styles = {
    small: 'max-w-sm mx-auto px-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl', // Home
    some: 'max-w-xl px-6 mx-auto lg:max-w-3xl lg:px-0', // Podcast, Blog index
    measure: 'max-w-measure mx-auto', // Blog post
    large: 'max-w-2xl px-6 mx-auto md:max-w-xl' // Projects
  }

  return <div className={styles[size]}>{children}</div>
}

export const Head = ({ children }) => {
  return <NextHead>{children}</NextHead>
}

export const Img = ({ src, aspectRatio = 16 / 9, className = '' }) => {
  const cls = classNames(className, 'object-cover w-full h-full')
  return (
    <div
      className="relative"
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <div className="absolute inset-0">
        <Image src={src} alt="alt" className={cls} layout="fill" />
      </div>
    </div>
  )
}

// Copied from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
export const Link = ({ children, activeClassName, href, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <NextLink href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </NextLink>
  )
}

export function Blog({ article, type }) {
  return (
    <div className="pt-3 text-black">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          <NextLink href={`${type}/${article.slug}` || '#'}>
            <a>{article.title}</a>
          </NextLink>
        </h2>
        <p className="text-xs font-normal text-gray-700">{article.date}</p>
      </div>
      <p className="text-sm text-gray-700">{article.description}</p>
    </div>
  )
}

export function Figure({ children }) {
  return <div className="pt-1 text-sm text-gray-600">{children}</div>
}
