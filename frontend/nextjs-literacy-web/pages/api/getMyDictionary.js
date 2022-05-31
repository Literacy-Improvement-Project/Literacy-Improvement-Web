// pages/api/getMyDictionary.js
import axios from "axios";

export const getMyDictionary = async () => {

  const { data } = await axios.get("http://localhost:8080/myPage")
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    });

  return data;
}