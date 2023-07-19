import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoImg from "../../../img/logo.png";
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.footer}>
        <footer>
          <span>
            Copyright © 2023 <h2> Clovis Antunes </h2>   {t('copyright')}

          </span>
        </footer>
            <Image src={logoImg} alt="logo" className={styles.logo}/>
      </div>
    </>
  );
}
