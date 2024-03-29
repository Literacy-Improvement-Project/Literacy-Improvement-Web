import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import MainWordOfTheDay from "../components/MainWordOfTheDay";
import MainWordMeaning from "../components/WordMeaning/MainWordMeaning";
import {
  dailyWordsRequest,
  oneWordRequest,
  paraphraseCheckRequest,
  morphemeCheckRequest,
  wordRankingRequest,
  quizRequest,
} from "../redux";
import MainQuiz from "../components/MainQuiz";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function Main({
  dailyWordsList,
  quizStatus,
  dailyWordsRequest,
  oneWordRequest,
  isLoggedIn,
  paraphraseCheckRequest,
  paraphraseResult,
  paraphraseCheckValid,
  morphemeCheckRequest,
  wordRankingRequest,
  quizRequest,
  item,
}) {
  useEffect(() => {
    //quizRequest();
    dailyWordsRequest();
    wordRankingRequest();
  }, []);

  const classes = useStyles();
  const paraphraseCheckResult = useSelector(
    (state) => state.paraphrase.status.result
  );

  // const handleOneWord = (word) => {
  //   oneWordRequest(word);
  //   console.log(word);
  // };

  const handleMorpheme = (search) => {
    let body = {
      analysisCode: "ner",
      text: search,
    };
    console.log(search);
    morphemeCheckRequest(body);
  };


  // 사용자에게 보여지는 부분
  return (
    <div className="main-box">
      <div>
        <Grid container spacing={3}>
          <Grid className="main-daily-word-box" item xs={8}>
            <MainWordOfTheDay
              isLoggedIn={isLoggedIn}
              dailyWordsList={dailyWordsList}
            ></MainWordOfTheDay>
          </Grid>
          <Grid className="main-quiz-box" item xs={4}>
            <MainQuiz quizStatus={quizStatus}></MainQuiz>
          </Grid>
          <Grid className="main-word-mean-box" item xs={12}>
            <MainWordMeaning
              handleMorpheme={handleMorpheme}
              item={item}
            ></MainWordMeaning>
          </Grid>
        </Grid>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    quizStatus: state.quiz.status.quizStatus,
    dailyWordsList: state.dailyWords.status.dailyWordsList,
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
    paraphraseResult: state.paraphrase.status.result,
    wordStatus: state.oneWord.status.wordStatus,
    paraphraseCheckValid: state.paraphrase.status.valid,
    item: state.morpheme.status.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dailyWordsRequest: () => {
      return dispatch(dailyWordsRequest());
    },
    oneWordRequest: (word) => {
      return dispatch(oneWordRequest(word));
    },
    paraphraseCheckRequest: (body) => {
      return dispatch(paraphraseCheckRequest(body));
    },
    morphemeCheckRequest: (body) => {
      return dispatch(morphemeCheckRequest(body));
    },
    wordRankingRequest: () => {
      return dispatch(wordRankingRequest());
    },
    quizRequest: () => {
      return dispatch(quizRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
