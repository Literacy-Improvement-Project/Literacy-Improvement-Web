import SearchWordMeaning from "../components/organism/SearchWordMeaning/SearchWordMeaning";
import AfterSearchWordMeaning from "../components/organism/SearchWordMeaning/AfterSearchWordMeaning";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchDailyword } from "./api/fetchDailyword";
import { fetchWords } from "./api/fetchWords";
import { fetchFlask } from "./api/fetchFlask";
import { useState } from "react";

export default function Testpage() {

    const [account, setAccount] = useState("김정원은 바보다");
    const [istrue, setistrue] = useState(0);

    const { isLoading, error, data } = useQuery('dailyword', () =>
        fetchDailyword(),
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



    const getAccount = ((tmp) => {
        setAccount(tmp);
        console.log(account);
        console.log(istrue);
    })
    return (
        <div>
            <br></br><br></br><br></br>
            < SearchWordMeaning getAccount={getAccount} setistrue={setistrue}></SearchWordMeaning >
            <div>{account}</div>
            {/* {istrue ? <AfterSearchWordMeaning account={account2}></AfterSearchWordMeaning> : <div></div>} */}
        </div>
    );
}
export async function getServerSideProps(context) {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        "dailyword",
        async () => await fetchDailyword());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}