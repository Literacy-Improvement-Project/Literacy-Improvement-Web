import { useState } from "react";
import LoginModal from "../components/organism/Modal/LoginModal";

export default function LoginModalpage() {
    const [showModal, setShowModal] = useState(false);
    // const openModal = () => {
    //     setModalVisible(true)
    // }
    // const closeModal = () => {
    //     setModalVisible(false)
    // }
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <LoginModal
                onClose={() => setShowModal(false)}
                show={showModal}
                title="로그인"
                maskClosable={true}
            >
            </LoginModal>

        </div>
    )
}