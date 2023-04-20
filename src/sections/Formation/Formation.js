import React, { useEffect, useState } from 'react'
import BoxGlass from '../../components/BoxGlass/BoxGlass'
import Title from '../../components/Title/TitlePage'
import './Formation.css'
import FormationData from '../../data/FormationData'

import { IconName, IoSchool } from "react-icons/io5";
import ModelSection from '../../components/ModelSection/ModelSection'
import Loader from '../../components/Loader/Loader'

const Formation = () => {

    const [formationItem, setFormationItme] = useState(FormationData);

    return (
        <Loader>
            <ModelSection id='formation'>
                <div className='formation-container'>
                    <div className='formation-title'>
                        <Title name='Formation' />
                    </div>
                    <div className='grid-formation'>
                        <div>
                            {
                                formationItem.map((item, i) => {
                                    return (
                                        <div className='formation-item' key={i}>
                                            <span className='timeline-formation'>
                                                <span className='timeline-formation-ball'></span>
                                            </span>
                                            <BoxGlass customClass='fullWidth'>
                                                <div className='content'>
                                                    <div className='formation-date'>
                                                        <p className='formation-icon' src='#' alt='C'>{<IoSchool />}</p>
                                                        <p className='formation-date'>{item.date}</p>
                                                    </div>
                                                    <p className='formation-name'>{item.name}</p>
                                                    <p className='formation-college'>{item.college}</p>
                                                </div>
                                            </BoxGlass>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </ModelSection>
        </Loader>
    )
}

export default Formation