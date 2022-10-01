import React from 'react'
import "./SocialButtons.css"

const SocialButtons = () => {
    const social = [
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/renato-santos-693568127/'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/RenatoDevs'
        },
    ]

    return (

        <div className='grid-social-buttons'>
            {
                social.map((bt, i) => (
                    <a className='bt-social' key={i} href={bt.link} target="_blank" rel="noreferrer">
                        <p className='bt-name'>{bt.name}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default SocialButtons;