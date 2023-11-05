import Image from 'next/image'
import clsx from 'clsx'
import Navbar from '../components/Navbar'
import NewsFeed from './Intro/page'

export default function Home() {
  return(<>
   
    <Navbar/>
    <NewsFeed/>

  </>
  )
}
