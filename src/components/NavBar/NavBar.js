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
              <span className={styles.text}>About</span>
            </NavLink>
          </li>

          <li className={styles.Formation}>
            <NavLink to='/Formation' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>Formation</span>
            </NavLink>
          </li>
          {/* <li className={styles.skills}>
            <NavLink to='/skills' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoPlanetOutline /></Bubble></span>
              <span className={styles.text}>Skills</span>
            </NavLink>
          </li> */}
          {/* <li className={styles.formation}>
            <NavLink to='/formation' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>Formation</span>
            </NavLink>
          </li> */}
          <li className={styles.project}>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoDesktopOutline /></Bubble></span>
              <span className={styles.text}>Project</span>
            </NavLink>
          </li>
          <li className={styles.contact}>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoChatboxOutline /></Bubble></span>
              <span className={styles.text}>Contact</span>
            </NavLink>
          </li>
          {/* <li className={styles.curriculo}>
            <NavLink to='/cv' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu-padding'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>CV</span>
            </NavLink>
          </li> */}
        </ul>

      </div >
    </div>
  )
}

export default NavBar;