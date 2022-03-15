import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <h2>home</h2>
      <Link href="/counter"><a>Counter</a></Link>
      <Link href="/dailyword"><a>DailyWord</a></Link>
    </div>
  )
}