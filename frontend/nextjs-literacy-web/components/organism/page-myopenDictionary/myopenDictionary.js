import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "../../../pages/api/getMyDictionary";
import { deleteMyDictionary } from "../../../pages/api/deleteMyDictionary";
import { useState } from "react";
import WordCard from "../../molecule/wordcard/WordCard";
import styles from "./MyDictionary.module.css"
export default function myopenDictionary() {

    // const { isLoading, isError, error, data } = useQuery('myDictionary', () =>
    //     getMyDictionary(),
    //     {
    //         keepPreviousData: true,
    //         refetchOnMount: false,
    //         refetchOnWindowFocus: false,
    //     }
    // );

    const clickDelete = (Word) => {
        // deleteMyDictionary(word);
        console.log(Word);
    }
    // 1. getMyDictionary()로 데이터 받기
    // 2. deleteMyDictionary()에서 삭제하고 나온 데이터 새로 받기
    const Dictionary = {
        0: {
            word: '바다',
            mean: '넓고 푸르다.'
        },
        1: {
            word: '정원',
            mean: '넓고 푸르다.'
        },
        2: {
            word: '우리 집',
            mean: '더럽다.'
        }
    }
    // if (data) {
    //     Dictionary = data.return_object.sentence;
    // }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                나만의 단어장
            </div>
            <ul>
                <li><WordCard content={Dictionary[0]} onClick={clickDelete} ></WordCard></li>
                <li><WordCard content={Dictionary[1]} onClick={clickDelete} ></WordCard></li>
                <li><WordCard content={Dictionary[2]} onClick={clickDelete} ></WordCard></li>
            </ul>

        </div>
        // 데이터 어떤 형식인지 받아봐야함
        //   <div>
        //     <h2>형태소 분석</h2>
        //     {isLoading ? (
        //       <div>Loading...</div>
        //     ) : isError ? (
        //         <div>Error: {error.message}</div>
        //       ) : (
        //       <div>
        //         {data.map((item, index) => {
        //           return (
        //             <div key={index}>
        //               <div>{item.lemma}</div>
        //               <div>{item.type}</div>
        //             </div>
        //           )
        //         })}
        //       </div>
        //     )}
        //   </div>
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