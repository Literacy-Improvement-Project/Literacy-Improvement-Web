import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "../../../pages/api/getMyDictionary";
import { useState } from "react";
import WordList from "../../molecule/wordlist/WordList";
import Modal from "../Modal/Modal";
import styles from "./Word.module.css"
export default function Word({ word, words }) {
    const [showModal, setShowModal] = useState(false);

    // const { isLoading, isError, error, data } = useQuery(['Word',], () =>
    //     getMyDictionary(),
    //     {
    //         keepPreviousData: true,
    //         refetchOnMount: false,
    //         refetchOnWindowFocus: false,
    //     }
    // );

    const addMyDictionary = (Word) => {
        // deleteMyDictionary(word);
        console.log(Word);
    }
    const addOpenDictionary = (Word) => {
        // deleteMyDictionary(word);
        console.log(Word);

    }
    // const Words = [
    //     {
    //         word: props.word,
    //         mean: '넓고 푸르다.'
    //     },
    //     {
    //         word: props.word,
    //         mean: '넓고 푸르다.'
    //     },
    //     {
    //         word: props.word,
    //         mean: '더럽다.'
    //     }
    // ]

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