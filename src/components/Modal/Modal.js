import React, { useState } from 'react';
import styles from './Modal.module.css';
const Modal = ({children, showModal, toggleModal,download}) => {

    return (
        <div className={`${styles.modal} ${showModal ? styles.show : ''}`} onClick={toggleModal}>
            <div className={styles.boxModal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBt} onClick={toggleModal}>X</button>
              <div className={styles.content}>
                {children}
              </div>
              <div className={styles.modalButton}>
                {download && <button>Download</button>}
              </div>
            </div>
          </div>
    )
}
export default Modal;