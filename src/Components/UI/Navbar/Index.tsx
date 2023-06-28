import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import logoImg from "../../../img/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setNavOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <nav className={`${styles.navbar} ${navOpen ? styles.navOpen : ""}`}>
          <Image src={logoImg} alt="Logo" className={styles.logoImg} />
          <button
            className={`${styles.hamburgerButton} ${
              showMenu ? styles.open : ""
            }`}
            onClick={toggleMenu}
          >
            {!showMenu && <FiMenu />}
            {showMenu && <FiX />}
          </button>
          <ul className={`${styles.items} ${showMenu ? styles.showMenu : ""}`}>
            <li className={styles.li}>
              <a href="#main" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li className={styles.li}>
              <a href="#cardProfile" onClick={closeMenu}>
                Sobre
              </a>
            </li>
            <li className={styles.li}>
              <a href="#skills" onClick={closeMenu}>
                Conhecimentos
              </a>
            </li>
            <li className={styles.li}>
              <a href="#Projects" onClick={closeMenu}>
                Projetos
              </a>
            </li>
            <li className={styles.li}>
              <a href="#Contact" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
