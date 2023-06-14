import React, { useState } from "react";
import Image from "next/image";
import { CardProjects } from "../UI/CardProjects";
import styles from "./styles.module.scss";
import imgNetflix from "../../../../img/Mini_netflix_V2.png";
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

function Projects() {
  const projectsData = [
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "pizzaria",
      icons: [
        <FaCss3Alt />,
        <FaHtml5 />,
        <FaReact />,
        <SiTypescript />,
        <FaNodeJs />,
      ],
      img: imgNetflix,
    },
    {
      title: "Clone Netflix",
      icons: [<FaCss3Alt />, <FaHtml5 />, <FaReact />],
      img: imgNetflix,
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
    <div className={styles.container}>
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
                    src={imgNetflix}
                    alt="Netflix Clone"
                    className={styles.imgCard}
                  />
                  {activeIndex === index && (
                    <div className={styles.cover}>
                        <a
                        className={`${styles.projectTitle} ${
                            activeIndex === index ? styles.visible : ""
                        }`}
                        >
                        {project.title}
                        <div className={styles.miniIcons}>{project.icons}</div>
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
