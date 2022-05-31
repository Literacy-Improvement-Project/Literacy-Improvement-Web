// pages/api/postMorp.js
import axios from "axios";

export const postMorp = async (txt) => {
  const access_key = '9c46ad05-ca7a-4326-8a93-64501b67e95b';
  const analysisCode = "wsd_poly";
  let text = '나는 여전히 배가 고프다. 그치만 집에도  가고싶다. 어제는 가족여행을 다녀왔다.';

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

  console.log(txt);

  const { data } = await axios.post(
    "http://aiopen.etri.re.kr:8000/WiseNLU", requestJson
  ).then((response) => {
    return response;
  }).catch((error) => console.log(error))

  return data;
}