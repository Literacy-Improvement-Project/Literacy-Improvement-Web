// 체크박스로 만든 토글

import { useState, Fragment } from "react";
import styles from "./SearchResults.module.css";

const SearchResults = ({ setCategory }) => {
    const [content, setContent] = useState("");
    let elem = document.getElementById('1');
    console.log(content)
    const onclick = ((e) => {
        setContent(e.target.innerText);
        setCategory(content);
    })

    return (
        <div>
            {content != "" ? <label id="ttt" for={styles.toggle_button} className={styles.toggle_button}>
                {content}</label> : <label id="ttt" for={styles.toggle_button} className={styles.toggle_button}>
                카테고리 종류▼</label>}
            <input type="checkbox" id={styles.toggle_button} />
            <div id={styles.toggle_contents}>
                <label for={styles.toggle_button} className={styles.close_button} >X</label>
                <div id="1" onClick={onclick}>Contents
                </div>
                <div id="2" onClick={onclick}>Contents2
                </div>
                <div id="3" onClick={onclick}>Contents3
                </div>
                <div id="4" onClick={onclick}>Contents4
                </div>

            </div>
        </div >
    );
}
export default SearchResults;