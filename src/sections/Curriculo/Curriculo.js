import React from 'react'
import ModelSection from '../../components/ModelSection/ModelSection'
import styles from './Curriculo.module.css';
import foto from '../../assets/img/eu2.png';

const Curriculo = () => {
  return (
    <ModelSection>
      <div className={styles.container}>
        <div className={styles.box_left}>
          <div className={styles.image_perfil}>
            <img src={foto} alt='#'></img>
          </div>
          <div className={styles.box_name}>
            <div className={styles.name}>
              <div className={styles.first_name}>
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
            </div>
            <div className={styles.job}>
              <span>Front End Developer</span>
            </div>
          </div>
          <div className={styles.contact_desc}>
            <h2>Contact</h2>
            <ul>
              <li>Linkedin</li>
              <li>Email</li>
            </ul>
          </div>
          <div className={styles.contact_desc}>
            <h2>Skills</h2>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
          <div className={styles.contact_desc}>
            <h2>Languange</h2>
            <ul>
              <li>Inglês</li>
            </ul>
          </div>
        </div>


        <div className={styles.box_right}>
          <div className={styles.profile}>\</div>
          <div className={styles.experience}>a</div>
          <div className={styles.education}>a</div>
          <div className={styles.personal}>a</div>
        </div>
      </div>
    </ModelSection>
  )
}

export default Curriculo