import React from 'react';
import './FilteredButton.css';
import Bubble from '../Bubble/Bubble';

const FilterButton = ({ filter, button }) => {
  return (
    <div className='grid_filtered_button'>
      {
        button.map((button, i) => {
          return (
            <button key={i} className='filtered_button' onClick={() => filter(button)}>
              <Bubble customClass='small-desc' key={i}>
                <img src={`../public-images/techs/${button}.png`} alt=""></img>
              </Bubble>
            </button>
          )
        })
      }
    </div>
  )
}
export default FilterButton