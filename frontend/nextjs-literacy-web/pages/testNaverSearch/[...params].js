import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchNaverSearch } from "../api/fetchNaverSearch";
import { useState } from "react";
import { useRouter } from "next/router";


export default function TestNaverSearch({params}) {

  const router = useRouter();
  console.log(router.query.params)
  const keyword = router.query.params

  const { isLoading, isError, error, data } = useQuery(['naverSearch', keyword],() =>
    fetchNaverSearch(keyword),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if(data){
    console.log(data)
  }

  return (
      <div>
        <h2>네이버 API</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
          <div>
            {data.items.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <img src={item.thumbnail}></img>
                  </div>
                  <div>{item.title}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
  );
}

export async function getServerSideProps(context) {

  const keyword = context.query.params

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["naverSearch", keyword], 
    async () => await fetchNaverSearch(keyword)
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
