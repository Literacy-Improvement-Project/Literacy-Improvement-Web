// pages/api/postMorp.js
import axios from "axios";

export const postMorp = async (txt) => {
  const access_key = '9c46ad05-ca7a-4326-8a93-64501b67e95b';
  const analysisCode = "wsd_poly";
  let text = '';

  if (txt != null) {
    text = txt;
  }
  const requestJson = {
    'access_key': access_key,
    'argument': {
      'text': text,
      'analysis_code': analysisCode
    }
  };

  const { data } = await axios.post(
    "http://aiopen.etri.re.kr:8000/WiseNLU", requestJson
  ).then((response) => {
    return response;
  }).catch((error) => console.log(error))

  return data;
}