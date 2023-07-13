import React from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";
import { Button } from "../UI/Button";
import { AiFillGithub } from "react-icons/ai";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


interface ModalProjectProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedIndex: {
    title: string;
    icons: JSX.Element[];
    img: StaticImageData;
    link: string;
    deploy: string;
    description: string;
  } | null;
}

export default function ModalProject({
  isOpen,
  onRequestClose,
  selectedIndex,
}: ModalProjectProps) {
  const customStyles = {
    content: {
      top: "15%",
      bottom: "auto",
      left: "15%",
      right: "auto",
      padding: "30px",
      Transform: "translate(-50%, 50%)",
      backgroundColor: "#151515",
      width: "70%",
      height: "80%",
    },
  };

  if (!selectedIndex) {
    return null;
  }

  const { title, icons, img, link, description, deploy } = selectedIndex;
  

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className={styles.buttons}>
        <Button type="button" className={styles.button}>
          <a href={link} target="__blank">
            <AiFillGithub />
          </a>
        </Button>

        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: "transparent", border: 0 }}
        >
          <FiX size={25} color="9d4ae6" />
        </button>
      </div>
      <div className={styles.modalContainer}>
        <div className={styles.modalItem}>
          <div className={styles.name}>
            <span>{title}</span>
          </div>
          <div className={styles.modalDescription}>
            <div className={styles.image}>
              <Image src={img} alt={title} />
            </div>
            <div className={styles.modalInformation}>
              <div className={styles.iconsContainer}>
                <div className={styles.icon}>{icons}</div>
              </div>
              <div>
                <span>{description}</span>
              </div>
              {deploy && (
              <Button type="button">
                <a href={deploy} target="__blank">
                  Acessar
                </a>
              </Button>
              )}

            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
