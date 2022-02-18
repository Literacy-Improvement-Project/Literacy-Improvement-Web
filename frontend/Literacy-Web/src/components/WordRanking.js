import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { userRankingRequest, wordRankingRequest } from "../redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Typography,
  CardActions,
  CardContent,
  Card,
  ButtonGroup
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    // width: '100%',
    // maxWidth: '100ch',
    maxheight: "100",
    // backgroundColor: "#3d3d3d",
    borderRadius: "20px",
    border: "1px solid #D9D9D9",
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "left",
    fontWeight: "900",
    marginBottom: "10px",
    // height: '7ch',
    // display: "flex",
    borderRadius: "20px",
    borderBottom: "1px solid #D9D9D9",
    borderTop: "1px solid #D9D9D9",

    // borderBottom: "1px solid #D9D9D9",
    "&:hover": {
      backgroundColor: "#63ccff",
    },
  },
  number: {
    textAlign: "right",
    fontWeight: "600",
    width: "35px",
    marginRight: "100px",
    display: "inline-block",
    fontFamily: "BMHANNApro",
    fontSize: "12px",
  },
  word: {
    textAlign: "left",
    fontWeight: "900",
    marginRight: "50px",
    display: "inline-block",
    fontFamily: "BMHANNAp",
    fontSize: "20px",
  },
  word2: {
    textAlign: "left",
    fontWeight: "900",
    marginLeft: "100px",
    color: "#6666FF",
    display: "inline-block",
    fontFamily: "BMHANNAp",
    fontSize: "15px",
  },
  word3: {
    textAlign: "right",
    fontWeight: "400",
    marginLeft: "100px",
    display: "inline-block",
    fontFamily: "BMHANNApro",
    fontSize: "15px",
  },
  cover: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "10px",
  },
  img: {
    maxWidth: "50px",
    height: "auto",
    display: "block",
    borderRadius: "70%",
  },
  subimg: {
    display: "inline-block",
    marginBottom: "-7px",
    marginTop: "5px",
    marginLeft: "10px",
    maxWidth: "25px",
    height: "auto",
    borderRadius: "70%",
  },
  card: {
    width: "30%",
    maxWidth: "200px",
    // backgroundColor: "#ffff6c",
    "&:hover": {
      // width: "11%",
      // display: "block",
      backgroundColor: "#63ccff",
      // border: "1px solid #6ca8a8",
    },
  },
}));

