import React, { useState } from 'react'
import styles from './Container.module.css'
import { BsMoon, BsSun } from 'react-icons/bs';

const Container = ({ children, customClass }) => {

  const [theme, setTheme] = useState(false);

  const toggle = () => {
    setTheme(!theme);
    console.log(theme);
    theme ? console.log('light'): console.log('dark');
  };


  return (
    <div>
      <div className={`${styles.container} ${theme ? styles.light : styles.dark} ${styles[customClass]}`}>
        {children}
      </div>
      <button className={styles.light_button} onClick={toggle} >
        {theme ? <BsSun/> : <BsMoon/>}
      </button>
    </div>
  )
}

export default Container