import { dehydrate, QueryClient, useQuery } from "react-query";
import Loading from "../components/organism/page-loading/Loading";
import WordRank from "../components/organism/page-rank/wordRank"
import { fetchWordRank } from "./api/fetchWordRank";

export default function WordRanking() {

  const { isLoading, isError, error, data } = useQuery('wordRank', () =>
    fetchWordRank(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );


  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
        <WordRank wordList={data}></WordRank>
        )
      }
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
