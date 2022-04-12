// pages/api/postSearchWord.js
import axios from "axios";
import https from "https";

export const postSearchWord = async () => {

  const { data } = await axios.get(
    "https://opendict.korean.go.kr/api/search", {
      params: {
        key: '82B3B296BF46EF6BD48B53CB022A5C00',
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
