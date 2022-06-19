import MyDictionary from "../components/organism/page-myDictionary/myDictionary"
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "./api/getMyDictionary";
import NoLogin from "../components/organism/noLogin/NoLogin";
import { deleteNote } from "../lib/myDictionary";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function myDictionary() {

  const { isLoading, isError, error, data } = useQuery('mydictionary', () =>
    getMyDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );


  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div><NoLogin></NoLogin></div>
      ) : (<div>
        <MyDictionary dictionary={data}></MyDictionary>
      </div>)}
    </div>
  )
}


export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "mydictionary",
    async () => await getMyDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}