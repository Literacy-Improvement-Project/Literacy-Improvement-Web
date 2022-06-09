//for Navigation bar
import Link from 'next/link';
import MainQuiz from '../page-quiz/mainQuiz';
import styles from './Nav.module.css';
import { useRouter } from "next/router";

export default function Nav(props) {

    const index = {
        home: "#home",
        dailyWords: "#dailyWords",
        quiz: "#quiz",
        myDictionary: "#myDictionary",
        openDictionary: "#openDictionary",
        searchWords: "#searchWords"
    };

    const router = useRouter();

    console.log(router.pathname)
    if (router.pathname === '/'){

    }

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.home}><a className={styles.a} href="/">home</a></li>
                    {router.pathname === '/'?
                    <>
                        <li className={styles.li}><a className={styles.a} href={index.dailyWords}><span className={styles.span}>오늘의 단어</span></a></li>
                        <li className={styles.li}><a className={styles.a} href={index.searchWords}>단어 검색</a></li>
                        <li className={styles.li}><a className={styles.a} href={index.openDictionary}>오픈 사전</a></li>
                    </> :
                    <>
                        <li className={styles.li}><Link href="/"><a className={styles.a} >오늘의 단어</a></Link></li>
                        <li className={styles.li}><Link href="/"><a className={styles.a} >단어 검색</a></Link></li>
                        <li className={styles.li}><Link href="/"><a className={styles.a} >오픈 사전</a></Link></li> 
                    </>
                    }
                    <li className={styles.li}><Link href="/quiz"><a className={styles.a} >퀴즈</a></Link></li>
                    <li className={styles.li}><Link href="/mydictionary"><a className={styles.a} >나만의 단어장</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}