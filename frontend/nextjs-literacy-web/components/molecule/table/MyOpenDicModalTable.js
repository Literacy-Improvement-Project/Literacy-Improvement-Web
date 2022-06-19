import MiddleModalBox from '../../atom/ModalBox/MiddleModalBox'
import styles from './OpenDicModalTable.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import DeleteButton from '../../atom/Button/DeleteButton';
import { deleteOpenWord } from '../../../lib/openDictionary';
export default function OpenDicModalTable({ children, data, handleCloseClick, onClose }) {
    const [category, setCategory] = useState("");


    const router = useRouter()

    const refreshServerSide = () => {
        router.replace(router.asPath)
    }

    const onClick = ((e) => {
        location.href = `/word?word=${e.target.innerText}`;

    })

    const deleteWord = ((i) => {
        console.log(i.id);
        deleteOpenWord(i.id);
        refreshServerSide();
        alert(i.word + '가 삭제되었습니다.');
        onClose();
    })




    return (
        <div className={styles.containner}>
            <table className={styles.table}>
                <thead></thead>
                <tbody>
                    <tr className={styles.tr}>
                        {
                            data.map((item, index) => (
                                <th className={styles.width}>
                                    <MiddleModalBox onClick={
                                        onClick}>{item.word}
                                    </MiddleModalBox>
                                    <button
                                        onClick={() => deleteWord(item)}>
                                        x</button></th>
                            ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
