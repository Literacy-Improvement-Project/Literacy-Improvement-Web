import Link from 'next/link'
import styles from './KakaoLoginButton.module.css'

export default function KakaoLoginButton() {

  return (
    <div className='container'>
      <Link href="/api/kakaoAuth">
        <button className={styles.button}></button>
      </Link>
    </div>
  )
}