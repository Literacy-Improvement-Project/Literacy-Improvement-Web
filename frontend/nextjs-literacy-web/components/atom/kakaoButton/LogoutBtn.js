import React from "react";
import { useMutation } from "react-query";
import { fetchLogout } from "../../../pages/api/fetchLogout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Button from "../Button/Button";



export default function Logout() {
  const userID = useSelector((state) => state.authSlice.email)

  const router = useRouter();
  const mutation = useMutation(() => {
    console.log(userID)
    return fetchLogout(userID)
  })

  const clickLogout = () => {
    mutation.mutate()
  }


  return (
    <div>
      <Button label="로그아웃" onClick={() => clickLogout()}></Button>
    </div>
  )
}
