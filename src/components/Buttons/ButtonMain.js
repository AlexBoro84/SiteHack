import React from 'react'
import './ButtonMain.css'

const ButtonMain = ({btn_style, children, clickEvent}) => {
    return (
        <button className={btn_style} onClick={clickEvent}>
            {children}
        </button>
    )
}

export default ButtonMain
