import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchNaverSearch } from "./api/fetchNaverSearch"
import Button from "../components/atom/buttons/button"
import { useState } from "react";

export default function TestNaverSearch() {

  const [searchText, setSearchText] = useState("");

  const { isLoading, isError, error, data } = useQuery('naverSearch',() =>
    fetchNaverSearch(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if(data){
    console.log(data)
  }

  const handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  const onClickSearch = (text) => {
    data = useQuery(['naverSearch', text], () => fetchNaverSearch(text),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    })
  }


  return (
      <div>
        <h2>네이버 API</h2>
        <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
        <Button onClick={() => onClickSearch(searchText)}></Button>
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

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "naverSearch", 
    async () => await fetchNaverSearch()
  );

  return { 
    props: { 
      dehydratedState: dehydrate(queryClient),
    } 
  }
}
