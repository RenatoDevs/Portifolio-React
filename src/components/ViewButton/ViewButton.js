import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ViewButton.module.css'

const ViewButton = () => {
  return (
    <div className={styles.button_container}>
      <a href='https://www.google.com.br/' target="_blank" rel='noreferrer'>Ver Pagina</a>
      <a href='https://www.google.com.br/' target="_blank" rel='noreferrer'>GitHub</a>
    </div>
  )
}

export default ViewButton