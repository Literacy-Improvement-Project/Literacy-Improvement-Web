// pages/api/fetchKakaoLogin.js
import axios from "axios";
import { getCookies, removeCookies } from "cookies-next";

export const fetchLogout = async () => {
  removeCookies('userID');
  consolo.log(getCookies())
  const { data } = await axios.post(
    "http://61.255.221.125:9999/logout"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
