import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchKakaoLogin } from "./api/fetchKakaoLogin";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../store/modules/authSlice";
import { setCookies, getCookie } from 'cookies-next';
import { useEffect } from "react";


export default function kakaoAuth({params}) {
  const router = useRouter()
  const code = router.query.code
  const email = useSelector((state) => state.authSlice.email)
  const dispatch = useDispatch()

  const { isLoading, isError, error, data } = useQuery('kakaoLogin', () =>
    fetchKakaoLogin(code),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  
  useEffect(() => {
    if(data){
      setCookies('userID', data);
      dispatch(loginUser(data))
      console.log(getCookie('userID'))
      router.push('/')
      alert(data+"님 로그인 되었습니다!")
    }
  })


  return (
    <>
      {isLoading ? (
          <div>로그인 중...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>안녕하세요, 바른말 배움터에 오신 것을 환영합니다.</div>      
        )}
    </>
  )
}


export async function getServerSideProps(context) {
  
  const code = context.query.code
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "kakoLogin",
    async () => await fetchKakaoLogin(code)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}