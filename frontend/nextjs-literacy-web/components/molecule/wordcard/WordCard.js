import styles from './WordCard.module.css'
import Button from '../../atom/Button/Button'
export default function WordCard({ content, onClick }) {

    const Click = () => {
        onClick(content.word);
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.card_content}>
                <h2 className={styles.h1}>{content.word}</h2>
                <div className={styles.mean_cover}>
                    <h4 className={styles.h2}> {content.mean}</h4>
                </div>
                <Button className={styles.button} label="삭제?" onClick={Click}></Button>
            </div>
        </div >
    )
}
