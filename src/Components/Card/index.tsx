import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgText from "../../img/xp.png";
import { FaGithub, FaReact, FaJs, FaSass, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiNextdotjs } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'next-i18next';

const CardProfile = () => {
  const stacksRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();

  const stacks = [
    { nome: "JavaScript", backgroundColor: "#C3C99E", icon: <FaJs />, iconColor: "#D9F431" },
    { nome: "TypeScript", backgroundColor: "#007ACC", icon: <SiTypescript />, iconColor: "#dadada" },
    { nome: "React", backgroundColor: "#7D9CA5", icon: <FaReact />, iconColor: "#61DBFB" },
    { nome: "Next.js", backgroundColor: "#C2C2C2", icon: <SiNextdotjs />, iconColor: "#272727" },
    { nome: "Figma", backgroundColor: "#F24E1E", icon: <FaFigma />, iconColor: "#ffffff" },
    { nome: "Sass", backgroundColor: "#CC6699", icon: <FaSass />, iconColor: "#ffffff" },
    { nome: "PostgreSQL", backgroundColor: "#336791", icon: <SiPostgresql />, iconColor: "#ffffff" },
    { nome: "GitHub", backgroundColor: "#746e6e", icon: <FaGithub />, iconColor: "#ffffff" }
  ];

  const scrollToPosition = (position) => {
    if (stacksRef.current) {
      const itemWidth = stacksRef.current.children[0].clientWidth; 
      const scrollToPosition = position * itemWidth;
      stacksRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
      setScrollPosition(position);
    }
  };

  const handleScrollLeft = () => {
    scrollToPosition(0);
  };

  const handleScrollCenter = () => {
      if (stacksRef.current) {
        const itemWidth = stacksRef.current.children[0].clientWidth; 
        const totalWidth = stacksRef.current.scrollWidth; 
        const containerWidth = stacksRef.current.clientWidth; 
        const middlePosition = (totalWidth - containerWidth) / 2; 
        
        stacksRef.current.scrollTo({ left: middlePosition, behavior: 'smooth' });
        setScrollPosition(Math.floor(stacks.length / 2)); 
    };
  };

  const handleScrollRight = () => {
    const newPosition = Math.min(scrollPosition + 1, stacks.length - 1); 
    scrollToPosition(newPosition);
  };

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
      </div>
      <div className={styles.stacksContainer} ref={stacksRef}>
        <div className={styles.stacks}>
          {stacks.map((stack, index) => (
            <div
              key={index}
              className={styles.stackItem}
              style={{ backgroundColor: stack.backgroundColor }}
            >
              <span
                className={styles.icon}
                style={{ color: stack.iconColor }} 
              >
                {stack.icon}
              </span>
              <span className={styles.stackName}>{stack.nome}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          onClick={handleScrollLeft}
        >
          Anterior
        </button>
        <button 
          onClick={handleScrollCenter} 
        >
          Início
        </button>
        <button 
          onClick={handleScrollRight} 
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default CardProfile;
