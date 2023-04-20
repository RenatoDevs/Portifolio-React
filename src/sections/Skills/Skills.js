import React, { useState } from 'react';
import Bubble from '../../components/Bubble/Bubble';
import ModelSection from '../../components/ModelSection/ModelSection';
import styles from './Skills.module.css';
import TechsData from '../../data/TechsData';
import TitleShadow from '../../components/TitleShadow/TitleShadow';
import { IoPeopleOutline } from 'react-icons/io5';
import { motion } from "framer-motion";
import Loader from '../../components/Loader/Loader';


const Skills = () => {

  const [techsItem] = useState(TechsData);




  return (
    <Loader>
      <ModelSection customClass='column'>
        <div className={styles.grid_skills}>
          <div className={styles.soft_skills}>
            <TitleShadow title='Soft Skills' />
            <div className={styles.grid_soft_skills}>
              <ul>
                {['Pensamento Crítico',
                  'Resiliência', 'Colaboração',
                  'Trabalho em Equipe', 'Proatividade',
                  'Empatia'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ scale: .5 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >{item}</motion.li>
                  ))}
              </ul>
            </div>
          </div>
          <div className={styles.hard_skills}>
            <TitleShadow customClass='titleShadowRight' title='Hard Skills' />
            <div className={styles.grid_cards_hard_skills}>
              {
                techsItem.map((item, i) => (
                  <motion.div className={styles.card_hard_skill} key={i}
                    initial={{ scale: .5 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                  >
                    <div className={styles.box_bubble}>
                      <Bubble customClass='large' >
                        <img src={`../public-images/techs/${item.name}.png`} alt="" />
                      </Bubble>
                    </div>
                    {/* <div className={styles.description_hard_skill}>
                      <h1>{item.name}</h1>
                      <ul>
                        {item.conhecimento.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div> */}
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
      </ModelSection >
    </Loader>
  )
}

export default Skills