import React from 'react'
import Container from '../Container/Container'
import './ScrollWrapper.css'

const ScrollWrapper = ({ children }) => {
  return (
    <div className='wrapper-container'>{children}</div>
  )
}

export default ScrollWrapper