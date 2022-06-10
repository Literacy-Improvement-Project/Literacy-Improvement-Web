import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import MyDictionary from '../components/organism/page-myDictionary/MyDictionary';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';
import MainQuiz from '../components/organism/page-quiz/mainQuiz';
import OpenDictionary from '../components/organism/page-openDictionary/openDictionary';
import SearchWord from '../components/organism/SearchWordMeaning/searchWord';
import LoginCheck from '../components/organism/page-login/LoginCheck';

export default function Home() {

  // const [searchText, setSearchText] = useState("")
  // const handleSearchText = ({ target }) => {
  //   setSearchText(target.value);
  // };

  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <ul>
        <li><LoginCheck></LoginCheck></li>
        <li>
          <a name="searchWords"><SearchWord></SearchWord></a>
        </li>
        <li><DescribePage></DescribePage></li>
        <li><a name="dailyWords"><Dailyword></Dailyword></a></li>
        <li><MainQuiz></MainQuiz></li>
        <li><a name="openDictionary"><OpenDictionary></OpenDictionary></a></li>
        <li><a name="myDictionary"></a><MyDictionary></MyDictionary></li>
        {/* <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li> */}
      </ul>
    </div>
  )
}
