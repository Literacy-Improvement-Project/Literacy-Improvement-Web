import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import LoginModal from "../Modal/LoginModal"
import { getCookie, checkCookies } from 'cookies-next';
import { loginUser } from '../../../store/modules/authSlice';

export default function LoginCheck() {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.authSlice.isLogin)
  const [showModal, setShowModal] = useState(isLogin)

  useEffect(() => {
    if (checkCookies('userID') === true) {
      // 로그인 토큰 정보 -> 리덕스로 저장
      const token = getCookie('userID');
      dispatch(loginUser(token))
      console.log(token)
    }
  }, [isLogin])



  return (
    <div>
      <LoginModal
        onClose={() => setShowModal(true)}
        show={false}
        maskClosable={true}
      >
      </LoginModal>
    </div>

  )
}

export const getServerSideProps = ({ req, res }) => {


  return { props: {} };
}