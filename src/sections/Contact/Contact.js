import React, { useState } from 'react'
import ModelSection from '../../components/ModelSection/ModelSection'
import SocialButtonsPlus from '../../components/SocialButtonsPlus/SocialButtonsPlus';
import Title from '../../components/Title/TitlePage';
import styles from "./Contact.module.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <ModelSection>
      <div className={styles.box_title}>
        <Title name={'Contato'} />
      </div>
      <div className={styles.container}>
        <div className={styles.desc_contact}>
          <form onSubmit={() => { }}>
            <h1>Vamos Conversar ??</h1>
            <p>Fique a vontade para me enviar uma mensagem.</p>
            <label>
              <input
                type="text"
                placeholder="Digite seu nome"
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
              /></label>
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
          <SocialButtonsPlus />
        </div>
      </div>
    </ModelSection>
  )
}

export default Contact