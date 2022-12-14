import React, { useState } from 'react'
import Title from '../../components/Title/TitlePage'
import Bubble from '../../components/Bubble/Bubble'
import ModelSection from '../../components/ModelSection/ModelSection'
import './Skills.css'
import TechsData from '../../data/TechsData'


const Skils = () => {

  const [techsItem, setTechsItem] = useState(TechsData);

  return (
    <ModelSection id='skills' customClass='column'>
      <div className='skils-container'>
        <div data-aos="flip-up">
          <Title name='skils'  />
        </div>

        <div className='grid-skils-container' data-aos="zoom-out">
          {
            techsItem.map((item, i) => {
              return (
                <Bubble
                  key={i}
                  customClass='large' >
                  <img src={`../public-images/techs/${item.name}.png`} alt=""></img>
                </Bubble>
              )
            })
          }
        </div>
      </div>
    </ModelSection>
  )
}

export default Skils