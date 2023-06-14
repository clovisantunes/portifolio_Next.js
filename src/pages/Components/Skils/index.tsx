import React, { useEffect, useState } from "react";
import { CardSkills } from "../UI/CardSkils";
import styles from "./styles.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import Aos from 'aos';
import "aos/dist/aos.css";

export const Skills = () => {

        useEffect(() => {
          Aos.init({ duration: 2000 });
        }, []);

  const [skill, setSkill] = useState("*Passe o mouse por cima do card para ler*");

  const skillText = {
    html: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
    css: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.",
    react: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    sass: "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.",
    nextjs: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    typescript: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem",
    javascript: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    postgresql: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
    java: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.",
    nodejs:"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos",
    github: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",

};

  function handleSkillHover(text) {
    setSkill(text);
  }

  function handleSkillLeave() {
    setSkill("*Passe o mouse por cima do card para ler*");
  }

  const skillIcons = [
    { icon: <FaHtml5 />, skill: "html" },
    { icon: <FaCss3Alt />, skill: "css" },
    { icon: <FaReact />, skill: "react" },
    { icon: <FaSass />, skill: "sass" },
    { icon: <SiNextdotjs />, skill: "nextjs" },
    { icon: <SiTypescript />, skill: "typescript" },
    { icon: <SiJavascript />, skill: "javascript" },
    { icon: <SiPostgresql />, skill: "postgresql" },
    { icon: <FaJava />, skill: "java" },
    { icon: <FaNodeJs />, skill: "nodejs" },
    { icon: <SiGithub />, skill: "github" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerSkills}>
        <div className={styles.TextSkills} data-aos="fade-right">
          <div className={styles.text}>
            <h3>
              Conhecimentos<span className={styles.point}>.</span>
            </h3>
            <span className={styles.skillsText}>{skill}</span>
          </div>
        </div>
        <div className={styles.cardSkills} data-aos="fade-left">
          {skillIcons.map((skillIcon) => (
            <CardSkills
              key={skillIcon.skill}
              type="submit"
              onMouseOver={() => handleSkillHover(skillText[skillIcon.skill])}
              onMouseLeave={handleSkillLeave}
            >
              {skillIcon.icon}
            </CardSkills>
          ))}
        </div>
      </div>
    </div>
  );
}