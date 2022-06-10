import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchOpenDictionary } from "../../../pages/api/fetchOpenDictionary"

import styles from "./OpenDictionary.module.css"
import Link from 'next/link'



export default function OpenDictionary() {

  const { isLoading, isError, error, data } = useQuery('openDictionary', () =>
    fetchOpenDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );



  let dictionaryList = []
  if (data) {
    dictionaryList = data.results
  }
  console.log(dictionaryList)


  const gotoMyDictionary = () => {
    console.log("hi")
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>오픈 사전</div>
      <div className={styles.button_mydictionary}><Link href="/myopendictionary"><a>나의 사전 확인하기</a></Link></div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className={styles.dictionary_list}>
          {dictionaryList.map((dict, index) => {
            return (
              <li className={styles.item} key={index} >
                <span>{dict.title}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "openDictionary",
    async () => await fetchOpenDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
