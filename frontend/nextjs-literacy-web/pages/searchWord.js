import { dehydrate, QueryClient, useQuery } from "react-query";
import { postSearchWord } from "./api/postSearchWord"

export default function SearchWord() {

  const { isLoading, isError, error, data } = useQuery('searchWord',() =>
  postSearchWord(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  console.log(data)


  return (
      <div>
        <h2>단어 검색</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
          <div>
          </div>
        )}
      </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "searchWord", 
    async () => await postSearchWord()
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
