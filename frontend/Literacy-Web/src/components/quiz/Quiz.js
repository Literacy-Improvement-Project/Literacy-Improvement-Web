import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { postQuizResult } from "../../redux";
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
import "./_quiz.scss";
import classnames from "classnames";
import * as _ from "lodash";
import { shuffle } from "lodash";

import M from "materialize-css";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";


function Quiz({ postQuizResult, match, isLoggedIn, quizStatus }) {
  let history = useHistory();
  const [end, setEnd] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextQuestion, setNextQuestion] = useState({});
  const [previousQuestion, setPreviousQuestion] = useState({});
  var currentAnswer = "";
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [numberOfAnswered, setNumberOfAnswered] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const quizunit = useLocation();
  let randomQuestion = [];
  let myquestions = quizunit.state;
  // let myquestions = questions;

  const [NBDisabled, setNBDisabled] = useState(false);
  const [PBDisabled, setPBDisabled] = useState(false);

  const [checkQuiz, setCheckQuiz] = useState(0)

  // const morphemeLoad = () => {
  //     for (let i = 0; i < 10; i++) {
  //         for (let j =0; j < 4; j++){
  //             if(j==0) {
  //                 randomQuestion
  //             }
  //         }
  //     }
  //   };
  const Summary = {
    vaild: true,
    totalScore: 0,
    totalNumberOfQuestions: 0,
    numberOfAnsweredQuestions: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0,
  };

  useEffect(() => {
    displayQuestions();
  }, [match.params.quizStatus]);

  const displayQuestions = () => {
    console.log(myquestions);
    if (currentQuestionIndex == 0) {
      console.log("처음");
      setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex + 1
      );
    }
    // myquestions = _.cloneDeep(questions);
    setCurrentQuestion(myquestions[currentQuestionIndex]);
    setNextQuestion(myquestions[currentQuestionIndex + 1]);
    setNumberOfQuestions(myquestions.length);
    currentAnswer = currentQuestion.word_mean;
    handleDisableButton();
    // setRandomQuestion([
    //     currentQuestion.word_mean,
    //     currentQuestion.wrong_answer1,
    //     currentQuestion.wrong_answer2,
    //     currentQuestion.wrong_answer3
    // ]);
    // randomQuestion()
    if (currentQuestionIndex <= 1) {
      setPreviousQuestion(myquestions[currentQuestionIndex - 1]);
    }
  };

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // const randomQuestion = () => {
  //     console.log(randomA);
  //     suffle(randomA);
  // }

  function notEnd(){
    console.log("not end quiz")

  }

  const Quizend = () => {
    Summary.totalScore = score;
    Summary.totalNumberOfQuestions = numberOfQuestions;
    Summary.numberOfAnsweredQuestions = correctAnswers + wrongAnswers;
    Summary.totalCorrectAnswers = correctAnswers;
    Summary.totalWrongAnswers = wrongAnswers;
  };
  const endGame = () => {
    if ((numberOfAnswered) !== (numberOfQuestions)){
      notEnd()
    }
    else{
      Quizend();
      postQuizResult(Summary.totalScore);
      setTimeout(() => {
        history.push({
          pathname: "/Summary",
          state: Summary,
        });
      }, 1000);
    }
  };
  const handleOptionClick = (e) => {
    currentAnswer = currentQuestion.word_mean;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (e.target.innerHTML == currentAnswer) {
      clickCorrect();
    } else {
      clickWrong();
    }
  };
  const clickCorrect = () => {
    M.toast({
      html: "정답입니다!",
      classes: "toast-valid",
      displayLength: 1500,
    });

    setScore((score) => score + 1);
    setCorrectAnswers(correctAnswers + 1);
    let CQI = currentQuestionIndex + 1;
    setCurrentQuestionIndex(CQI);
    setNumberOfAnswered(numberOfAnswered + 1);

    if (nextQuestion === undefined) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
      setNumberOfAnswered(numberOfAnswered + 1);
      setEnd(true);
    } else {
      displayQuestions();
    }
  };
  const clickWrong = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "틀렸습니다!",
      classes: "toast-invalid",
      displayLength: 1500,
    });

    setWrongAnswers(wrongAnswers + 1);
    let CQI = currentQuestionIndex + 1;
    setCurrentQuestionIndex(CQI);
    setNumberOfAnswered(numberOfAnswered + 1);

    if (nextQuestion === undefined) {
      setWrongAnswers(wrongAnswers + 1);
      setNumberOfAnswered(numberOfAnswered + 1);
      setEnd(true);
    } else {
      displayQuestions();
    }
  };
  const handleNextButtonClick = () => {
    if (nextQuestion !== undefined) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      displayQuestions();
    }
  };
  const handlePreviousButtonClick = () => {
    if (previousQuestion == undefined) {
      M.toast({
        html: "이전 문제가 없습니다.",
        classes: "toast-invalid",
        displayLength: 1500,
      });
      displayQuestions();
    } else if (nextQuestion !== undefined) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      displayQuestions();
    }
  };
  const handleQuitButtonClick = () => {
    if (window.confirm("나가시겠습니까?")) {
      history.push("/Home");
    }
  };
  const handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        handleNextButtonClick();
        break;
      case "previous-button":
        handlePreviousButtonClick();
        break;
      case "quit-button":
        handleQuitButtonClick();
        break;
      default:
        break;
    }
  };

  const handleDisableButton = () => {
    if (currentQuestionIndex === 0 || currentQuestionIndex < 0) {
      setPBDisabled(true);
    } else {
      setPBDisabled(false);
    }

    if (
      nextQuestion === undefined ||
      currentQuestionIndex + 1 === numberOfQuestions
    ) {
      setNBDisabled(true);
    } else {
      setNBDisabled(false);
    }
  };

  const gotoLogin = (e) => {
    window.location.replace("/Login");
  };

  const requestLogin = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button color="primary" onClick={gotoLogin} variant="contained">
        로그인 후 이용해 주세요.
      </Button>
    </Grid>
  );

  const showQuiz = (
    <>
    {end ? (
        <div className="questions">
          <h2>퀴즈가 끝났습니다.</h2>
          <button className="end-button" onClick={endGame}>
            결과로 가기
          </button>
        </div>
      ) : (
        <div className="questions">
          <h2>오늘의 퀴즈</h2>
          <div className="lifeline-container"></div>
          <div className="timer-container">
            <p>
              <span className="left" style={{ float: "left" }}>
                {currentQuestionIndex} of {numberOfQuestions}
              </span>
            </p>
          </div>
          <h5>{currentQuestion.word}</h5>
          <div className="options-container">
            <p onClick={handleOptionClick} className="option">
              {currentQuestion.word_mean}
            </p>
            <p onClick={handleOptionClick} className="option">
              {currentQuestion.wrong_answer1}
            </p>
          </div>
          <div className="options-container">
            <p onClick={handleOptionClick} className="option">
              {currentQuestion.wrong_answer2}
            </p>
            <p onClick={handleOptionClick} className="option">
              {currentQuestion.wrong_answer3}
            </p>
          </div>
          <div className="button-container">
            <button
              className={classnames("", { disable: PBDisabled })}
              id="previous-button"
              onClick={handleButtonClick}
            >
              이전
            </button>
            <button
              className={classnames("", { disable: NBDisabled })}
              id="next-button"
              onClick={handleButtonClick}
            >
              다음
            </button>
            <button id="quit-button" onClick={handleButtonClick}>
              나가기
            </button>
          </div>
        </div>
      )}
    </>
  )

  return (
    <Fragment>
      <Helmet>
        <title>Quiz Page</title>
      </Helmet>
      {isLoggedIn ? showQuiz : requestLogin}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
    quizStatus: state.quiz.status.quizStatus,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postQuizResult: (score) => {
      return dispatch(postQuizResult(score));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
