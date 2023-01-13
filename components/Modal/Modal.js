import styles from '../../styles/ModalStyles/Modal.module.css'

const Modal = ({id, onClose}) => {
  const handleClick = e => {
    if (e.target.id === id) {
      onClose()
    }
  }
  
  return (
    <div id={id} className={styles.modal} onClick={handleClick}>

      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>Olá Seja Bem-vindo!</h2>
        </div>
        <div className={styles.modal_body}>
          <video src="videos/vinheta.mp4" className={styles.video} autoPlay muted></video>
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.deleteModal} onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal