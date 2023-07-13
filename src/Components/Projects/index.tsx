import React, { useState, useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from "next/image";
import { CardProjects } from "../UI/CardProjects";
import styles from "./styles.module.scss";
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
import imgRick from '../../img/rickandmorty.png'
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

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projectsData = [
    {
      id:1,
      title: "Rick And Mory",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <FaSass />,
        <SiTypescript />,
        <SiNextdotjs />,
      ],
      link: 'https://github.com/clovisantunes/rickandmorty',
      deploy:"https://rickandmorty-plumbus.vercel.app/",
      img: imgRick,
      description:
        "Landing page consumindo a api do Rick and Morty. Projeto ainda esta em desenvolvimento, por enquanto contem somente a sessão de carregar personagens mas tera varias outras funções futuramente.",
    },
    {
      id:2,
      title: "Easy Route",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <FaSass />,
        <SiTypescript />,
        <SiNextdotjs />,
      ],
      link: 'https://github.com/clovisantunes/easy_route',
      img: imgRoute,
      description:
        "Aplicativo de controle de rotas, utilizando api de deslocamento e api do googleMaps, o projeto contem opção de cadastro de usuario e de condutor. Cadastrar automaveis, e rotas e opção de excluir.",
    },
    {
      id:2,
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
        "Projeto FullStack de um sistema de pizzaria, feito todo o backend, frontend e o aplicativo mobile. O projeto contem no back-end opção de excluir, adicionar, criar usuarios e pedidos, realizando o cadastramento de produtos com imagens e categorias. No front end contem a opção de logar o usuario e registar. Alem de visualizar os pedidos e concluir os atendimentos. No mobile contem a opção de criar pedidos e enviar para realizar o atendimento. ",
    },
    {
      id:3,
      title: "Imobiliaria",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgImob,
      link: 'https://github.com/clovisantunes/-real-estate',
      description: "Projeto de uma landing page de um site de imobiliaria. Foi criado este projeto com objetivo de treinamento e estudo.",
    },
    {
      id:4,
      title: "Git Finder",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
      ],
      img: imgGit,
      link: 'https://github.com/clovisantunes/github_finder',
      description: "Estudo de consumo de api's utilizando TypeScript. Foi utilizado a api do github para realizar a buscar dos usuarios, e foi criado com objetivo de estudar typeScript.",
    },
    {
      id:5,
      title: "PrimeFlix",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgPrime,
      link: 'https://github.com/clovisantunes/prime_flix',
      description: "Projeto de estudo do consumo de api's",
    },
    {
      id:6,
      title: "Spotify Clone",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgSpotify,
      link: 'https://github.com/clovisantunes/spotify_clone',
      description: "Clone do spotify, feito para estudar o consumo de api.",
    },
    {
      id:7,
      title: "Pokedex",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgPokedex,
      link: 'https://github.com/clovisantunes/pokedex',
      description: "Pokedex utilizando api do pokemon.",
    },
    {
      id:8,
      title: "Clone Netflix",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgNetflix,
      link: 'https://github.com/clovisantunes/netflix_clone',
      description: "Clone da netflix, criada para estudar o consumo de api. e o carregamento de varias informações.",
    },
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
        <div className={styles.text}>Todos os Projetos</div>
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
