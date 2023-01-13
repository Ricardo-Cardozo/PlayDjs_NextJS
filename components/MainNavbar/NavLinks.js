import { Link } from "react-scroll/modules";
import styles from "../../styles/NavStyles/NavLinks.module.css";

const NavLinks = ({onClick}) => {
  return (
    <ul className={styles.navLink}>
      <li>
        <Link onClick={onClick} activeClass="active" to="home" spy={true} offset={-178} duration={500}>Home</Link>
      </li>
      <li>
        <Link onClick={onClick} activeClass="active" to="sobre" spy={true} offset={-100} duration={500}>Sobre</Link>
      </li>
      <li>
        <Link onClick={onClick} activeClass="active" to="fotos" spy={true} offset={-100} duration={500}>Fotos</Link>
      </li>
      <li>
        <Link onClick={onClick} activeClass="active" to="videos" spy={true} offset={-130} duration={500}>Vídeos</Link>
      </li>
      <li>
        <Link onClick={onClick} activeClass="active" to="local" spy={true} offset={-130} duration={500}>Endereço</Link>
      </li>
    </ul>
  )
};

export default NavLinks;