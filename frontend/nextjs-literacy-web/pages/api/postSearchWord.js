// pages/api/postSearchWord.js
import axios from "axios";
import https from "https";

export const postSearchWord = async () => {

  const API_KEY = "02C96872DA6A22A9930FA10DF1BE8280";
  const Q = "나무"
  const REQ_TYPE = "json"
  const START = 1
  const OUTPUT_NUM = 10
  const PART = "word"
  const SORT = "dict"
  const ADVANCED = "n"
  const TARGET_TYPE = "search"

  // https://opendict.korean.go.kr/api/search?certkey_no=3708&key=02C96872DA6A22A9930FA10DF1BE8280&target_type=search&req_type=json&part=word&q=%EB%82%98%EB%AC%B4&sort=dict&start=1&num=10
  // https://opendict.korean.go.kr/api/search?certkey_no=3708&key=02C96872DA6A22A9930FA10DF1BE8280&target_type=search&req_type=json&part=word&q=%EB%82%98%EB%AC%B4&sort=dict&start=1&num=10

  const requestJson = {
    certkey_no:3708,
    key:"02C96872DA6A22A9930FA10DF1BE8280",
    target_type:"search",
    req_type:"json",
    part:PART,
    q:Q,
    sort:SORT,
    start:START,
    num:"10",
    advanced: "n",
  };

  axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await (
    await axios.get(`http://localhost:3000/api/searchWord`, )
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .catch((error) => console.log(error))
  )

  console.log(data)

  // const { data } = await axios.get(
  //   "https://opendict.korean.go.kr/api/search", {
  //     params: requestJson
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     return response
  //   })
  //   .catch((error) => console.log(error))

  return data
}
