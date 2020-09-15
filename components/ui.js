import React, { Children } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Img = ({ src, aspectRatio = 16 / 9, className = '' }) => {
  return (
    <div
      className='relative'
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <div className='absolute inset-0'>
        <img src={src} className={`${className} w-full h-full object-cover`} />
      </div>
    </div>
  )
}

// Copied from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
export const Link = ({ children, activeClassName, ...props }) => {
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
    <NextLink {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </NextLink>
  )
}
