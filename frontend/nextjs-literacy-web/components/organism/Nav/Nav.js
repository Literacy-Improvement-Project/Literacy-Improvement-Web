//for Navigation bar
import Link from 'next/link';
import { useState } from 'react';
import MainQuiz from '../page-quiz/mainQuiz';
import styles from './Nav.module.css';

export default function Nav(props) {
    const [check, setCheck] = useState("false");

    const index = {
        home: "#home",
        dailyWords: "#dailyWords",
        quiz: "#quiz",
        myDictionary: "#myDictionary",
        openDictionary: "#openDictionary",
        searchWords: "#searchWords"
    };

    console.log(check);
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.test}><a className={styles.a} href="/"><img className={styles.img} src="./images/picture01.png" /></a></li>
                    <li className={styles.li}><a className={styles.a} href={index.dailyWords}><img className={styles.img2} src="./images/daily_word.png" /></a></li>
                    <li className={styles.li}><a className={styles.a} href={index.searchWords}><img className={styles.img2} src="./images/search_word02.png" /></a></li>
                    <li className={styles.li}><a className={styles.a} href={index.openDictionary}><img className={styles.img2} src="./images/openDictionary.png" /></a></li>
                    <li className={styles.li}><Link href="/quiz"><a className={styles.a} ><img className={styles.img2} src="./images/quiz02.png" /></a></Link></li>
                    <li className={styles.li}><Link href="/mydictionary"><a className={styles.a} ><img className={styles.img2} src="./images/myDictionary.png" /></a></Link></li>
                    <li className={styles.li}>
                        <button className={styles.title_ranking} onClick={() => { setCheck(!check) }}>
                            <img className={styles.img2} src="./images/ranking01.png" />
                        </button>
                        {check ? <div className={styles.body_ranking}>
                            <Link href="/ranking/user"><a className={styles.a} onClick={() => { setCheck(false) }} >
                                <img className={styles.user_ranking} src="./images/user_ranking01.png" /></a>
                            </Link>
                            <Link href="/ranking/word"><a className={styles.a} onClick={() => { setCheck(false) }} >
                                <img className={styles.word_ranking} src="./images/word_ranking01.png" /></a>
                            </Link>
                        </div> : <></>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}