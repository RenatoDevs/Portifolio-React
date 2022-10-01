import React from 'react'
import styles from './BoxGlass.module.css'

const BoxGlass = (props) => {
    return (
        <div className={`${styles.boxGlassContainer} ${styles[props.customClass]}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.box}`}>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BoxGlass
