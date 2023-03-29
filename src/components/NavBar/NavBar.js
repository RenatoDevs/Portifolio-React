import React from 'react'
import { IoChatboxOutline, IoDesktopOutline, IoHomeOutline, IoPersonOutline, IoPlanetOutline, IoSchoolOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <div className={styles.nav}>
      <div className={styles.navigation}>
        <ul >
          <li className={styles.home}>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoHomeOutline /></Bubble></span>
              <span className={styles.text}>Home</span>
            </NavLink>
          </li>
          <li className={styles.about}>
            <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoPersonOutline /></Bubble></span>
              <span className={styles.text}>About</span>
            </NavLink>
          </li>
          
          <li className={styles.skills}>
            <NavLink to='/skills' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoPlanetOutline /></Bubble></span>
              <span className={styles.text}>Skills</span>
            </NavLink>
          </li>
          <li className={styles.formation}>
            <NavLink to='/formation' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>Formation</span>
            </NavLink>
          </li>
          <li className={styles.project}>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoDesktopOutline /></Bubble></span>
              <span className={styles.text}>Project</span>
            </NavLink>
          </li>
          <li className={styles.contact}>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoChatboxOutline /></Bubble></span>
              <span className={styles.text}>Contact</span>
            </NavLink>
          </li>
          {/* <li className={styles.curriculo}>
            <NavLink to='/cv' className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.icon}><Bubble customClass='small-menu'><IoSchoolOutline /></Bubble></span>
              <span className={styles.text}>CV</span>
            </NavLink>
          </li> */}
        </ul>

      </div >
    </div>
  )
}

export default NavBar;