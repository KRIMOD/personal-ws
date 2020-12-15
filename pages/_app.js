import '../styles/main.css'
import NextLink from 'next/link'
import { Link } from '../components/ui'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <div className='max-w-screen-lg p-6 mx-auto font-sans text-base antialiased text-gray-800'>
        <header className='flex items-center justify-between pb-3 mt-3 text-lg uppercase border-b border-gray-500'>
          <NextLink href='/'>
            <a className='text-xl font-normal'>Krimo <span className='font-bold'>Temam</span></a>
          </NextLink>
          <DesktopNav />
        </header>
        <main className='px-2'>{children}</main>
      </div>
    </>
  )
}

function DesktopNav () {
  return (
    <div className='flex'>
      <DesktopLink to='/dashboard'>Dashboard</DesktopLink>
      <DesktopLink to='/about'>About</DesktopLink>
      <DesktopLink to='/blog'>Blog</DesktopLink>
    </div>
  )
}

function DesktopLink ({ to, children }) {
  return (
    <Link href={to} activeClassName='text-gray-900'>
      <a className='pl-3 font-medium text-gray-700 hover:text-gray-800'>{children}</a>
    </Link>
  )
}
