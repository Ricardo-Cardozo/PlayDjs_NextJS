import { useState } from 'react'
import ModalFotos from '../Modal/ModalFotos'

const ButtonAmpliar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenFotos = () => {
    setOpen(true)
  }

  const handleCloseFotos = () => {
    setOpen(false)
  }

  return (
     <>
      <button className='ampliar' onClick={handleOpenFotos}>Ampliar</button>
      {open && 
        <ModalFotos onClose={handleCloseFotos}/>
      }
     </> 
  )
}

export default ButtonAmpliar