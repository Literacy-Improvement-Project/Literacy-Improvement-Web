// pages/api/fetchQuizItem.js
import axios from "axios";

export const fetchQuizItem =  () => {

  const { data } = {
    results: [
      {
        user1: {profile: profile, score:50}
      }, {
        user2: {profile: profile, score:40}
      }, {
        user3: {profile: profile, score:30}
      }, {
        user4: {profile: profile, score:20}
      }, {
        user5: {profile: profile, score:10}
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
