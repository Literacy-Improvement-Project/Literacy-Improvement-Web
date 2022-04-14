import { dehydrate, QueryClient, useQuery } from "react-query";
import { postMorp } from "./api/postMorp"

export default function Morp() {

  const { isLoading, isError, error, data } = useQuery('morp',() =>
    postMorp(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  let sentences;
  if (data) {
      sentences = data.return_object.sentence;
  }
  
  // const sentences = data.return_object.sentence

  const labelMap = {
    NNG: "일반명사",
    NNP: "고유명사",
    NNB: "의존명사",
  }

  console.log(labelMap.NNG)

  return (
      <div>
        <h2>형태소 분석</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
          <div>
            {sentences[0].morp.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item.lemma}</div>
                  <div>{item.type}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "morp", 
    async () => await postMorp()
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
