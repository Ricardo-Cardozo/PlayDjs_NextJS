import styles from '../styles/PageStyles/Sobre.module.css'
import { FaTools } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import Link from 'next/link';
import CarouselComponent from '../components/Carousel/CarouselComponent';

const Sobre = () => {
  return (
    <div id='sobre'>
      <div className={styles.sobre}>
        <h1>Sobre nós</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque inventore deserunt in, veniam suscipit enim esse, dolores aspernatur dignissimos laboriosam ab aperiam aliquam non dolor vel laborum sit vero!</p>
      </div>
      <div className={styles.features}>
        <div className={styles.equipe}>
          <h1>Equipe</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque inventore deserunt in, veniam suscipit enim esse, dolores aspernatur dignissimos</p>
          <br />
          <Link className={styles.ver_equipe} href=''>Ver equipe</Link>
        </div>
        <div className={styles.local}>
          <h1>Onde atuamos</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque inventore deserunt in, veniam suscipit enim esse, dolores aspernatur dignissimos</p>
          <br />
          <ImAirplane className={styles.service_icon}/>
        </div>
        <div className={styles.services}>
          <h1>Serviços</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque inventore deserunt in, veniam suscipit enim esse, dolores aspernatur dignissimos</p>
          <br />
          <FaTools className={styles.service_icon}/>
        </div>
      </div>
      <h1>Depoimentos dos nossos clientes</h1>
      <CarouselComponent/>
    </div>
  )
}

export default Sobre