import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoImg from "../../../img/logo.png";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.footer}>
        <footer>
        <Link href="https://devroom.tech/" target="_blank" rel="noopener noreferrer">
                Copyright © DevRoom · 2024
            </Link>
        </footer>
            <Image src={logoImg} alt="logo" className={styles.logo}/>
      </div>
    </>
  );
}
