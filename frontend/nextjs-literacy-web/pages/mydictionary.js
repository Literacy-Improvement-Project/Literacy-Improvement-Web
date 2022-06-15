import MyDictionary from "../components/organism/page-myDictionary/myDictionary"
import { useQuery } from "react-query";
import { getMyDictionary } from "./api/getMyDictionary";
import NoLogin from "../components/organism/noLogin/NoLogin";

export default function myDictionary() {

  const { isLoading, isError, error, data } = useQuery('mydictionary', () =>
    getMyDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div><NoLogin></NoLogin></div>
      ) : (<div>
        <MyDictionary data={data}></MyDictionary>
      </div>)}
    </div>
  )

}