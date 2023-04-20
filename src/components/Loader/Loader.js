import React, { useState, useEffect } from 'react'
import ModelSection from '../ModelSection/ModelSection';
import styles from '../Loader/Loader.module.css'
import gifTeste from '../../assets/gifs/glow.gif'

const Loader = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <ModelSection>
            {
                loading ?
                <div className={styles.loader}>
                    <div className={styles.block_animation}></div>
                </div>
                :
                <ModelSection>
                    {props.children}
                </ModelSection>
            }
        </ModelSection>
    )
}

export default Loader