import styles from './About.module.css';
import Title from '../../components/Title/TitlePage';
import ModelSection from '../../components/ModelSection/ModelSection';
import foto from '../../assets/img/eu2.png';

import React from 'react';
import Loader from '../../components/Loader/Loader';


const About = () => {
    /* Aqui vou dispor uma breve descrição minha 
        plano de fundo uma imagem de santo andré
        a frente uma foto minha e ao lado a descrição 
    */
    return (
        <Loader>
            <ModelSection>
                <div className={styles.about}>
                    <div className={styles.image}>
                        <img src={foto} alt='#'></img>
                    </div>

                    <div className={styles.box_description}>
                        <div className={styles.box_title}>
                            <Title name='About' />
                        </div>
                        <p>Olá eu sou Renato dos Santos seja Bem-vindo ao meu portifólio, aqui vou dispor um pouco sobre  mim, meus projetos pessoais que irei desenvolver ao longo dos meus estudos, e da minha carreira como desenvolvedor que pretendo construir.
                        </p>
                    </div>
                </div>
            </ModelSection>
        </Loader>
    )
}

export default About;