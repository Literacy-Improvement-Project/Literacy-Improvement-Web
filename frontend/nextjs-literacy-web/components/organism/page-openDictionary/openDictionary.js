import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchOpenDictionary } from "../../../pages/api/fetchOpenDictionary"
import { useState } from "react";
import styles from "./OpenDictionary.module.css"
import Link from 'next/link'
import OpenDictionaryModal from "../Modal/OpenDictionaryModal";
import { categorize } from "../../../lib/categorize";
import Loading from "../page-loading/Loading";



export default function OpenDictionary() {

  const { isLoading, isError, error, data } = useQuery('openDictionary', () =>
    fetchOpenDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  //data 카테고리화
  // const dictionaryList = categorize(data);

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  // let dictionaryList = []
  // if (data) {
  //   dictionaryList = data.results
  // }


  const gotoMyDictionary = () => {
    console.log("hi")
  }
  console.log(selectedCategory)

  return (
    <div className={styles.container}>
      <div className={styles.title}>오픈 사전</div>
      <div className={styles.button_mydictionary}><Link href="/myopendictionary"><a>나의 사전 확인하기</a></Link></div>
      {isLoading ? (
        <Loading></Loading>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className={styles.dictionary_list}>
          {dictionaryList.map((dict, index) => {
            return (
              <li className={styles.item} key={index} onClick={() => { setShowModal(true); setSelectedCategory(dict) }} >
                <span>{dict.category}</span>
              </li>
            )
          })}
        </ul>
      )}
      <OpenDictionaryModal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="tt"        // title={selectedCategory.category}
        maskClosable={true}
        data="tttt"// data={selectedCategory.words}
      >
      </OpenDictionaryModal>
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "openDictionary",
    async () => await fetchOpenDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
