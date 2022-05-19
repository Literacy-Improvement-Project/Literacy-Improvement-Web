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

  // const { isLoading, isError, error, data } = useQuery('quizcontent',() =>
  //   fetchQuizItem(),
  //   {
  //     keepPreviousData: true,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  const data = [
    {
      word: "가나다",
      word_mean: "정답",
      wrong_answer1: "오답1",
      wrong_answer2: "오답2",
      wrong_answer3: "오답3",
    }, {
      word: "라마바",
      word_mean: "정답",
      wrong_answer1: "오답1",
      wrong_answer2: "오답2",
      wrong_answer3: "오답3",
    }, {
      word: "아자차",
      word_mean: "정답",
      wrong_answer1: "오답1",
      wrong_answer2: "오답2",
      wrong_answer3: "오답3",
    }, {
      word: "타파",
      word_mean: "정답",
      wrong_answer1: "오답1",
      wrong_answer2: "오답2",
      wrong_answer3: "오답3",
    }, {
      word: "하하하",
      word_mean: "정답",
      wrong_answer1: "오답1",
      wrong_answer2: "오답2",
      wrong_answer3: "오답3",
    }
  ]

  console.log(data)


  return (
      <div>
        <QuizCarousel slideItems={data}/>
      </div>
  );
}

export async function getServerSideProps(context) {

  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(
  //   "quizcontent", 
  //   async () => await fetchQuizItem()
  // );

  // return { 
  //   props: { 
  //     dehydratedState: dehydrate(queryClient),
  //   } 
  // }
}
