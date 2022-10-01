import React from 'react'

import './HomeName.css'
import foto from "../../assets/img/eu2.png"
import SocialButtons from '../SocialButtons/SocialButtons'

const InitialName = () => {
  return (
    <div className='home-name'>
      <img className='eu' src={foto} alt='#'></img>
      <div className='box-name'>
        <div data-text="Hi i'm" className='first-name'>
          <span>r</span>
          <span>e</span>
          <span>n</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
        </div>
        <div className='last-name'>
          <span>S</span>
          <span>a</span>
          <span>n</span>
          <span>t</span>
          <span>o</span>
          <span>S</span>
        </div>
        <div className='job'>
          <span>Front End Developer</span>
        </div>
      </div>


    </div>
  )
}

export default InitialName;