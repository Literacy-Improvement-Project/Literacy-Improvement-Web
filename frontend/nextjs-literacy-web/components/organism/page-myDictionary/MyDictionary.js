
import { deleteNote } from "../../../lib/myDictionary";
import WordCard from "../../molecule/wordcard/WordCard";
import styles from "./MyDictionary.module.css"
import { useRouter } from 'next/router'

export default function MyDictionary({ data }) {

    const router = useRouter()

    const clickDelete = (word) => {
        deleteNote(word);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                나만의 단어장
            </div>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <WordCard content={item} clickDelete={clickDelete} ></WordCard>
                    </li>
                ))}
            </ul>
        </div>
    );
}