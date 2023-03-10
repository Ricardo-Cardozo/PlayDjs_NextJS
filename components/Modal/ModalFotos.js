import styles from '../../styles/ModalStyles/ModalFotos.module.css'
import CarouselFotosAmpliada from '../Carousel/CarouselFotosAmpliada'


const ModalFotos = ({id, onClose}) => {
  const handleClick = e => {
    if (e.target.id === id) {
      onClose()
    }
  }
  
  return (
    <div id={id} className={styles.modal} onClick={handleClick}>

      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h3>Se estiver no celular, vire a tela!</h3>
        </div>
        <CarouselFotosAmpliada/>
        <div className={styles.modal_footer}>
          <button className={styles.deleteModal} onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalFotos