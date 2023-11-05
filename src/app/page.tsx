import Image from 'next/image'
import clsx from 'clsx'
import Navbar from '../components/Navbar'
import NewsFeed from './Intro/page'
import Products from '@/components/products/page'

export default function Home() {
  return(<>
    <Navbar/>
    <Products/>
    <NewsFeed/>
  </>
  )
}
