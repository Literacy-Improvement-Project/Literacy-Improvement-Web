// pages/api/fetchQuizItem.js
import axios from "axios";

export const fetchQuizItem =  () => {


  const { data } = {
    page: 1,
    results: [
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
  }
  

  // const { data } = await axios.get(
  //   "https://openapi.naver.com/v1/search/encyc.json", {
  //     headers: {
  //       'X-Naver-Client-Id': client_id,
  //       'X-Naver-Client-Secret': client_secret,
  //     },
  //     params: {
  //       query: word,
  //       display: 10,
  //       start: 1,
  //     },
  //   })
  //   .then((response) => {
  //     return response
  //   })
  //   .catch((error) => console.log(error))

  return data
}
