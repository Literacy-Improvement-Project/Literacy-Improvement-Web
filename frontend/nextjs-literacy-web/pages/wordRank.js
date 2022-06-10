import { dehydrate, QueryClient, useQuery } from "react-query";
import WordRank from "../components/organism/page-rank/wordRank"
import { fetchWordRank } from "./api/fetchWordRank";

export default function WordRanking() {

  let wordList = [
    {word: "겨레", mean: "같은 핏줄을 이어받은 민족.", score: 10}, 
    {word: "이윽고", mean: "얼마 있다가. 또는 얼마쯤 시간이 흐른 뒤에.", score: 9}, 
    {word: "담은", mean: "은혜를 널리 베풂.", score: 8}, 
    {word: "아담하다", mean: "고상하면서 담백하다.", score: 7}, 
    {word: "갖추갖추", mean: "여럿이 모두 있는 대로", score: 6}, 
    {word: "제잡이", mean: "스스로 자기 자신을 망치는 일", score: 4}, 
    {word: "되틀다", mean: "반대쪽으로 틀다", score: 2}, 
  ]

  const { isLoading, isError, error, data } = useQuery('wordRank', () =>
    fetchWordRank(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if(data) {
    console.log(data)
  }
  
  return (
    <div>
      {/* {isLoading ? (
        <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : ( */}
        <WordRank wordList={wordList}></WordRank>
      {/* )} */}
    </div>
  )
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "wordRank",
    async () => await fetchWordRank()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
