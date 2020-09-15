import '../styles/main.css'
import NextLink from 'next/link'
import { Link } from '../components/ui'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

const Layout = ({ children }) => {
  return (
    <>
      <div className='max-w-screen-lg mx-auto font-sans text-base antialiased text-gray-800'>
        <header className='flex justify-between uppercase text-lg mt-3 items-center border-b border-gray-500 pb-3'>
          <NextLink href='/'>
            <a className='font-normal text-xl'>Krimo <span className='font-bold'>Temam</span></a>
          </NextLink>
          <DesktopNav />
        </header>
        <main>{children}</main>
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
      <a className='pl-3 text-gray-700 font-medium hover:text-gray-800'>{children}</a>
    </Link>
  )
}
