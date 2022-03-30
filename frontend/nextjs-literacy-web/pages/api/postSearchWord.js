// pages/api/postSearchWord.js
import axios from "axios";
import https from "https";

export const postSearchWord = async () => {


  const { data } = await axios.get(
    "https://opendict.korean.go.kr/api/search", {
      params: {
        key: process.env.OPENDICT_API_KEY,
        q: "나무",
        req_type: "json",
        part: 'word',
        sort: 'dict',
        start: 1,
        num: 10,
        advanced: "n",
      },
    })
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))

  return data
}
