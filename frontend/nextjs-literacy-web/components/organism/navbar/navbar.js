import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <div className={styles.container}>
      <h1 aria-hidden="true">Kotudy</h1>
      <nav className={styles.nav}>
        <div className={styles.mobile_top}></div>
        <div className={styles.links}>
          <Link href="/">
            <a>홈</a>
          </Link>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}

