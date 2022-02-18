import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Button, Grid, Typography  } from '@mui/material';

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./quiz.css";


function QuizItem({quizList, quizTemp, maxNumQuiz, postQuizResult}) {

  // const [quizCorrectCount, setQuizCorrectCount] = useState(0)
  // const [quizWrongCount, setQuizWrongCount] = useState(0)
  let quizCorrectCount = 0;
  let quizWrongCount = 0;

  const gotoSummary = () => {
    const summary = {
      numberOfQuestions: maxNumQuiz,
      numberOfCorrect: quizCorrectCount,
      numberOfWrong: quizWrongCount,
      quizList: quizList,
    };
    console.log("postQuizResult")
    postQuizResult(quizCorrectCount);
    // setTimeout(() => {
    //   history.push({
    //     pathname: "/Summary",
    //     state: summary,
    //   });
    // }, 1000);
  }

  // toast Alert (answer/wrong)
  const toastAnswer = () => toast("정답입니다!");
  const toastWrong = () => toast.error("틀렸습니다!");


  const handleClickSelect = (select, index) => {
    // Check Answer & get score
    if (select === quizList[index].word_mean) {
      //setQuizCorrectCount(quizCorrectCount + 1)
      quizCorrectCount+=1
      toastAnswer()
    }
    else {
      // setQuizWrongCount(quizWrongCount + 1)
      quizWrongCount+=1
      toastWrong()
    }
    console.log(quizCorrectCount+quizWrongCount)
    // Check LastQuiz
    if (quizCorrectCount+quizWrongCount === maxNumQuiz){
      gotoSummary()
    }

  }


  return (
    <div>
      {
        quizList.map((quiz, index) => (
          <div className="quiz-multiple">
              <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
              <Grid item>
                <Typography>{index+1} of {maxNumQuiz}</Typography>
                <h2 className="quiz-question-sub">알맞은 뜻을 고르세요</h2>
                <strong className="quiz-question">{quiz.word}</strong>
                <div className="multiple-answer-list">
                  <Button 
                    className="multiple-answer-item" 
                    onClick={() => {handleClickSelect(quizTemp[index][0], index);}} 
                    variant="outlined">{quizTemp[index][0]}
                  </Button>
                  <Button 
                    className="multiple-answer-item" 
                    onClick={() => {handleClickSelect(quizTemp[index][1], index);}} 
                    variant="outlined">{quizTemp[index][1]}
                  </Button>
                  <Button 
                    className="multiple-answer-item" 
                    onClick={() => {handleClickSelect(quizTemp[index][2], index);}} 
                    variant="outlined">{quizTemp[index][2]}
                  </Button>
                  <Button 
                    className="multiple-answer-item" 
                    onClick={() => {handleClickSelect(quizTemp[index][3], index);}} 
                    variant="outlined">{quizTemp[index][3]}
                  </Button>
                </div>
              </Grid>
            </Grid>
            </div>
        ))
      }

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Flip}
      />
    </div>
  )
}


QuizItem.defaultProps = {
  quizList: [],
  quizTemp: [],
  maxNumQuiz: 0,
}

export default QuizItem;