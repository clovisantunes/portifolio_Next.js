import React, { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from "next/image";
import { CardProjects } from "../UI/CardProjects";
import styles from "./styles.module.scss";
import DevRoom from '../../img/devRoom.png'
import imgNetflix from "../../img/Mini_netflix_V2.png";
import imgPokedex from "../../img/pokedex.png";
import imgSpotify from "../../img/spotify.png";
import imgPrime from "../../img/primeFlix.png";
import imgGit from "../../img/gitfinder.png";
import imgPizzaria from "../../img/pizzariaFront.png";
import imgImob from "../../img/imobiliaria.png";
import imgRoute from "../../img/img16.png";
import Modal from 'react-modal';
import ModalProject from "../ModalProject";
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
import { useTranslation } from 'next-i18next';

const Projects = () => {

  const { t } = useTranslation();
  const devRoom = t("project1");
  const easyRoute = t("project2");
  const Pizzaria = t("project3");
  const Imobiliaria = t("project4");
  const gitFinder = t("project5");
  const primeFlix = t("project6");
  const spotifyClone = t("project7");
  const pokedex = t("project8");
  const cloneNetlix = t("project9");

  const projectsData = [
    {
      id:1,
      title: "DevRoom",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <FaSass />,
        <SiTypescript />,
      ],
      link: 'https://github.com/clovisantunes/rickandmorty',
      deploy:"https://devroom.tech/",
      img: DevRoom,
      description:
            devRoom
    },
    {
      id:2,
      title: "Portifolio Dandara",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaSass />,
        <SiTypescript />,
        <SiNextdotjs />,
      ],
      link: 'https://github.com/clovisantunes/portifolio_dandara',
      deploy:"https://portifolio-dandara.vercel.app/",
      img: imgRoute,
      description:
      easyRoute,
    }/*
    {
      id:3,
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
      link: 'https://github.com/clovisantunes/projetoPizza',
      description:
      Pizzaria,
    },
    {
      id:4,
      title: "Imobiliaria",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgImob,
      link: 'https://github.com/clovisantunes/-real-estate',
      description: Imobiliaria,
    },
    {
      id:5,
      title: "Git Finder",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
      ],
      img: imgGit,
      link: 'https://github.com/clovisantunes/github_finder',
      description: gitFinder,
    },
    {
      id:6,
      title: "PrimeFlix",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgPrime,
      link: 'https://github.com/clovisantunes/prime_flix',
      description: primeFlix,
    },
    {
      id:7,
      title: "Spotify Clone",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgSpotify,
      link: 'https://github.com/clovisantunes/spotify_clone',
      description: spotifyClone,
    },
    {
      id:8,
      title: "Pokedex",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgPokedex,
      link: 'https://github.com/clovisantunes/pokedex',
      description: pokedex,
    },
    {
      id:9,
      title: "Clone Netflix",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgNetflix,
      link: 'https://github.com/clovisantunes/netflix_clone',
      description: cloneNetlix,
    },*/
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleOpenModalView = (index) => {
    setSelectedIndex(projectsData[index]);
    setModalVisible(true);
  };
  Modal.setAppElement("#__next");

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.containerProjects}>
        <div className={styles.text}>Projetos</div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonCard}>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <CardProjects
                key={project.id}
                  type="submit"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOpenModalView(index)}
                >
                  <Image
                    src={project.img}
                    alt={project.description}
                    className={styles.imgCard}
                    layout="responsive" 
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
      {modalVisible && (
        <ModalProject
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Projects;
