import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "../../../pages/api/getMyDictionary";
import { useState } from "react";
import WordList from "../../molecule/wordlist/WordList";
import styles from "./Word.module.css"
import { addToDictionary } from "../../../lib/myDictionary";
export default function Word({ word, words }) {

    const addMyDictionary = (Word, Mean) => {
        addToDictionary(Word, Mean);
    }
    const addOpenDictionary = (Word) => {
        // deleteMyDictionary(word);
        console.log(Word);

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {word}
            </div>
            <ul className={styles.item_cover}>
                {
                    words.map((item, index) => (
                        <div key={index}>
                            <li><WordList word={word} content={words[index]} addMyDictionary={addMyDictionary} addOpenDictionary={addOpenDictionary} index={index} ></WordList></li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

// export async function getServerSideProps(context) {

//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery(
//         "myDictionary",
//         async () => await getMyDictionary()
//     );
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         }
//     }
// }