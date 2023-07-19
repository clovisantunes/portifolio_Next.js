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
import { useTranslation } from 'next-i18next';
export const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();
  const initialSkill = t("skillCard");
  const [skill, setSkill] = useState<string>(initialSkill);
  const html = t("html");
  const css = t("css");
  const react = t("react");
  const sass = t("sass");
  const nextjs = t("nextjs");
  const typescript = t("typescript");
  const javascript = t("javascript");
  const postgresql = t("postgresql");
  const java = t("java");
  const nodejs = t("nodejs");
  const github = t("github");





  const skillText = {
    html: html,
    css: css,
    react: react,
    sass: sass,
    nextjs: nextjs,
    typescript: typescript,
    javascript: javascript,
    postgresql: postgresql,
    java: java,
    nodejs: nodejs,
    github: github,

  };
  function handleSkillHover(text) {
    setSkill(text);
  }
  function handleSkillLeave() {
    setSkill(initialSkill);
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
              {t('skill')}<span className={styles.point}>.</span>
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