import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoImg from "../../../img/logo.png";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <footer>
          <span>
            Copyright © 2023 <h2> Clovis Antunes </h2> Todos os direitos
            reservados.
          </span>
        </footer>
            <Image src={logoImg} alt="logo" className={styles.logo}/>
      </div>
    </>
  );
}
