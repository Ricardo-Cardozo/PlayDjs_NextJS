import Image from "next/image"
import Link from "next/link"
import { createPortal } from "react-dom"
import styles from '../../styles/IconWpp/Wpp.module.css'

export default function Wpp() {
  const content = (
    <main className={styles.icon}>
      <Link 
      className={styles.img} 
      href="https://api.whatsapp.com/send?phone=554799199470&text=%5BOrçamento%5D%20-%20Olá%2C%20gostaria%20de%20de%20fazer%20um%20orçamento!">
      </Link>
    </main>
  )
  
  return createPortal(content, document.getElementById('wpp'))  
}

