import React, { useState } from 'react';
import Bubble from '../../components/Bubble/Bubble';
import ModelSection from '../../components/ModelSection/ModelSection';
import styles from './Skills.module.css';
import TechsData from '../../data/TechsData';
import TitleShadow from '../../components/TitleShadow/TitleShadow';
import { IoPeopleOutline, IconName, IoSchool } from 'react-icons/io5';
import { motion } from "framer-motion";
import Loader from '../../components/Loader/Loader';

import BoxGlass from '../../components/BoxGlass/BoxGlass'
import Title from '../../components/Title/TitlePage'
import FormationData from '../../data/FormationData';
import Modal from '../../components/Modal/Modal';

const Skills = () => {

  const [techsItem] = useState(TechsData);
  const [formationItem, setFormationItme] = useState(FormationData);

  const [showModal, setShowModal] = useState(false);
  const [cert, setCert] = useState('')

  const toggleModal = (item) => {
    setShowModal(!showModal);
    setCert(item);
    console.log(item)
  }
  return (
    <Loader>
      <ModelSection customClass='column'>
        <div className={styles.grid_skills}>
          <div className={styles.soft_skills}>
            <TitleShadow customClass='titleShadowLight' title='Soft Skills' />
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
                    >
                    <img src={`../public-images/logos/${item}.png`} alt="" /></motion.li>
                  ))}
              </ul>
            </div>
          </div>


          {/* <div className={styles.hard_skills}>
            <TitleShadow customClass='titleShadowlight' title='Hard Skills' />
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
                  </motion.div>
                ))
              }
            </div>
          </div>*/}
        </div>
        <div className={styles.formation_container}>
          <div className={styles.formation_title}>
            <Title name='Formation' />
          </div>
          <div className={styles.grid_formation}>
            {
              formationItem.map((item, i) => {
                return (
                  <div className={styles.formation_item} key={i}>
                    <span className={styles.timeline_formation}>
                      <span className={styles.timeline_formation_ball}></span>
                    </span>
                    <BoxGlass customClass='fullWidth'>
                      <div className={styles.content}>
                        <div className={styles.formation_date}>
                          <p className={styles.formation_icon} src='#' alt='C'>{<IoSchool />}</p>
                          <p className={styles.formation_date}>{item.date}</p>
                        </div>
                        <div className={styles.formation_box_description}>
                          <div>
                            {item.tech === "" ? <Bubble customClass="none"></Bubble> : <Bubble customClass='medium' >
                              <img src={`../public-images/techs/${item.tech}.png`} alt="" />
                            </Bubble>}
                          </div>
                          <div className={styles.formation_description}>
                            <p className={styles.formation_name}>{item.name}</p>
                            <p className={styles.formation_college}>{item.college}</p>
                          </div>
                        </div>
                        {item.certificate === "" ? '' : <button onClick={()=>toggleModal(item.certificate)} className={styles.bt_cert}>Ver Certificado</button>}

                      </div>                  
                    </BoxGlass>
                  </div>
                )
              })
            }
          </div>
          <Modal showModal={showModal} toggleModal={toggleModal} download={false}>
            <img src={`../public-images/certificados/${cert}.png`} alt={cert} />
          </Modal>
        </div>
      </ModelSection >
    </Loader>
  )
}

export default Skills