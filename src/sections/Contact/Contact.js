import React, { useState } from 'react'
import Loader from '../../components/Loader/Loader';
import ModelSection from '../../components/ModelSection/ModelSection'
import Title from '../../components/Title/TitlePage';
import styles from "./Contact.module.css"
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import CvModelo from '../../assets/img/RENATO DOS SANTOS - DEV FRONT END.png';
import Modal from '../../components/Modal/Modal';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Loader>
      <ModelSection>
        <div className={styles.box_title}>
          <Title name={'Contato'} />
        </div>
        <div className={styles.container}>
          <div className={styles.desc_contact}>

            <form action="https://formsubmit.co/santos.renato@hotmail.com" method="POST">
              <div>
                <label>
                  <input
                    type="text" name="name" required placeholder='Nome'
                  />
                </label>
                <label>
                  <input
                    type="email" name="email" required placeholder='email'
                  />
                </label>
              </div>
              <label>
                <input
                  type="text" name="subject" required placeholder='Assunto'
                />
              </label>
              <label>
                <textarea
                  type="text" name="messag" required placeholder='Mensagem'
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className={styles.contact_container}>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/renato-santos-693568127/"><IoLogoLinkedin />
                </a>
                Linkedin
              </li>
              <li>
                <a href="https://github.com/RenatoDevs"><IoLogoGithub />
                </a>
                RenatoDevs
              </li>
              <li>
                <a href="santos.renato@hotmail.com"><IoMail />
                </a>
                santos.renato@hotmail.com
              </li>
              <li onClick={toggleModal}>
                <a href="#"><IoDocumentText />
                </a>
                Curriculo
              </li>
            </ul>
          </div>
          <Modal download={true} showModal={showModal} toggleModal={toggleModal}>
            <img src={CvModelo} alt="Curriculo" />
          </Modal>
        </div>
      </ModelSection>
    </Loader>
  )
}

export default Contact