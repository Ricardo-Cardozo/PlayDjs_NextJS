import React from 'react'
import Footer from '../components/MainFooter/Footer'
import Navigation from '../components/MainNavbar/Navigation'
import styles from '../styles/LayoutStyles/MainContainer.module.css'
import dynamic from 'next/dynamic'

const Wpp = dynamic(() => import('../components/Icon/Wpp'), {ssr:false})
const ModalLogic= dynamic(() => import('../components/Modal/ModalLogic'), {ssr:false})

const MainContainer = ({children}) => {
  return (
    <>
      <Navigation/>
      <Wpp/>
      <ModalLogic/>
      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default MainContainer