import styles from './Modal.module.css';
const Modal = ({ children, showModal, toggleModal, download }) => {

  const linkDownload = 'https://drive.google.com/u/0/uc?id=1VSOaTf1v2mJX_JQ1heekgDozCQqaAVxb&export=download';

  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ''}`} onClick={toggleModal}>
      <div className={styles.boxModal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBt} onClick={toggleModal}>X</button>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.modalButton}>
          {download && <a _blank href={linkDownload}>Download</a>}
        </div>
      </div>
    </div>
  )
}
export default Modal;