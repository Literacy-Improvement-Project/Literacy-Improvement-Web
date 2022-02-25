import React, { Component, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import "./quiz.css";


function Summary({quizSummary, quizValid}) {

  const [isOpenAnswer, setIsOpenAnswer] = useState(false)

  let quizAnswerList;

  if (quizValid) {
    quizAnswerList = quizSummary.quizList.map((quiz, index) => (
      <li>
        <Button fullWidth>
        <Link to={`/Word/${quiz.word}`}>{quiz.word} - {quiz.word_mean}</Link>
        </Button>
      </li>
    ));
  }
  else {
  }


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

  const gotoQuiz = (
    <Button color="primary" onClick={() => {window.location.replace("/Quiz");}} variant="contained">
      퀴즈 풀러 가기
    </Button>
  );

  const showSummary = (
    <div>
        <h2 className="quiz-summary-title">
          퀴즈 결과
        </h2>
        <div>
          <h2 className="quiz-summary-score"><b>{quizSummary.numberOfCorrect}</b>점</h2>
          <h2 className="quiz-summary-count">총 <b>{quizSummary.numberOfQuestions}</b> 문제 중 <b>{quizSummary.numberOfCorrect}</b>
          </h2>
          <div>
            {isOpenAnswer ? openAnswer : closeAnswer}
          </div>
        </div>
    </div>
  )


  return (
    <div className="quiz-summary-box">
      {quizValid ? showSummary : gotoQuiz}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
    quizSummary: state.quiz.status.quizSummary,
    quizValid: state.quiz.status.valid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);