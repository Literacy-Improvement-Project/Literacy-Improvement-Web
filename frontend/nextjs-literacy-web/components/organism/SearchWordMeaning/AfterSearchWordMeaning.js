import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchDailyword } from "../../../pages/api/fetchDailyword";
import Link from 'next/link'
import styles from './AfterSearchWordMeaning.module.css';
export default function AfterSearchWordMeaning({ sentences }) {


    const onClick = (e) => {
        console.log(e.target.innerText);

    }

    return (
        <div>
            {
                sentences.map((item) => (
                    <ul key={item.id}>
                        {
                            item.morp.map((word) => (
                                <ul className={styles.sentences} key={word.id}>
                                    <li className={`${styles.words} ${styles.pointer}`} onClick={onClick}>
                                        <Link href={{
                                            pathname: '/word',
                                            query: { word: word.lemma }
                                        }}
                                        >
                                            {word.lemma}
                                        </Link>
                                    </li>
                                    <li className={`${styles.words} ${styles.default}`}>{`(${word.type})`}</li>
                                </ul>
                            ))}
                    </ul>
                ))
            }
        </div>
    );
}
