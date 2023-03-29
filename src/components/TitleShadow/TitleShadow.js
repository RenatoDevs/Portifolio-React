import React from 'react'
import styles from "./TitleShadow.module.css"

const TitleShadow = (props) => {
  return (
    <span className={`${styles.titleShadow} ${styles[props.customClass]}`}>{props.title}</span>
  )
}

export default TitleShadow