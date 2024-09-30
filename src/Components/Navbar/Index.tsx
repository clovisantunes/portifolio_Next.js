import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./styles.module.scss";
import logoImg from "../../img/logo.png";
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
            className={`${styles.hamburgerButton} ${showMenu ? styles.open : ""}`}
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
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
            </li>
            <li className={styles.li}>
              <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </li>
            <li className={styles.li}>
              <a href="mailto:seu-email@example.com">
                <FiMail />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
