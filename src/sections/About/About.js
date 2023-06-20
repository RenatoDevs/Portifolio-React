import styles from './About.module.css';
import Title from '../../components/Title/TitlePage';
import ModelSection from '../../components/ModelSection/ModelSection';
import foto from '../../assets/img/re.jpg';
import React from 'react';
import Loader from '../../components/Loader/Loader';
import TitleShadow from '../../components/TitleShadow/TitleShadow';
import { motion } from "framer-motion";


const About = () => {
    let date = new Date();
    let yearD = date.getFullYear()
    let idade = yearD - 1998;

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
                        <p>
                            Olá, eu sou Renato dos Santos tenho {idade} anos, sou um apaixonado por tecnologia, decidi trilhar o caminho da programação, atualmente estou focado em desenvolvimento Web. Trabalho com as stacks:  ReactJS | SASS| JavaScript | HTML | CSS | Git.
                        </p>
                        <p>
                            Busco recolocação profissional, Atualmente Trabalho em uma Fábrica de peças automotivas, nestes 6 anos, pude me desenvolver de forma pessoal e profissionalmente, onde iniciei como ajudante da montagem, ao passar do tempo fui assumindo responsabilidades.
                        </p>
                        <p>
                            Hoje sou Responsável pelo setor de fabricação de almas, que envolvem, a equipe de fabricação e parte da área de solda, o controle de qualidade e medidas, estoque, pedidos e recebimentos de materiais, pedidos e envios ao cliente, bem como recebimento e o atendimento aos clientes quando necessário.
                        </p>
                    </div>
                </div>
                <div className={styles.grid_skills}>
                    <TitleShadow customClass='titleShadowLight' title='Soft Skills' />
                    <div className={styles.grid_soft_skills}>
                        <ul>
                            {['Pensamento Crítico',
                                'Resiliência', 'Colaboração',
                                'Trabalho em Equipe', 'Proatividade',
                                'Empatia'].map((item, i) => (
                                    <div className={styles.soft_skills} key={i}>
                                        <motion.li
                                            key={i}
                                            initial={{ scale: .5 }}
                                            animate={{ rotate: 360, scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                        >
                                            <img src={`../public-images/logos/${item}.png`} alt="" />

                                        </motion.li>
                                        <span className={styles.description_soft_skill}>{item}</span>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </div>
                {/* <div className={styles.hobby}>
                <TitleShadow customClass='titleShadowLight' title='Hobbys' />
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
            </ModelSection>
        </Loader>
    )
}

export default About;