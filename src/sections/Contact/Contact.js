import React, { useState } from 'react'
import Loader from '../../components/Loader/Loader';
import ModelSection from '../../components/ModelSection/ModelSection'
import Title from '../../components/Title/TitlePage';
import styles from "./Contact.module.css"
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import CvModelo from '../../assets/img/RENATO DOS SANTOS - DEV FRONT END.png';
import Modal from '../../components/Modal/Modal';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');

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
            <form onSubmit={() => { }}>
              <p>Fique a vontade para me enviar uma mensagem.</p>
              <label>
                <input
                  type="text"
                  placeholder="Digite seu nome e sobrenome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Digite o assunto"
                  onChange={(e) => setAssunto(e.target.value)}
                  value={assunto}
                />
              </label>
              <label>
                <textarea
                  placeholder="Digite sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </label>
              <input type="submit" value="Enviar Mensagem" />
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