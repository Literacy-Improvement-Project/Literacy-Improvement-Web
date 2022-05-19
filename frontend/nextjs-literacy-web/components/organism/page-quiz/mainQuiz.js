import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./MainQuiz.module.css"
import Link from 'next/link'

export default function MainQuiz() {

  // const { isLoading, isError, error, data } = useQuery('dailyword',() =>
  //   fetchDailyword(),
  //   {
  //     keepPreviousData: true,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );


  return (
      <div className={styles.container}>
        <Link href="/quiz"><a>단어 공부하기</a></Link>
      </div>
  );
}

export async function getServerSideProps(context) {


}
