import React from 'react'
import Bubble from '../../components/Bubble/Bubble'
import BoxGlass from '../../components/BoxGlass/BoxGlass'
import './MenuItem.css';

const MenuItem = ({ menuItem }) => {
    return (
        <div className='grid-item'>
            {
                menuItem.map((item, i) => {
                    return (
                        <BoxGlass key={i}>
                            <div className='item' >
                                <span></span>
                                <img src={`../public-images/capas/${item.img}.png`} alt=""></img>
                                <div className='item-description'>
                                    <div className='title-container'>
                                        <h2 className='project-title'>{item.title}</h2>
                                        <div className='bubble-container'>
                                            <Bubble customClass='small'>
                                                <img src={`../public-images/techs/${item.tech1}.png`} alt=""></img>
                                            </Bubble>
                                            <Bubble customClass='small'>
                                                <img src={`../public-images/techs/${item.tech2}.png`} alt=""></img>
                                            </Bubble>
                                            <Bubble customClass='small'>
                                                <img src={`../public-images/techs/${item.tech3}.png`} alt=""></img>
                                            </Bubble>
                                        </div>
                                    </div>
                                    <p className='resume'>{item.description}</p>
                                    <div className='item-button'>
                                        <a href={`https://${item.linkPage}.netlify.app/`} target="_blank" rel="noreferrer"> Ver Pagina</a>
                                        <a href={`https://${item.linkRepo}.netlify.app/`} target="_blank" rel="noreferrer"> Repositório</a>
                                    </div>
                                </div>
                            </div>
                        </BoxGlass>                      
                    )
                })
            }
        </div>
    )
}

export default MenuItem