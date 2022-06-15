import styles from '../styles/Home.module.css'
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';
import OpenDictionary from '../components/organism/page-openDictionary/openDictionary';
import SearchWord from '../components/organism/SearchWordMeaning/searchWord';
import Loading from '../components/organism/page-loading/Loading';
import Logout from '../components/atom/kakaoButton/LogoutBtn';

export default function Home() {

  // const [searchText, setSearchText] = useState("")
  // const handleSearchText = ({ target }) => {
  //   setSearchText(target.value);
  // };


  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <ul>
        <li><Loading label="검색 중 ..."></Loading></li>
        <li>
          <a name="searchWords"><SearchWord></SearchWord></a>
        </li>
        <li><DescribePage></DescribePage></li>
        <li><a name="dailyWords"><Dailyword></Dailyword></a></li>
        <li><a name="openDictionary"></a><OpenDictionary></OpenDictionary></li>
        {/* <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li> */}
        <li><Logout></Logout></li>
      </ul>
    </div>
  )
}
