// pages/api/fetchOpenDictionary.js
import axios from "axios";

export const fetchOpenDictionary = async () => {

  const { data } = await axios.get(
    // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    `http://61.255.221.125:9999/loadAllOpen`
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}

export const fetchMyOpenDictionary = async (userID) => {

  const { data } = await axios.get(
    // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    `http://61.255.221.125:9999/loadtoOpen`, {
    params: {
      userID: userID,
    },
  }
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
