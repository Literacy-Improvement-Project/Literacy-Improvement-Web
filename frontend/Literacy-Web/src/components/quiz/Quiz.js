import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { postQuizResult, quizRequest, quizSummaryUpdate } from "../../redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./quiz.css";
import QuizItem from "./QuizItem";


function Quiz({ postQuizResult, isLoggedIn, quizStatus, quizValid, quizSummaryUpdate }) {

  let quizList = []
  let quizTemp = []
  let maxNumQuiz = 0

  useEffect(() => {
    // rendering
    quizRequest();
  }, [])

  let quizStatus2 = [{
    word: "word1",
    word_mean: "word_mean1",
    wrong_answer1: "wrong_answer1",
    wrong_answer2: "wrong_answer2",
    wrong_answer3: "wrong_answer3",
  }, {
    word: "word2",
    word_mean: "word_mean2",
    wrong_answer1: "wrong_answer1",
    wrong_answer2: "wrong_answer2",
    wrong_answer3: "wrong_answer3",
  },
  {
    word: "word3",
    word_mean: "word_mean3",
    wrong_answer1: "wrong_answer1",
    wrong_answer2: "wrong_answer2",
    wrong_answer3: "wrong_answer3",
  },]

  // word,
  // word_mean,
  // wrong_answer1,
  // wrong_answer2,
  // wrong_answer3

  // init quiz content
  console.log(quizValid)
  if (quizValid === true){
    quizList = quizStatus;
    console.log(quizList)

    maxNumQuiz = quizList.length

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    // Quiz select shuffle
    quizList.map((item, index) => (
      quizTemp.push([item.word_mean, item.wrong_answer1,
        item.wrong_answer2, item.wrong_answer3])
    ))
    console.log(quizTemp)
    quizTemp.map((i, index) => (
      shuffle(i)
    ))
  }


  const requestLogin = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button color="primary" onClick={() => {window.location.replace("/Login");}} variant="contained">
        로그인 후 이용해 주세요.
      </Button>
    </Grid>
  );


  const showQuiz = (
    <div>
      <QuizItem 
      quizList={quizList}
      quizTemp={quizTemp}
      maxNumQuiz={maxNumQuiz} 
      postQuizResult={postQuizResult} 
      quizSummaryUpdate={quizSummaryUpdate}></QuizItem>
    </div>
  )


  const getQuizError = (
    <div>
      <h2>Quiz Request Error</h2>
    </div>
  )

  const checkQuizValid = (
    <>
      {quizValid ? showQuiz : getQuizError}
    </>
  )

  return (
    <div>
      <h2 className="quiz-title">Quiz Page</h2>
      <div id="flicker-container">
        <div className="eg-flick-container">
          {isLoggedIn ? checkQuizValid : requestLogin}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
    quizStatus: state.quiz.status.quizStatus,
    quizValid: state.quiz.status.valid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postQuizResult: (score) => {
      return dispatch(postQuizResult(score));
    },
    quizRequest: () => {
      return dispatch(quizRequest());
    },
    quizSummaryUpdate: (summary) => {
      return dispatch(quizSummaryUpdate(summary))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);