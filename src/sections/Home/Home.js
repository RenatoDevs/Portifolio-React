import React from 'react'
import './Home.css'

import NavBar from '../../components/NavBar/NavBar';
import ModelSection from '../../components/ModelSection/ModelSection'
import foto from '../../assets/img/eu2.png';
import SocialButtons from '../../components/SocialButtons/SocialButtons';


const Home = () => {



    return (
        <ModelSection id='home'>
            <div className='nav'>
                <NavBar />
            </div>
            <div className='social'>
                <SocialButtons customClass='column' />
            </div>
            <div className='home-name' >
                <div className='box-image' data-aos="fade-down" >
                    <img className='eu' src={foto} alt='#'></img>
                </div>
                <div className='box-name'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div data-text="Hi i'm" className='first-name'>
                        <span>r</span>
                        <span>e</span>
                        <span>n</span>
                        <span>a</span>
                        <span>t</span>
                        <span>o</span>
                    </div>
                    <div className='last-name'>
                        <span>S</span>
                        <span>a</span>
                        <span>n</span>
                        <span>t</span>
                        <span>o</span>
                        <span>S</span>
                    </div>
                    <div className='job'>
                        <span>Front End Developer</span>
                    </div>
                </div>
            </div>

        </ModelSection>
    )
}

export default Home;