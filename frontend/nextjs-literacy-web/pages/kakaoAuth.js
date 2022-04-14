import { useRouter } from "next/router";
import { getToken } from "./api/getToken";
import axios from "axios";

export default function kakaoAuth({params}) {

  const router = useRouter

  return (
    <h2>Loading...</h2>
  )
}


export async function getServerSideProps(context) {

  const code = context.query.code
  const loginURL = process.env.KAKAO_LOGIN_URL
  console.log(loginURL)
  const res = await axios.get("/api/getToken",{
    params: {
      code: code,
    },
  })

  return {
    props: {res}, // will be passed to the page component as props
  }
}