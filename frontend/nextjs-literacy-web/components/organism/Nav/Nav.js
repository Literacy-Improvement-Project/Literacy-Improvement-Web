//for Navigation bar
import styles from './Nav.module.css';

export default function Nav(props) {

    const index = {
        home: "#home",
        dailyWords: "#dailyWords",
        quiz: "#quiz",
        myDictionary: "#myDictionary",
        openDictionary: "#openDictionary",
        searchWords: "#searchWords"
    };
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.test}><a className={styles.a} href="/">home</a></li>
                    <li className={styles.li}><a className={styles.a} href={index.dailyWords}>오늘의 단어</a></li>
                    <li className={styles.li}><a className={styles.a} href={index.quiz}>퀴즈</a></li>
                    <li className={styles.li}><a className={styles.a} href={index.myDictionary}>나만의 단어장</a></li>
                    <li className={styles.li}><a className={styles.a} href={index.openDictionary}>오픈 사전</a></li>
                    <li className={styles.li}><a className={styles.a} href={index.searchWords}>단어 검색</a></li>
                </ul>
            </nav>
        </div>
    )
}