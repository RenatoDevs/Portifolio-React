import React from 'react'

import './About.css'
import Title from '../../components/Title/TitlePage';
import ModelSection from '../../components/ModelSection/ModelSection';
import Container from '../../components/Container/Container';


const About = () => {
    /* Aqui vou dispor uma breve descrição minha 
        plano de fundo uma imagem de santo andré
        a frente uma foto minha e ao lado a descrição 
    */
    return (
        <ModelSection id='about-me'>
            <Container>
                <div className='about'>
                    <div className='about-title' data-aos="fade-right">
                        <Title name='About' />
                    </div>
                    <div className='box-description' data-aos="zoom-in-left">
                        <p>Olá eu sou Renato dos Santos seja Bem-vindo ao meu portifólio, aqui vou dispor um pouco sobre  mim, meus projetos pessoais que irei desenvolver ao longo dos meus estudos, e da minha carreira como desenvolvedor que pretendo construir.
                        </p>
                    </div>
                </div>
            </Container>
        </ModelSection>
    )
}

export default About;