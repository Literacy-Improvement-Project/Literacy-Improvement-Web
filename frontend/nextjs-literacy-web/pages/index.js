import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/atom/buttons/button'
import Carousel3D from '../components/organism/carousel/carousel3D'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h2>home</h2>
      <Link href="/counter"><a>Counter</a></Link>
      <Button></Button>
      <Carousel3D></Carousel3D>
    </div>
    
  )
}
