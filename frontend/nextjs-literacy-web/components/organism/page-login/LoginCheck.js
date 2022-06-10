import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import LoginModal from "../Modal/LoginModal"

export default function LoginCheck() {
  const isLogin = useSelector((state) => state.authSlice.isLogin)
  const [showModal, setShowModal] = useState(!isLogin);

  console.log(isLogin)

  return (
    <div>
      <LoginModal
        onClose={() => setShowModal(false)}
        show={showModal}
        maskClosable={true}
      >
      </LoginModal>
    </div>
    
  )
}