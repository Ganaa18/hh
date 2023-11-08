import Image from 'next/image'
import clsx from 'clsx'
import Navbar from '../components/Navbar'
import NewsFeed from './Intro/page'
import Products from '@/app/products/page'
import Footer from '@/components/Footer'
import SwiperComponent from '@/components/Swiper'

export default function Home() {
  return(<>
    <Navbar/>
    <NewsFeed/>
    <SwiperComponent/>
    <Footer/>
  </>
  )
}
