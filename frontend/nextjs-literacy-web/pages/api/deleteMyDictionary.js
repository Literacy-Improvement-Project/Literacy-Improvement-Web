// pages/api/deleteMyDictionary.js
import axios from "axios";

export const deleteMyDictionary = async (item) => {

  let word = "";
  if (item) {
    word = item;
  }
  const { data } = await axios.get("http://localhost:8080/deleteFromNote", {
    params: {
      word: word,
    },
  })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    });

  return data;
}