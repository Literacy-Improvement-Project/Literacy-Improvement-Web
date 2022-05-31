// pages/api/fetchMyDictionary.js
import axios from "axios";

export const fetchMyDictionary = async () => {

  const API_KEY = "7b82392ee18c86e443bf9e74f0cc7c77";

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  ).then((response) => {
    return response
  })
  .catch((error) => {
    console.log(error)
  });
  
    return data;
}
