import { useState } from "react";
import SearchResults from "../components/molecule/toggle/SearchResults";
import Modal from "../components/organism/Modal/Modal";
export default function Modalpage() {
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
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                title="김정원"
                maskClosable={true}
            >
            </Modal>

        </div>
    )
}