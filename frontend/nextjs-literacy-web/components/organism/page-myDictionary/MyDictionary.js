
import { deleteNote } from "../../../lib/myDictionary";
import WordCard from "../../molecule/wordcard/WordCard";
import styles from "./MyDictionary.module.css"
export default function MyDictionary({ Dictionary }) {

    const clickDelete = (Word) => {
        deleteNote(Word);
        console.log(Word);
    }
    // 1. getMyDictionary()로 데이터 받기
    // 2. deleteMyDictionary()에서 삭제하고 나온 데이터 새로 받기
    // const Dictionary = [
    //     {
    //         word: '바다',
    //         mean: '지구 위에서 육지를 제외한 부분으로 짠물이 괴어 하나로 이어진 넓고 큰 부분. 지구 표면적의 약 70.8%를 차지하는데, 이는 육지 면적의 2.43배이다.'
    //     },
    //     {
    //         word: '노래',
    //         mean: '가곡, 가사, 시조 따위와 같이 운율이 있는 언어로 사상과 감정을 표현함. 또는 그런 예술 작품.'
    //     },
    //     {
    //         word: '사랑',
    //         mean: '어떤 사물이나 대상을 아끼고 소중히 여기거나 즐기는 마음. 또는 그런 일.'
    //     }
    // ]
    console.log(Dictionary);


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                나만의 단어장
            </div>
            <ul>

                {Dictionary.map((item, index) => (
                    <li key={index}>
                        <WordCard content={Dictionary[index]} onClick={clickDelete} ></WordCard>
                    </li>
                ))}
            </ul>

        </div>

    );
}
