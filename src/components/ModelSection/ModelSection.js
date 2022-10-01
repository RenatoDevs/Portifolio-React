import React from 'react'
import Container from '../Container/Container'
import './ModelSection.css'

const ModelSection = ({ children, id }) => {
    return (
        <div id={id} className='model-section-container'>
            {children}
        </div>
    )
}

export default ModelSection