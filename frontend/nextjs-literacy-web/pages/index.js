import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import MyDictionary from '../components/organism/page-myDictionary/MyDictionary';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';
import MainQuiz from '../components/organism/page-quiz/mainQuiz';
import OpenDictionary from '../components/organism/page-openDictionary/openDictionary';
import SearchWord from '../components/organism/SearchWordMeaning/searchWord';

import LoginModal from '../components/organism/Modal/LoginModal'

export default function Home() {

  // const [searchText, setSearchText] = useState("")
  // const handleSearchText = ({ target }) => {
  //   setSearchText(target.value);
  // };
  const [showModal, setShowModal] = useState(false);


  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <ul>
        <li>
          <a name="searchWords"><SearchWord></SearchWord></a>
        </li>
        <li><DescribePage></DescribePage></li>
        <button onClick={() => setShowModal(true)}>로그인</button>
        <LoginModal
          onClose={() => setShowModal(false)}
          show={showModal}
          maskClosable={true}
        >
        </LoginModal>
        <li><a name="dailyWords"><Dailyword></Dailyword></a> </li>
        <li><MainQuiz></MainQuiz></li>
        <li><a name="openDictionary"><OpenDictionary></OpenDictionary></a></li>
        {/* <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li> */}
        <li><a name="myDictionary"></a><MyDictionary></MyDictionary></li>
      </ul>
    </div>
  )
}
