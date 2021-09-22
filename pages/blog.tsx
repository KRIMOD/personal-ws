import { useState } from 'react'

import BlogPost from 'components/BlogPost'
import { getAllFilesFrontMatter } from 'lib/mdx'
import { Spacer, Title } from 'components/ui'
// import { getAllPosts } from 'lib/posts'

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <div className="w-full max-w-screen-md pt-3 pl-5 mx-auto">
      <Title size="sm">
        <h1>Blog</h1>
      </Title>
      <Spacer size="md" />

      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`Mindak nekteb. Pour l'instant kayen ${posts.length} articles sur ce site .
            Tu peux filter plus bas.`}
      </p>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <Title size="xs">
        <h1>All Posts</h1>
      </Title>
      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
      {filteredBlogPosts.map((frontMatter) => (
        <BlogPost key={frontMatter.title} {...frontMatter} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
