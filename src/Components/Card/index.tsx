import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgText from "../../img/IMG.png";
import { ButtonLinks } from "../UI/ButtonLinks";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'next-i18next';

const CardProfile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.cardContainer}>
        <div className={styles.image}>
          <Image
            src={imgText}
            alt="imagem do Texto"
            className={styles.imgText}
          />
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.textInitial}>
            <span>
            {t('aboutMe')}
            </span>
          </div>
          <div className={styles.name}>
            <span>Clovis Antunes</span>
          </div>
          <div className={styles.developer}>
            <span>Frontend Developer</span>
          </div>
          <div className={styles.text}>
            <span>
            {t('text')}
            </span>
          </div>

          <div className={styles.buttonsItems}>
            <ButtonLinks>
              <a
                href="https://www.linkedin.com/in/clovis-antunes/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </ButtonLinks>
            <ButtonLinks>
              <a href="https://github.com/clovisantunes" target="_blank">
                <FaGithub />
              </a>
            </ButtonLinks>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProfile;
