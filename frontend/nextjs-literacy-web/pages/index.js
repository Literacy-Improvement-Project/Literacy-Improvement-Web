import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Morp from './morp'
import { useState } from 'react';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';


export default function Home() {

  const [searchText, setSearchText] = useState("")
  const handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  return (

    <div>
      <h2>home</h2>
      <Link href="/counter"><a>Counter</a></Link>
      <br></br>
      <Link href="/testpage"><a>TestPage</a></Link>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>

  )
}
