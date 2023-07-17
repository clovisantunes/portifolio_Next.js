import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import logoImg from "../../../img/logo.png";
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { t } = useTranslation();
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
              {t('init')}
              </a>
            </li>
            <li className={styles.li}>
              <a href="#cardProfile" onClick={closeMenu}>
              {t('about')}
              </a>
            </li>
            <li className={styles.li}>
              <a href="#skills" onClick={closeMenu}>
              {t('acquirements')}
              </a>
            </li>
            <li className={styles.li}>
              <a href="#Projects" onClick={closeMenu}>
              {t('project')}
              </a>
            </li>
            <li className={styles.li}>
              <a href="#Contact" onClick={closeMenu}>
              {t('contact')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
