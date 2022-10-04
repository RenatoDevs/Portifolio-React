import React from 'react';

import './FilteredButton.css'

const FilterButton = ({ filter, button }) => {
  return (
    <div className='grid-filtered-button'
    data-aos="zoom-in-up">
      {
        button.map((button, i) => {
          return <div key={i} className='filtered-button' onClick={() => filter(button)}>{button}</div>
        })
      }

    </div>
  )
}

export default FilterButton