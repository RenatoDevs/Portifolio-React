import React from 'react'
import styles from "./SocialButtons.module.css"
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
const SocialButtons = (props) => {


    return (

        <div className={styles.gridSocialButtons}>
            <ul className={` ${styles[props.customClass]}`}>
                <li>
                    <a href="https://www.linkedin.com/in/renato-santos-693568127/">
                        <IoLogoLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RenatoDevs">
                        <IoLogoGithub />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoMail />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialButtons;