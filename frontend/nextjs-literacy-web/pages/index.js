import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import MyDictionary from '../components/organism/page-myDictionary/MyDictionary';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';
import SearchWord from '../components/organism/SearchWordMeaning/searchWord';


export default function Home() {

  const [searchText, setSearchText] = useState("")
  const handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <ul>
        <li><DescribePage></DescribePage></li>
        <li><a name="dailyWords"><Dailyword></Dailyword></a> </li>
        <li><Link href="/counter"><a>Counter</a></Link></li>
        <li><Link href="/morp"><a>형태소분석</a></Link></li>
        <li>
          <a name="searchWords"><SearchWord></SearchWord></a>

        </li>
        <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li>
        <li><a name="myDictionary"></a><MyDictionary></MyDictionary></li>
        <li><Link href="/modal"><a>modal</a></Link></li>
      </ul>
    </div>
  )
}
