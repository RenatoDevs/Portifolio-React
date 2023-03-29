import React from 'react';
import './FilteredButton.css';

const FilterButton = ({ filter, button }) => {
  return (
    <div className='grid_filtered_button'>
      {
        button.map((button, i) => {
          return <button key={i} className='filtered_button' onClick={() => filter(button)}>{button}</button>
        })
      }
    </div>
  )
}

export default FilterButton