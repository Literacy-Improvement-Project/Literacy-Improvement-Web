import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchMyDictionary } from "../../../pages/api/fetchMyDictionary"
import styles from "./MyDictionaryPage.module.css"
import OpenDictionaryModal from "../Modal/OpenDictionaryModal";
import { useState } from "react";
import DeleteButton from "../../atom/Button/DeleteButton";
import { useSelector, useDispatch } from 'react-redux'
import { setData } from "../../../store/modules/myOpenDictSlice";

export default function MyDictionaryPage({ userID }) {

  const { isLoading, isError, error, data } = useQuery(['myDictionary', userID], () =>
    fetchMyDictionary(userID),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);

  let dictionaryList = []
  if (data) {
    dictionaryList = data.results
    dispatch(setData(data.results))
  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>나의 오픈사전</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className={styles.dictionary_list}>
          {data.map((dict, index) => {
            return (
              <li className={styles.item} key={index} onClick={() => setShowModal(true)}>
                <DeleteButton></DeleteButton>
                <span className={styles.dict_title}>{dict.category}</span>
              </li>
            )
          })}
        </ul>
      )}
      <OpenDictionaryModal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="tt"
        maskClosable={true}
        data={data}
      >
      </OpenDictionaryModal>
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "myDictionary",
    async () => await fetchMyDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
