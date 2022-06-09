import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./WordRank.module.css"
import { Button } from "../../atom/Button/Button"
import { fetchWordRank } from "../../../pages/api/fetchWordRank"


export default function WordRank({wordList}) {

  let rank_base_url = "https://ssl.nexon.com/s2/game/maplestory/renewal/common/ranking_num0"

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
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>단어 순위</h2>
      </div>
      <div className={styles.content_header}>

      </div>
      <table className={styles.table}>
        <caption className={styles.caption}>"단어" "순위"</caption>
        <colgroup>
          <col width="200"/>
          <col width="300"/>
          <col width="400"/>
          <col width="300"/>
        </colgroup>
        <thead className={styles.thead}>
          <tr>
            <th align="left" scope="col">순위</th>
            <th align="left" scope="col">단어</th>
            <th align="left" scope="col">뜻</th>
            <th align="left" scope="col">추가된 횟수</th>
          </tr>
        </thead>
        <tbody>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          wordList.map((word, index) => {
            return (
              <tr className={styles.tr}>
                <td>
                  {index<=2
                    ?<img src={rank_base_url+(index+1)+".png"}></img>
                    :<span className={styles.rank_num}>{index+1}</span>
                  }
                  </td>
                <td>{word.word}</td>
                <td>{word.mean}</td>
                <td>{word.score}</td>
              </tr>
            )
          })         
        )}
        </tbody>
      </table>
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
