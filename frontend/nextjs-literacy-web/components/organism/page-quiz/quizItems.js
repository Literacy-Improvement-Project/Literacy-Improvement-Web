import { dehydrate, QueryClient, useQuery } from "react-query";
import QuizCarousel from "../carousel/quizCarousel"
import styles from "./QuizItems.module.css"
import { fetchQuizItem } from "../../../pages/api/fetchQuizItem";
import { useState } from "react";
/*
퀴즈 기능
1. 퀴즈 리스트 받아오기
2. 퀴즈 문제 한문제씩 보여주기 
3. 퀴즈 각 문제 클릭하면 -> 다음 퀴즈로 넘어가기
4. 퀴즈 10문제 끝나면 종료, 퀴즈 제출하기 화면
5. 퀴즈 제출하면 결과화면 보여주기
*/

export default function QuizItems() {

  const { isLoading, isError, error, data } = useQuery('getQuizContent',() =>
    fetchQuizItem(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const data2 = [
    {
      word: "벼룩잠",
      word_mean: "깊이 잠들지 못하고 자꾸 자다가 깨는 잠",
      wrong_answer1: "비좁은 방에서 여럿이 모로 끼어 자는 잠",
      wrong_answer2: "한 번 들었던 잠이 깨었다가 다시 드는 잠",
      wrong_answer3: "남의 눈에 띄지 않도록 몰래 자는 잠",
    }, {
      word: "된비알",
      word_mean: "몹시 험한 비탈",
      wrong_answer1: "길흉화복을 예언하여 적은 기록",
      wrong_answer2: "깊이 감추어진 내막의 비밀",
      wrong_answer3: "깎아 세운 듯한 돌의 언덕",
    }, {
      word: "에움길",
      word_mean: "굽은 길",
      wrong_answer1: "좁은 길",
      wrong_answer2: "곧은 길",
      wrong_answer3: "넓은 길",
    }, {
      word: "단출내기",
      word_mean: "식구가 없어 홀가분한 사람",
      wrong_answer1: "만만하게 여길 만큼 평범한 사람",
      wrong_answer2: "하찮은 공로나 출세로 거들먹거리는 사람",
      wrong_answer3: "어떤 일에 처음 나서서 일이 서투른 사람",
    }, {
      word: "꿈지러기",
      word_mean: "음식물에서 생긴 구더기",
      wrong_answer1: "헐어서 못 쓰게 된 물건",
      wrong_answer2: "잘게 부스러진 물건",
      wrong_answer3: "잘라 내고 남은 나머지",
    }
  ]

  if (data) {
    console.log(data)
  }


  return (
      <div className={styles.container}>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <QuizCarousel slideItems={data}/>
          </div>
        )}
      </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "getQuizContent", 
    async () => await fetchQuizItem()
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
