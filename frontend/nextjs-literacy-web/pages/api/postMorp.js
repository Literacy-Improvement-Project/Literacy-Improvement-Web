// pages/api/postMorp.js
import axios from "axios";

export const postMorp = async () => {

  const API_KEY = "9c46ad05-ca7a-4326-8a93-64501b67e95b";
  const ANALYSIS_CODE = "morp"
  const text = "우리는 지금 강을 건너고 있다. 건너는 도중에 친구 정원이형을 만났다."

  const requestJson = {
    'access_key': API_KEY,
    'argument': {
        'text': text,
        'analysis_code': ANALYSIS_CODE
    }
};

  const { data } = await axios.post(
    "http://aiopen.etri.re.kr:8000/WiseNLU_spoken", requestJson)
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))

  return data
}
