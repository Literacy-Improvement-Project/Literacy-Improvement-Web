import { dehydrate, QueryClient, useQuery } from "react-query";
import WordCarousel from "../carousel/wordCarousel"
import { fetchDailyword } from "../../../pages/api/fetchDailyword"
import styles from "./Dailyword.module.css"

export default function Dailyword() {

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
      <div className={styles.container}>
        <div className={styles.title}>
          오늘의 단어
        </div>
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