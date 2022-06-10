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

  let sentences;

  let tmp = [
    {
      morp: [

      ]
    },
    {
      morp: [

      ]
    },
    {
      morp: [

      ]
    }
  ];

  const POS = ["NNG", "NR", "NP", "VV", "VA", "VX", "MM", "MAG", "MAJ"];



  if (data != null) {
    sentences = data.return_object.sentence;
    for (let i = 0; i < sentences.length; i++) {
      for (let word of sentences[i].morp) {
        if (POS.includes(word.type)) {
          tmp[i].morp.push(word);
        }
      }
    }
    console.log(tmp);
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
      {istrue ? <AfterSearchWordMeaning sentences={tmp}></AfterSearchWordMeaning> : <div></div>}
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