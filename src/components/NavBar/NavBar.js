import React, { useEffect, useState } from 'react'
import { IoChatboxOutline, IoDesktopOutline, IoHomeOutline, IoPersonOutline, IoPlanetOutline, IoSchoolOutline } from 'react-icons/io5';
import { BsFillSunFill, BsSun } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import styles from './NavBar.module.css'

const NavBar = ({ toggle }) => {

  return (
    <div className={styles.nav}>
      <div className={`${styles.navigation} `}>
        <ul >
          <li className={styles.home}>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoHomeOutline /></Bubble></span>
              <span className={styles.text}>Home</span>
            </NavLink>
          </li>
          <li className={styles.about}>
            <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoPersonOutline /></Bubble></span>
              <span className={styles.text}>Sobre</span>
            </NavLink>
          </li>

          <li className={styles.Formation}>
            <NavLink to='/Formation' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>Formação</span>
            </NavLink>
          </li>
          <li className={styles.project}>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoDesktopOutline /></Bubble></span>
              <span className={styles.text}>Projetos</span>
            </NavLink>
          </li>
          <li className={styles.contact}>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoChatboxOutline /></Bubble></span>
              <span className={styles.text}>Contato</span>
            </NavLink>
          </li>
        </ul>
      </div >
    </div>
  )
}

export default NavBar;