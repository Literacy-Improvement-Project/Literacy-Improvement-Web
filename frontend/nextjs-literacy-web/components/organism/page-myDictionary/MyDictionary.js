import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "../../../pages/api/getMyDictionary";
import { deleteMyDictionary } from "../../../pages/api/deleteMyDictionary";
import { useState } from "react";
import WordCard from "../../molecule/wordcard/WordCard";
import styles from "./MyDictionary.module.css"
export default function MyDictionary() {

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
            mean: '지구 위에서 육지를 제외한 부분으로 짠물이 괴어 하나로 이어진 넓고 큰 부분. 지구 표면적의 약 70.8%를 차지하는데, 이는 육지 면적의 2.43배이다.'
        },
        1: {
            word: '노래',
            mean: '가곡, 가사, 시조 따위와 같이 운율이 있는 언어로 사상과 감정을 표현함. 또는 그런 예술 작품.'
        },
        2: {
            word: '사랑',
            mean: '어떤 사물이나 대상을 아끼고 소중히 여기거나 즐기는 마음. 또는 그런 일.'
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