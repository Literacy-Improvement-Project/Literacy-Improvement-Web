import MiddleModalBox from '../../atom/ModalBox/MiddleModalBox'
import styles from './OpenDicModalTable.module.css'
import Link from 'next/link';
import { useState } from 'react';
import DeleteButton from '../../atom/Button/DeleteButton';
export default function OpenDicModalTable({ children, data, handleCloseClick }) {
    const [category, setCategory] = useState("");

    const onClick = ((e) => {
        location.href = `/word?word=${e.target.innerText}`;

    })


    return (
        <div className={styles.containner}>
            <table className={styles.table}>
                <thead></thead>
                <tbody>
                    <tr className={styles.tr}>
                        {
                            data.map((item, index) => (
                                <th className={styles.width}><MiddleModalBox onClick={onClick}>{item}</MiddleModalBox></th>
                            ))}
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
