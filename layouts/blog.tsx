import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'

import { Title } from 'components/ui'

export default function BlogLayout({ children, frontMatter }) {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <Title size="xs">
        <h1 className="my-4">{frontMatter.title}</h1>
      </Title>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {frontMatter.by}
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
          {frontMatter.readingTime.text}
        </p>
      </div>
      <div className="w-full prose dark:prose-dark max-w-none">{children}</div>
      <hr className="mt-4" />
      <div className="pb-10 mx-auto mt-10">
        <div className="mt-2 leading-none text-center">
          <p className="pt-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            Written by
          </p>
          <p className="pt-2 text-xl font-semibold">
            <NextLink href="/">
              <a>Krimo Temam</a>
            </NextLink>
          </p>
        </div>
      </div>
    </article>
  )
}
