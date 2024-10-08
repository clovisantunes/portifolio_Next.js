import React, { useState } from 'react';
import styles from './styles.module.scss';

const experiences = [
    {
        title: 'Suporte de Infra, HGTI',
        subtitle: '2023/09 - Atual',
        description: '• Responsável pela manutenção de redes TCP/IP, instalação e gerenciamento de servidores com Active Directory. Também atuo na instalação de cabeamento de rede e manutenção de hardware, garantindo a infraestrutura necessária para o funcionamento eficiente dos sistemas.'
    },
    {
        title: 'Desenvolvedor Front-End React, DevRoom',
        subtitle: '2023/06 – 2023/09',
        description: '• Liderança no desenvolvimento de um projeto próprio de site web, focado no front-end utilizando React.js e TypeScript. Além de realizar o deploy e testes da aplicação, assegurando uma interface responsiva e funcional.'
    },
    {
        title: 'Desenvolvedor Front-End, SouJunior',
        subtitle: '2024/05 – 2024/08',
        description: '• Participação voluntária no desenvolvimento colaborativo de uma aplicação web, onde fui responsável pela implementação do front-end com Next.js e TypeScript. Utilizei a metodologia Scrum para organizar e gerenciar o fluxo de desenvolvimento de forma ágil e eficiente.'
    },
    {
        title: "Assistente de HelpDesk, Paqueta",
        subtitle: "2022/08 – 2023/04",
        description: "• Prestei suporte técnico aos usuários através de um sistema de chamados, solucionando questões de N1 e N2. Atuei na manutenção de desktops, notebooks, e impressoras, além de auxiliar no uso de softwares corporativos como ERPs e sistemas de gestão."
    }
];


export default function EXP() {
    const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

    const toggleExpand = (index) => {
        setExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className={styles.expContainer}>
            <h2>Principais Experiências</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={`${styles.cards} ${expanded[index] ? styles.expanded : ''}`}>
                    <h3>
                        <button 
                            onClick={() => toggleExpand(index)} 
                            className={expanded[index] ? styles.rotate : ''}
                        >
                            {expanded[index] ? '-' : '+'}
                        </button>
                        {experience.title}
                    </h3>
                    <div className={styles.description}>
                        <p><strong>{experience.subtitle}</strong></p>
                        <p>{experience.description.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
