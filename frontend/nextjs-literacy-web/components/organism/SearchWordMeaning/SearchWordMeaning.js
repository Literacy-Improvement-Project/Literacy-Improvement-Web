import Button from '../../atom/Button/Button';
import Search from '../../atom/Search/Search';
import { useState, useCallback } from 'react';
import AfterSearchWordMeaning from './AfterSearchWordMeaning';

export default function SearchWordMeaning(props) {

    //click event
    const [account, setAccount] = useState("");
    const onClick = (() => {
        props.getAccount(account);
        props.getistrue(1);
        console.log(account);
    })

    //for search
    const getText = ((e) => {
        setAccount(e.target.value);
    })

    return (
        <div>
            <Button onClick={onClick} label="클릭"></Button>
            <Search getText={getText}></Search>
        </div>
    )
}
