import React, { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from "next/image";
import { CardProjects } from "../UI/CardProjects";
import styles from "./styles.module.scss";
import imgNetflix from "../../../../img/Mini_netflix_V2.png";
import imgPokedex from "../../../../img/pokedex.png";
import imgSpotify from "../../../../img/spotify.png";
import imgPrime from "../../../../img/primeFlix.png";
import imgGit from "../../../../img/gitfinder.png";
import imgPizzaria from "../../../../img/pizzariaFront.png";
import imgImob from "../../../../img/imobiliaria.png";
import imgRoute from "../../../../img/img16.png";

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

const  Projects =() => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  },[])

  const projectsData = [
    {
      title: "Easy Route",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <FaSass />,
        <SiTypescript />,
        <SiNextdotjs />,
      ],
      img: imgRoute,
      description:
        "Aplicativo de controle de rotas, utilizando api de deslocamento e api do googleMaps, o projeto contem opção de cadastro de usuario e de condutor. Cadastrar automaveis, e rotas e opção de excluir.",
    },
    {
      title: "Pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
        <SiNextdotjs />,
      ],
      img: imgPizzaria,
      description:
        "Projeto FullStack de um sistema de pizzaria, feito todo o backend, frontend e o aplicativo mobile.",
    },
    {
      title: "Imobiliaria",
      icons: [<FaCss3Alt />,
       <FaHtml5 />,
       <FaReact />],
      img: imgImob,
      description: "Projeto de um site de imobiliaria imobiliaria",
    },
    {
      title: "Git Finder",
      icons: [<FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />, 
        <SiTypescript />],
      img: imgGit,
      description: "Estudo de consumo de api's utilizando TypeScript",
    },
    {
      title: "PrimeFlix",
      icons: [
       <FaCss3Alt />,
       <FaHtml5 />,
       <FaReact />],
      img: imgPrime,
      description: "Projeto de estudo do consumo de api's",
    },
    {
      title: "Spotify Clone",
      icons: [
      <FaCss3Alt />,
      <FaHtml5 />, 
      <FaReact />],
      img: imgSpotify,
      description: "Clone do spotify",
    },
    {
      title: "Pokedex",
      icons: [
      <FaCss3Alt />, 
      <FaHtml5 />, 
      <FaReact />],
      img: imgPokedex,
      description: "Pokedex utilizando api do pokemon",
    },
    {
      title: "Clone Netflix",
      icons: [
      <FaCss3Alt />, 
      <FaHtml5 />, 
      <FaReact />],
      img: imgNetflix,
      description: "Clone da netflix",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.containerProjects}>
        <div className={styles.text}>Todos Projetos</div>
        <div className={styles.butonContainer}>
          <div className={styles.buttonCard}>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <CardProjects
                  type="submit"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={project.img}
                    alt={project.description}
                    className={styles.imgCard}
                  />
                  {activeIndex === index && (
                    <div
                      className={`${styles.cover} ${
                        activeIndex === index ? styles.visible : ""
                      }`}
                    >
                      <a
                        className={`${styles.projectTitle} ${
                          activeIndex === index ? styles.visible : ""
                        }`}
                      >
                        {project.title}
                        <div className={styles.miniIcons}>
                          {project.icons}
                          <button>Ver mais</button>
                        </div>
                      </a>
                    </div>
                  )}
                </CardProjects>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
