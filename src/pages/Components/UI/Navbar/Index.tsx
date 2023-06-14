import Image from "next/image";
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import logoImg from "../../../../../img/logo.png";
import { useEffect } from "react";



const  Navbar =() => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Image src={logoImg} alt="Logo" className={styles.logoImg} />
          <ul className={styles.items} data-aos="fade-left">
          <li className={styles.li}>
            <a href="#main">Inicio</a>
          </li>
          <li className={styles.li}>
            <a href="#cardProfile">Sobre</a>
          </li>
          <li className={styles.li}>
            <a href="#skills">Conhecimentos</a>
          </li>
          <li className={styles.li}>
            <a href="#">Projetos</a>
          </li>
          <li className={styles.li}>
            <a href="#">Contato</a>
          </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
