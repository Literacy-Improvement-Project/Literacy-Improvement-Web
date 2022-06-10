import { dehydrate, QueryClient, useQuery } from "react-query";
import Word from "../components/organism/page-word/Word";
import { useRouter } from 'next/router';
import { fetchWords } from "./api/fetchWords";

export default function word() {

  const router = useRouter();
  const word = router.query.word;
  let check = 0;

  const { isLoading, isError, error, data } = useQuery(['word', word], () =>
    fetchWords(word),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  let words = null;
  if (data) {
    if (data.channel.item) {
      words = data.channel.item[0].sense;
      if (words) {
        check = 1;
      }
      console.log(words);
    }
  }

  return (
    <div>
      {check == 1 ? <Word word={word} words={words} ></Word> : <div>결과없음</div>}
    </div>
  );
}
export async function getServerSideProps(context) {


  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "word",
    async () => await fetchWords(word)
  );
  console.log(queryClient);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
