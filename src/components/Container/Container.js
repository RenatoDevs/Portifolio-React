import React, { useEffect, useState } from 'react'
import styles from './Container.module.css'
import { BsMoon, BsSun } from 'react-icons/bs';
import Loader from '../Loader/Loader';

const Container = ({ children, customClass }) => {
  let getTheme = localStorage.getItem('theme');

  let convert = true;
  if (getTheme === 'true' && '') {
    convert = true
  } else if(getTheme === 'false') {
    convert = false
  }

  const [theme, setTheme] = useState(convert);


  const toggle = () => {
    setTheme(!theme)
  }
  useEffect(()=>{
    localStorage.setItem('theme', theme)
  },[theme])

  useEffect(() => {
    setTheme(convert)
    console.log(convert)
  }, [])

  return (
    <div>
      <div className={`${styles.container} ${theme ? styles.light : styles.dark} ${styles[customClass]}`}>
        {children}
      </div>

      <button className={styles.light_button} onClick={toggle} >
        {theme ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  )
}

export default Container