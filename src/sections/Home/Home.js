import React from 'react'
import './Home.css'
import Name from '../../components/HomeName/HomeName';
import NavBar from '../../components/NavBar/NavBar';
import ModelSection from '../../components/ModelSection/ModelSection'
import foto from '../../assets/img/eu2.png';

const Home = () => {
    return (
        <ModelSection id='home'>
            <div className='nav'>
                <NavBar />
            </div>
            <Name />
        </ModelSection>
    )
}

export default Home;