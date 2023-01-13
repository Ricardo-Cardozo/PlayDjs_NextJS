import { useState } from "react";
import Modal from './Modal'


const ModalLogic = () => {
  const [modalVisible, setmodalVisible] = useState(true);

  return (
    <div>
      {modalVisible && <Modal onClose={() => setmodalVisible(false)}/>}
    </div>
  )
}

export default ModalLogic