import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { getToken } from "./api/getToken";
import { fetchKakaoLogin } from "./api/fetchKakaoLogin";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../store/modules/authSlice";

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

  if(data){
    dispatch(loginUser(data))
    // alert('로그인 되었습니다.')
  }

  return (
    <h2>Loading...</h2>
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