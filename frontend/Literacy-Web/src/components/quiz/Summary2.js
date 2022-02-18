import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Button } from "@material-ui/core";
import "./quiz.css";


export default function Summary2({}) {

  const [isOpenAnswer, setIsOpenAnswer] = useState(false)

  const location = useLocation();
  let summary = location.state;
  let comment = "";

  useEffect(() => {
  });

  // const summary = {
  //   score: quizScore,
  //   numberOfQuestions: maxNumQuiz,
  //   numberOfCorrect: quizCorrectNum,
  //   numberOfWrong: quizWrongNum,
  // };

  const onClickOneWord = (word) => {
    window.location.replace(`/Word/${word}`);
  };

  // const scoreComment = () => {
  //   if (summary.numberOfQuestions <= summary.numberOfQuestions / 2) {
  //     comment = "이러기 쉽지 않은데..."
  //   }
  //   else if (summary.numberOfQuestions <= 70) {
  //     comment = "다음번엔 더 잘 할수 있을 거에요!"
  //   }
  //   else if (summary.numberOfQuestions <= 90) {
  //     comment = "잘했어요!"
  //   }
  //   else if (summary.numberOfQuestions === 100) {
  //     comment = "완벽하군요!"
  //   }
  //   else {
  //     comment = "정말 잘했어요!!"
  //   }
  //   return comment;
  // }

  const quizAnswerList = summary.quizList.map((quiz, index) => (
    <li>
      <Button fullWidth onClick={() => onClickOneWord(quiz.word)}>
        {quiz.word} - {quiz.word_mean}
      </Button>
    </li>
  ));

  const closeAnswer = (
    <Button onClick={() => {setIsOpenAnswer(true)}}>정답보기▼</Button>
  )

  const openAnswer = (
    <>
      <ol>
        {quizAnswerList}
      </ol>
      <Button onClick={() => {setIsOpenAnswer(false)}}>접기▲</Button>
    </>
  )


  return (
    <div className="quiz-summary-box">
        <h2 className="quiz-summary-title">
          퀴즈 결과
        </h2>
        <div>
          <h2 className="quiz-summary-score"><b>{summary.score}</b>점</h2>
          <h2 className="quiz-summary-count">총 <b>{summary.numberOfQuestions}</b> 문제 중 <b>{summary.numberOfCorrect}</b> 정답
          </h2>
        </div>
        <div>
          {isOpenAnswer ? openAnswer : closeAnswer}
        </div>
    </div>
  );
}
