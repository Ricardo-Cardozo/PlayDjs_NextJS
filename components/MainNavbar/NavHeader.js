import styles from '../../styles/NavStyles/NavHeader.module.css'
import { useState, useEffect } from 'react'

const NavHeader = ({children}) => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={navbar ? styles.header_active : styles.header}>
      {children}
    </header>
  )
}

export default NavHeader