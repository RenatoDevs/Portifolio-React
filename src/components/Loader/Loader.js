import React, { useState, useEffect } from 'react'
import ModelSection from '../ModelSection/ModelSection';
import '../Loader/Loader.css'
import light_gif from '../../assets/gifs/light.gif'
import dark_gif from '../../assets/gifs/dark.gif'

const Loader = ({children}) => {
    
    let getGifTheme = localStorage.getItem('theme')

    let convert = true;
  if (getGifTheme === 'true' && '') {
    convert = true
  } else if(getGifTheme === 'false') {
    convert = false
  }

    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(convert);

    useEffect(()=>{
        console.log('mudou')
    },[getGifTheme])
    
    
    useEffect(() => {
        setTheme(convert)
        console.log(convert)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])


    return (
        <ModelSection customClass='flex-start'>
            {
                loading ?
                    <div className='loader'>
                        {
                            theme
                                ?
                                <img src={light_gif} alt="gif" />
                                :

                                <img src={dark_gif} alt="gif" />
                        }
                    </div>
                    :
                    <ModelSection customClass='flex-start'>
                        {children}
                    </ModelSection>
            }
        </ModelSection>
    )
}

export default Loader