import React from 'react';
import { FaFigma, FaReact, FaNodeJs, FaGithub, FaJs, FaDocker, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiVercel } from 'react-icons/si';
import styles from './styles.module.scss';

const techItems = [
    { id: 'frontend-design', name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    { id: 'frontend-design', name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
    { id: 'frontend-design', name: 'Next.JS', icon: <SiNextdotjs />, color: '#eeeaea' },
    { id: 'frontend-design', name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
    { id: 'deploy', name: 'Vercel', icon: <SiVercel />, color: '#fafafa' },
    { id: 'deploy', name: 'FileZilla', icon: <FaServer />, color: '#BF0000' },
    { id: 'deploy', name: 'Github Actions', icon: <FaGithub />, color: '#ffffff' },
    { id: 'linguagens', name: 'Javascript', icon: <FaJs />, color: '#F7DF1E' },
    { id: 'linguagens', name: 'Typescript', icon: <SiTypescript />, color: '#007ACC' },
    { id: 'devops', name: 'KingHost', icon: <FaServer />, color: '#5A2D82' },
    { id: 'devops', name: 'Github Actions', icon: <FaGithub />, color: '#e6e6e6' },
    { id: 'infraestrutura', name: 'Active Directory', icon: <FaServer />, color: '#444444' },
    { id: 'infraestrutura', name: 'Servidores', icon: <FaServer />, color: '#444444' },
    { id: 'infraestrutura', name: 'Redes TCP/IP', icon: <FaServer />, color: '#444444' }
];

const techCategories = {
    'frontend-design': 'Front-end e Design',
    deploy: 'Deploy',
    linguagens: 'Linguagens',
    devops: 'DevOps',
    infraestrutura: 'Infraestrutura'
};

export default function Tech() {
    return (
        <div className={styles.tech_container}>
            <div className={styles.TitleTech}>
                <h1>Estes são as tecnologias que tenho usado</h1>
            </div>
            <div className={styles.blocks}>

            {Object.entries(techCategories).map(([id, title]) => (
                <div key={id} className={styles.tech_category}>
                    <h3>{title}</h3>
                    <div className={styles.tech_items}>
                        {techItems
                            .filter(item => item.id === id)
                            .map(item => (
                                <div key={item.name} className={styles.tech_item}>
                                    <span 
                                        className={styles.icon} 
                                        style={{ color: item.color }} 
                                        >
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
