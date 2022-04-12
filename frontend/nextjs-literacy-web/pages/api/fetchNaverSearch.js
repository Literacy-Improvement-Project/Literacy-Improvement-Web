// pages/api/fetchNaverSearch.js
import axios from "axios";

export const fetchNaverSearch = async (text) => {

  const client_id = 'U4Kp39tLVr5u1B6H1rnK';
  const client_secret = 'zUeLP9WPcK';
  let word = "나무"

  if (text) {
    word = text[0]
  }

  const { data } = await axios.get(
    "https://openapi.naver.com/v1/search/encyc.json", {
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
      },
      params: {
        query: word,
        display: 10,
        start: 1,
      },
    })
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))

  return data
}
