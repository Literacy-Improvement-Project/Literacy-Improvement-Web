import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Morp from './morp'
import { dehydrate, QueryClient, useQuery } from "react-query";


export default function Home() {

  return (
    <div>
      <h2>home</h2>
      <Link href="/counter"><a>Counter</a></Link>
      <Link href="/dailyword"><a>DailyWord</a></Link>
      <Link href="/morp"><a>형태소분석</a></Link>
      <Link href="/searchWord"><a>단어검색</a></Link>
      <Link href="/testNaverSearch"><a>네이버API</a></Link>
      <div>
        <Morp></Morp>
      </div> 
    </div>
  )
}


