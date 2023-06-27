import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "../UI/Button/index";
import Aos from "aos";
import "aos/dist/aos.css";
import imgMain from "../../../img/logoIMg.png";
import Image from "next/image";

const curriculum =
  "https://www.mediafire.com/file/xhvr1i645en0prr/curriculo.pdf/file";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerItems}>
        <div className={styles.intro} >
          <h2 data-aos="fade-down">Olá sou o</h2>
          <h1 data-aos="fade-left">Clovis Antunes</h1>
          <p data-aos="fade-right">Frontend Developer & Mobile</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit">
            <a href={curriculum} target="_blank">
              Curriculo
            </a>
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={imgMain} alt="ImageMenu" className={styles.imgMain} />
      </div>
    </div>
  );
};

export default Main;
