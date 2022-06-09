import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchApitest } from "./api/fetchApitest";
import { useState } from "react";

export default function Testpage() {


    const { isLoading, error, data } = useQuery('apiTest', () =>
        fetchApitest(),
        {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    console.log(data)

    return (
        <div>
            <input></input>
        </div>
    );
}
export async function getServerSideProps(context) {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        "apiTest",
        async () => await fetchApitest());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}