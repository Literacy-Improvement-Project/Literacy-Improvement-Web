import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Morp from './morp'
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useState } from 'react';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';


export default function Home() {

  const [searchText, setSearchText] = useState("")
  const handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li><DescribePage></DescribePage></li>
        <li><Dailyword></Dailyword> </li>
        <li><Link href="/counter"><a>Counter</a></Link></li>
        <li><Link href="/morp"><a>형태소분석</a></Link></li>
        <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li>
        <li></li>
        <li></li>
      </ul>

      <Link href="/searchWord"><a>단어검색</a></Link>
      
      <div>
        <Morp></Morp>
      </div> 
    </div>
  )
}


