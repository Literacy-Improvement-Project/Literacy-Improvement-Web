import styles from './WordList.module.css'
import Button from '../../atom/Button/Button'
import Modal from '../../organism/Modal/Modal';
import { useState } from 'react';
export default function WordCard({ word, content, addMyDictionary, addOpenDictionary, index }) {
    const [showModal, setShowModal] = useState(false);

    const AddMyDictionary = () => {
        addMyDictionary(word);
    }
    const AddOpenDictionary = () => {
        addOpenDictionary(word);
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.card_content}>
                <h2 className={styles.title}>{index + 1}.{word}</h2>
                <h5 className={styles.test}> [{content.pos}]</h5>
                {content.type == "일반어" ? <></> : <h5>{content.type}</h5>}
                <div className={styles.mean_cover}>
                    <h4 className={styles.h2}> : {content.definition}</h4>
                </div>
                <Button label="나만의 단어장에 추가" onClick={AddMyDictionary}></Button>
                <Button label="오픈사전에 추가" onClick={() => setShowModal(true)}></Button>
            </div>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                title={word}
                maskClosable={true}
                data={content}
            >
            </Modal>
        </div >
    )
}
