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
            <li className={styles.li} >
              <h2>
                <a>Inicio</a>
              </h2>
            </li>
            <li className={styles.li}>
              <h2>
                <a>Sobre</a>
              </h2>
            </li>
            <li className={styles.li}>
              <h2>
                <a>Conhecimentos</a>
              </h2>
            </li>
            <li className={styles.li}>
              <h2><a>Projetos</a></h2>
            </li>
             <li className={styles.li}>
              <h2><a>Contato</a></h2>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
