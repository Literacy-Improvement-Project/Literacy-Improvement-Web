import styles from './WordList.module.css'
import Button from '../../atom/Button/Button'
import Modal from '../../organism/Modal/Modal';
import { addToDictionary, AddToDictionary, test } from '../../../lib/myDictionary';
import { useState } from 'react';
export default function WordCard({ word, content, addMyDictionary, addOpenDictionary, index }) {
    const [showModal, setShowModal] = useState(false);
    const AddkMyDictionary = () => {
        addMyDictionary(word, content.definition)
    };


    return (
        <div className={styles.card_container}>
            <div className={styles.card_content}>
                <div className={styles.title_cover}>
                    <h2 className={styles.title}>{index + 1}.{word}</h2>
                    <h5 className={styles.test}> [{content.pos}]</h5>
                    {content.type == "일반어" ? <></> : <h5>{content.type}</h5>}
                </div>
                <div className={styles.mean_cover}>
                    <h4 className={styles.h2}> : {content.definition}</h4>
                </div>
                <div className={styles.button_cover}>
                    <Button label="나만의 단어장에 추가" onClick={AddkMyDictionary}></Button>
                    <Button label="오픈사전에 추가" onClick={() => setShowModal(true)}></Button>
                </div>
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
