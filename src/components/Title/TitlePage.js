import React from 'react';

import './TitlePage.css'

const Title = ({name}) => {
  return (
    <div>
        <h1 data-title={name} className='title-page'>{name}</h1>
    </div>
  )
}

export default Title