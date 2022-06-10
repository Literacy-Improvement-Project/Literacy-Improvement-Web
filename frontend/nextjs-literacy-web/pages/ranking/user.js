import { dehydrate, QueryClient, useQuery } from "react-query";
import UserRank from "../../components/organism/page-rank/userRank";
import { fetchUserRank } from "../api/fetchUserRank";

export default function UserRanking() {

  const { isLoading, isError, error, data } = useQuery('userRank', () =>
    fetchUserRank(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if(data) {
    console.log(data)
  }


  let img_URL = "https://opgg-static.akamaized.net/images/profile_icons/profileIcon4690.jpg?image=q_auto&image=q_auto,f_png,w_64&v=1652433080439"

  let userList = [
    {userName: "user1", profile: img_URL, score:70, }, 
    {userName: "user2", profile: img_URL, score:60, }, 
    {userName: "user3", profile: img_URL, score:50, }, 
    {userName: "user4", profile: img_URL, score:40, }, 
    {userName: "user5", profile: img_URL, score:30, }, 
    {userName: "user6", profile: img_URL, score:20, }, 
    {userName: "user7", profile: img_URL, score:10, }, 
  ]
  
  let userInfo = {userName: "cheol", profile: img_URL, score: 5, rank: 10}


  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <UserRank userList={userList} userInfo={userInfo}></UserRank>
        )}
    </div>
  )

}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "userRank",
    async () => await fetchWordRank()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
