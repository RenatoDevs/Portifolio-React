import React from 'react'
import { IoChatboxOutline, IoDesktopOutline, IoHomeOutline, IoPersonOutline, IoPlanetOutline, IoSchool, IoSchoolOutline } from 'react-icons/io5';
import Bubble from '../Bubble/Bubble';
import './NavBar.css'

const NavBar = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav .container ul li");
  const list = document.querySelectorAll('.list');


  // window.addEventListener("scroll", () => {
  //   let current = "";
  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.clientHeight;
  //     const windowTop = document.documentElement.scrollTop;
  //     if (scrollY >= sectionTop - sectionHeight / 3) {
  //       current = section.getAttribute("id");
  //     }
  //   });

  //   list.forEach((li) => {
  //     li.classList.remove("active");
  //     if (li.classList.contains(current)) {
  //       li.classList.add("active");
  //     }

  //   });
  // });

  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) => item.addEventListener('click', activeLink))


  return (
    <div className="navigation">
      <ul>
        <li className="home list active">
          <a href="#home">
            <span className="icon"><Bubble customClass='small-menu'><IoHomeOutline /></Bubble></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="about-me list">
          <a href="#about-me">
            <span className="icon"><Bubble customClass='small-menu'><IoPersonOutline /></Bubble></span>
            <span className="text">About</span>
          </a>
        </li>
        <li className="formation list">
          <a href="#formation">
            <span className="icon"><Bubble customClass='small-menu'><IoSchoolOutline/></Bubble></span>
            <span className="text">Formation</span>
          </a>
        </li>
        <li className="skills list">
          <a href="#skills">
            <span className="icon"><Bubble customClass='small-menu'><IoPlanetOutline /></Bubble></span>
            <span className="text">Skills</span>
          </a>
        </li>
        <li className="project list">
          <a href="#project">
            <span className="icon"><Bubble customClass='small-menu'><IoDesktopOutline /></Bubble></span>
            <span className="text">Project</span>
          </a>
        </li>
        <li className="contact list">
          <a href="#contact">
            <span className="icon"><Bubble customClass='small-menu'><IoChatboxOutline /></Bubble></span>
            <span className="text">Contact</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>

    </div>
  )
}

export default NavBar;