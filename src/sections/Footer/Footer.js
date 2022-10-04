import React from 'react'
import './Footer.css';
import SocialButtons from '../../components/SocialButtons/SocialButtons';

const Footer = () => {
  return (
    <footer>
      <div className='grid-footer'>
        <div className='box-logo'>
          <span>RS</span>
        </div>
        <div className='copy'>
          <span>&copy; Desenvolvido por Renato dos Santos <span className='emoji'>❤</span></span>
        </div>
        <SocialButtons />
      </div>
    </footer>
  )
}

export default Footer;