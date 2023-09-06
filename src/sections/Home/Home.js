import React, { useState } from 'react';
import styles from './Home.module.css';
import ModelSection from '../../components/ModelSection/ModelSection';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import Loader from '../../components/Loader/Loader';

import FormationData from '../../data/FormationData';
import Bubble from '../../components/Bubble/Bubble';

const Home = () => {
    const [formationItem] = useState(FormationData);

    return (
        <Loader>
            <ModelSection>
                <div className={styles.home}>
                    <div className={styles.social}>
                        <SocialButtons customClass='column' />
                    </div>

                    <div className={styles.box_name}>
                        <div className={styles.name}>
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
                    </div>


                    <div className={styles.techs}>
                        {formationItem.map((item, i) => {
                            return (
                                <div className={styles.formation_item} key={i}> 
                                    {item.tech === ""? <Bubble customClass="none"></Bubble> : <Bubble customClass='small-menu' >
                                        <img src={`../public-images/techs/${item.name}.png`} alt={item.name} />
                                    </Bubble>}
                                    <div className={styles.tech_desc}>{item.tech}</div>
                                </div>
                                
                            )
                        })
                        }
                    </div>
                </div>
            </ModelSection>
        </Loader>
    )
}

export default Home;