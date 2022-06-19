import axios from 'axios';

export const getToken = async (req, res) => {
  return await axios
    .get("http://localhost:8080/kakaoAuth/", {
      params: {
        code: code,
      }
    })
    .then((response) => {
    })
    .catch((error) => {
      console.log("get token fail")
    });
} 

