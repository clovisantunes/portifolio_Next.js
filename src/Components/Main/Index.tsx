import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import styles from "./styles.module.scss";
import { Button } from "../UI/Button/index";
import Aos from "aos";
import "aos/dist/aos.css";
import imgMain from "../../img/profile.png";
import Image from "next/image";

const curriculum =
  "https://www.mediafire.com/file/xhvr1i645en0prr/curriculo.pdf/file";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  
  const { t } = useTranslation();

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerItems}>
        <div className={styles.intro} >
          <div className={styles.text}>
          <h2 data-aos="fade-down">{t('apresentation')}</h2> <span className={styles.comma} data-aos="fade-down">, </span><h2 data-aos="fade-down">{t("am")}</h2>
          <h1 data-aos="fade-left">Clovis</h1>
          </div>
          <p data-aos="fade-right">Desenvolvedor Full Stack com mais de 3 anos de experiência, especializado em desenvolvimento front-end utilizando React.js, Next.js e Node.js, com foco na entrega de interfaces dinâmicas e intuitivas. Além disso, possui sólida experiência em suporte de infraestrutura e servidores, garantindo a estabilidade e eficiência de sistemas em diferentes ambientes.</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit">
            <a href={curriculum} target="_blank">
              Curriculo
            </a>
          </Button>
          <button className={styles.xpButton}>
            Minhas experiências
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={imgMain} alt="ImageMenu" className={styles.imgMain} />
      </div>
    </div>
  );
};

export default Main;
