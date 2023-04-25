import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectData from '../../data/ProjectData';
import ModelSection from '../../components/ModelSection/ModelSection'
import Bubble from '../../components/Bubble/Bubble';
import styles from './ProjectPage.module.css'
// import { AnimatePresence, motion } from 'framer-motion';
import ViewButton from '../../components/ViewButton/ViewButton'
import Loader from '../../components/Loader/Loader';
const ProjectPage = () => {
  let { id } = useParams();
  const [dataProject] = useState(ProjectData);
  const data = dataProject[id];
  return (
    <Loader>
      <div className={styles.project_container}>
        <div className={styles.project_title}>
          <h1>{data.title}</h1>
        </div>
        <div className={styles.project}>
          <div className={styles.box_image}>
            <div className={styles.case_pc}>
              <img src={`../../public-images/capas/${data.img}.png`} alt="" />
            </div>
          </div>

          <div className={styles.box_description}>
            <div className={styles.description}>
              <h2>Descrição</h2>
              <p>{data.description}</p>
            </div>
            <div className={styles.tec}>

              <h2>Stacks</h2>
              <div className={styles.box_tec}>
                {data.tec.map((tec, i) => (
                  <Bubble customClass='small-desc' key={i}>
                    <img src={`../../public-images/techs/${tec}.png`} alt=""></img>
                  </Bubble>
                ))}
              </div>
              <div className={styles.view_button}>
                <a href='https://www.google.com.br/' target="_blank" rel='noreferrer'>Ver Pagina</a>
                <a href='https://www.google.com.br/' target="_blank" rel='noreferrer'>GitHub</a>
              </div>
            </div>


          </div>
        </div>

      </div>
    </Loader>

  )
}

export default ProjectPage