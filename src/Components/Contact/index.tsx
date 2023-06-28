import React from "react";
import styles from './styles.module.scss';

import {AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub} from "react-icons/ai";

const contactData = [
    {
        name: "Email",
        icon: <AiOutlineMail />,
        text: "clovissantannaa@gamail.com",
        href: "mailto:clovissantannaa@gmail.com"
    },
    {
        name: "WhatsApp",
        icon: < AiOutlineWhatsApp/>,
        text: '(51) 99593-0496',
        href: "https://api.whatsapp.com/send/?phone=5551995930496&text&type=phone_number&app_absent=0"
    },
    {
        name: "Linkedin",
        icon: <AiFillLinkedin />,
        text: "@clovisantunes",
        href: "https://www.linkedin.com/in/clovis-antunes/"
    },
    {
        name: "GitHub",
        icon: < AiFillGithub/>,
        text: "@clovisantunes",
        href: "https://github.com/clovisantunes"
    }
]


export default function Contact(){
    return(
        <div className={styles.contactContainer}>
            <div className={styles.cardItems}>
                {contactData.map ((contactCard) => (
                    <div className={styles.contactCard}>  
                        <a href={contactCard.href} target="__blank">
                        <div className={styles.name}>{contactCard.name}</div>
                        <div className={styles.icon}>{contactCard.icon}</div>
                        <div className={styles.text}>{contactCard.text}</div>
                        </a>
                    </div>
                    )
                    )}
            </div>
        </div>
    )
}