import SearchWordMeaning from "./SearchWordMeaning";
import AfterSearchWordMeaning from "./AfterSearchWordMeaning";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { postMorp } from "../../../pages/api/postMorp";
import { useState } from "react";
import styles from './SearchWord.module.css'


export default function SearchWord() {

  const [account, setAccount] = useState("김정원은 바보다");
  const [istrue, setistrue] = useState(0);

  const { isLoading, error, data } = useQuery(['Morp', account], () =>
    postMorp(account),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
  console.log(data);
  let sentences;
  if (data != null) {
    sentences = data.return_object.sentence;
    console.log(sentences);
  }

  const getistrue = ((temp) => {
    setistrue(temp);
  })

  const getAccount = ((tmp) => {
    setAccount(tmp);
  })
  return (
    <div className={styles.container}>
      < SearchWordMeaning getistrue={getistrue} getAccount={getAccount} setistrue={setistrue}></SearchWordMeaning >
      {istrue ? <AfterSearchWordMeaning sentences={sentences}></AfterSearchWordMeaning> : <div></div>}
    </div>
  );
}
export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    'Morp',
    async () => await postMorp(account));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}