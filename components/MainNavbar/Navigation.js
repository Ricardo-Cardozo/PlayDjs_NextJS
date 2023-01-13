import styles from '../../styles/NavStyles/Navigation.module.css'
import NavHeader from './NavHeader'
import NavLinks from './NavLinks'
import { Link } from 'react-scroll/modules';
import SideDrawer from './SideDrawer';
import { useState } from "react";
import Close from './Close';
import Backdrop from './Backdrop';

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {open && 
        <Backdrop onClick={handleClose}/>
      }

      {open && 
        <Close onClick={handleClose} />
      }

      {open && 
        <SideDrawer show={open} onClick={handleClose}>
          <nav>
            <NavLinks onClick={handleClose} />
          </nav>
        </SideDrawer>
      }

      <NavHeader>
        <button className={styles.toggle} onClick={handleOpen}>
          <span/>
          <span/>
          <span/>
        </button>
        <h1>
          <Link activeClass="active" to="home" spy={true} offset={-178} duration={500} className={styles.title}>Play<span>DJ&apos;s</span></Link>
        </h1>
        <nav className={styles.navHeader}>
          <NavLinks/>
        </nav>
      </NavHeader>
    </>
  )
}

export default Navigation