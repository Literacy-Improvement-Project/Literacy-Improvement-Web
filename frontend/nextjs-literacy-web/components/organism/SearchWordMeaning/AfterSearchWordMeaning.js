import styles from './AfterSearchWordMeaning.module.css';
import Meanbox from "../../molecule/meanbox/Meanbox";

export default function AfterSearchWordMeaning({ sentences }) {

    return (
        <div className={styles.container} >
            {
                sentences.map((item) => (
                    <ul key={item.id}>
                        {
                            item.morp.map((word, index) => (
                                <li className={styles.sentences} key={word.id+index}>
                                    <Meanbox word={word}></Meanbox>
                                    {console.log(word)}
                                </li>
                            ))}
                    </ul>
                ))
            }
        </div>
    );
}
