import styles from './AfterSearchWordMeaning.module.css';
import Meanbox from "../../molecule/meanbox/Meanbox";

export default function AfterSearchWordMeaning({ sentences }) {

    return (
        <div className={styles.container} >
            {
                sentences.map((item) => (
                    <ul key={item.id}>
                        {
                            item.morp.map((word) => (
                                <div className={styles.sentences} key={word.id}>
                                    <li key={word.id} className={`${styles.words} ${styles.pointer}`}>
                                        <Meanbox word={word}></Meanbox>
                                    </li>
                                </div>
                            ))}
                    </ul>
                ))
            }
        </div>
    );
}
