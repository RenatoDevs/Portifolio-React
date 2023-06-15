import React from 'react';
import styles from './Home.module.css';
import ModelSection from '../../components/ModelSection/ModelSection';
import foto from '../../assets/img/re-sem-fundo.png';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    return (
        <Loader>
            <ModelSection >
                <div className={styles.social}>
                    <SocialButtons customClass='column' />
                </div>
                <div className={styles.box_image} >
                    <div className={styles.image}>
                        {/* <img src={foto} alt='#'></img> */}
                    </div>
                </div>
                <div className={styles.box_name}>
                    <div data-text="Hi i'm" className={styles.first_name}>
                        <span>r</span>
                        <span>e</span>
                        <span>n</span>
                        <span>a</span>
                        <span>t</span>
                        <span>o</span>
                    </div>
                    <div className={styles.last_name}>
                        <span>S</span>
                        <span>a</span>
                        <span>n</span>
                        <span>t</span>
                        <span>o</span>
                        <span>S</span>
                    </div>
                    <div className={styles.job}>
                        <span>Front End Developer</span>
                    </div>
                </div>

            </ModelSection>
        </Loader>
    )
}

export default Home;