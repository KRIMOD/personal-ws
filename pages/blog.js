import { Blog } from '../components/ui'
import { getAllPosts } from '../lib/posts'

export default function Posts ({ allPosts }) {
  return (
    <div className='w-full max-w-screen-md pt-3 pl-5 mx-auto'>
      <h1 className='mt-6 text-5xl font-extrabold text-black '>Blog</h1>
      <p className='mt-4 font-normal text-gray-600'>Ca m'arrive d'écrire de temps à autre, entre article, tutoriel et pensées random </p>
      <form className='flex mt-4 border border-gray-600 rounded-md'>
        <input placeholder='Search articles' className='flex-1 p-2 text-gray-500 border-gray-600' />
      </form>
      <h1 className='mt-4 text-3xl font-extrabold text-gray-800'>All posts</h1>
      {
        allPosts?.map((article, index) => (
          <Blog article={article} type='blog' key={index} />
        ))
      }
    </div>
  )
}

export async function getStaticProps () {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description'])

  return {
    props: { allPosts }
  }
}
