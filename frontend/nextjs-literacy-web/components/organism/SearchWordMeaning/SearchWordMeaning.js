import Button from '../../atom/Button/Button';
import Search from '../../atom/Search/Search';
import { useState, useCallback } from 'react';
import { fetchDailyword } from '../../../pages/api/fetchDailyword';
import { dehydrate, QueryClient, useQuery } from "react-query";
import AfterSearchWordMeaning from './AfterSearchWordMeaning';

export default function SearchWordMeaning(props) {

    //click event
    const [account, setAccount] = useState("");
    const click = (() => {
        props.getAccount(account);
        props.setistrue(1);
        console.log(account);
    })

    //for search
    const getText = ((e) => {
        setAccount(e.target.value);
    })

    return (
        <div>
            <Button click={click}></Button>
            <Search getText={getText}></Search>
            {/* {istrue ? <AfterSearchWordMeaning account={account}></AfterSearchWordMeaning> : <div></div>} */}
        </div>
    )
}
