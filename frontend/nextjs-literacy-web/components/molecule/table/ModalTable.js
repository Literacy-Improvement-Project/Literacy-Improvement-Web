import ModalBox from '../../atom/ModalBox/ModalBox'
import AddModalBox from '../../atom/ModalBox/AddModalBox'
import SearchResults from '../toggle/SearchResults'
import styles from './ModalTable.module.css'
import { useState } from 'react';
export default function ModalTable({ children, data, handleCloseClick }) {
    const [category, setCategory] = useState("");

    const onClick = (() => {
        console.log(category)
    })


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className={styles.widthleft}><ModalBox>카테고리 선택</ModalBox></th>
                        <th><SearchResults setCategory={setCategory}></SearchResults></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th ><ModalBox>뜻</ModalBox></th>
                        <th className={styles.widthright}><ModalBox className={styles.test2}>{data.definition}</ModalBox></th>
                    </tr>
                    <tr>
                        <th className={styles.center}>
                            <AddModalBox onClick={onClick} id="ModalAdd" data={category}>
                                <a href="#" onClick={handleCloseClick}>
                                    등록하기
                                </a>
                            </AddModalBox>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
