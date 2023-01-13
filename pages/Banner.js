import styles from '../styles/PageStyles/Banner.module.css'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Banner = () => {
  return (
    <div id='home' className={styles.banner_container}>
      
      <div className={styles.banner_icon}>
      </div>
      <div className={styles.banner_content}>
        <h1>Play Dj's</h1>
        <p>A maior empresa de sonorização de Santa Catarina, referência em festas e sonorização</p>
        <br />
        <Link to='sobre' offset={-100}>Saiba mais</Link>
      </div>
    </div>
  )
}

export default Banner