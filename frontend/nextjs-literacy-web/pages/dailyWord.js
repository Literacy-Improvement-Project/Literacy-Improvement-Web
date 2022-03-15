import WordCarousel from "../components/organism/carousel/wordCarousel";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchDailyword } from "./api/fetchDailyword"

export default function DailyWord() {

  const { isLoading, isError, error, data } = useQuery('dailyword',() =>
    fetchDailyword(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  console.log(data)


  return (
      <div>
        <h2>오늘의 단어</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
          <div>
            <WordCarousel slideItems={data.results}></WordCarousel>
          </div>
        )}
      </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "dailyword", 
    async () => await fetchDailyword()
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