function WordRanking({
  userRanking,
  userRankingRequest,
  wordRanking,
  wordRankingRequest,
}) {
  useEffect(() => {
    // 렌더링
    wordRankingRequest();
    userRankingRequest();
  }, []);

  const classes = useStyles();

  // 단어페이지 이동 핸들러
  const onClickOneWord = (word) => {
    window.location.replace(`/Word/${word}`);
  };

  let wordlist = []; // wordranking데이터
  let datalen = 0;
  let datalen2 = 0;
  let userlist = []; // userranking데이터

  //데이터 복사 -> [0] : 단어,닉네임 [1] : 점수, [2] : 이미지
  if (wordRanking && wordRanking.length > 0) {
    wordlist.push(wordRanking[0][0]);
    wordlist.push(wordRanking[1][0]);
    datalen = wordlist[0].length;
  }
  if (userRanking && userRanking.length > 0) {
    userlist.push(userRanking[0][0]);
    userlist.push(userRanking[1][0]);
    userlist.push(userRanking[2][0]);
    datalen2 = userlist[0].length;
  }



  //top3로 분류
  let top3word = [[], []];
  let top3user = [[], [], []];

  if (datalen > 2) {
    top3word[0].push(wordlist[0][0]);
    top3word[1].push(wordlist[1][0]);
    top3word[0].push(wordlist[0][1]);
    top3word[1].push(wordlist[1][1]);
    top3word[0].push(wordlist[0][2]);
    top3word[1].push(wordlist[1][2]);
  } else if (datalen == 2) {
    top3word[0].push(wordlist[0][0]);
    top3word[1].push(wordlist[1][0]);
    top3word[0].push(wordlist[0][1]);
    top3word[1].push(wordlist[1][1]);
  } else if (datalen == 1) {
    top3word[0].push(wordlist[0][0]);
    top3word[1].push(wordlist[1][0]);
  }

  if (datalen2 > 2) {
    top3user[0].push(userlist[0][0]);
    top3user[1].push(userlist[1][0]);
    top3user[2].push(userlist[2][0]);
    top3user[0].push(userlist[0][1]);
    top3user[1].push(userlist[1][1]);
    top3user[2].push(userlist[2][1]);
    top3user[0].push(userlist[0][2]);
    top3user[1].push(userlist[1][2]);
    top3user[2].push(userlist[2][2]);
  } else if (datalen2 == 2) {
    top3user[0].push(userlist[0][0]);
    top3user[1].push(userlist[1][0]);
    top3user[2].push(userlist[2][0]);
    top3user[0].push(userlist[0][1]);
    top3user[1].push(userlist[1][1]);
    top3user[2].push(userlist[2][1]);
  } else if (datalen2 == 1) {
    top3user[0].push(userlist[0][0]);
    top3user[1].push(userlist[1][0]);
    top3user[2].push(userlist[2][0]);
  }

  console.log(top3user);
  console.log(top3word);
  console.log(wordRanking);
  console.log(userRanking);
  console.log(wordlist);
  console.log(userlist);





  //top3표시하는 컴포넌트
  function WordBasicCard(props) {
    let image = "rd-place.png";
    if (props.value2 === 1) image = "st-place.png";
    else if (props.value2 === 2) image = "nd-place.png";
    return (
      <Card className={classes.card} sx={{ minWidth: 275 }}>
        <CardContent>
          <img
            className={classes.img}
            src={image}
            // alt={'img'}
            loading="lazy"
          />
          <br></br>
          <Typography variant="h5" component="div">
            {props.value1}
          </Typography>
          <br></br>
          <Typography variant="body2">
            {props.value3} 명이 선택했어요!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onClickOneWord(props.value1)}>
            단어 자세히 보기
          </Button>
        </CardActions>
      </Card>
    );
  }
  function UserBasicCard(props) {
    return (
      <Card className={classes.card} sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant="h5" component="div">
            {props.value2}
          </Typography>
          <img
            className={classes.img}
            src={props.value4}
            // alt={'img'}
            loading="lazy"
          />
          <br></br>
          <Typography variant="h5" component="div">
            {props.value1}
          </Typography>
          <br></br>
          <Typography variant="body2">{props.value3} 점</Typography>
        </CardContent>
      </Card>
    );
  }


  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <h3>단어랭킹</h3>
        <div className={classes.cover}>
          {top3word[0].map((item, index) => (
            <WordBasicCard
              value1={top3word[0][index]}
              value2={index + 1}
              value3={top3word[1][index]}
            ></WordBasicCard>
          ))}
        </div>
        <br></br>
        {wordlist.length ? (
          wordlist[0].map((item, index) => (
            <div className={classes.cover}>
              <Grid item xs={6} className={classes.paper}>
                <Typography
                  variant="h4"
                  gutterBottom
                  color="textPrimary"
                  className={classes.number}
                >
                  {index + 1}
                </Typography>
                <Typography
                  gutterBottom
                  color="textPrimary"
                  className={classes.word}
                >
                  {wordlist[0][index]}
                </Typography>
                <Typography
                  gutterBottom
                  color="textPrimary"
                  className={classes.word2}
                >
                  {wordlist[1][index]} 명이 선택했어요!
                </Typography>
                <Button
                  size="small"
                  onClick={() => onClickOneWord(wordlist[0][index])}
                  className={classes.word3}
                >
                  단어 자세히 보기
                </Button>
              </Grid>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>


      <div className={classes.root}>
        <h3>유저랭킹</h3>
        <div className={classes.cover}>
          {top3user[0].map((item, index) => (
            <UserBasicCard
              value1={top3user[0][index]}
              value2={index+1} 
              value3={top3user[1][index]} 
              value4={top3user[2][index]}
            ></UserBasicCard>                
          ))}              
        </div>
        <br></br>
        {userlist.length ? (
          userlist[0].map((item, index) => (
          <div className={classes.cover}>
            <Grid item xs={6} className={classes.paper}>
              <img
                className={classes.subimg}
                src={userlist[2][index]}
                // alt={'img'}
                loading="lazy"
              />
              <Typography variant="h4" gutterBottom color="textPrimary" className={classes.number}>
              {index+1}
              </Typography>
              <Typography gutterBottom color="textPrimary" className={classes.word}>
              {userlist[0][index]}
              </Typography>
              <Typography gutterBottom color="textPrimary" className={classes.word2}>
              {userlist[1][index]} 점
              </Typography>
            </Grid>
          </div>
          ))
        ) : (
        <div></div>
        )}
      </div>


    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    wordRanking: state.ranking.status.wordRanking,
    userRanking: state.ranking.status.userRanking,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    wordRankingRequest: () => {
      return dispatch(wordRankingRequest());
    },
    userRankingRequest: () => {
      return dispatch(userRankingRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WordRanking);