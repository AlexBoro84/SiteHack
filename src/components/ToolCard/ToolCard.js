import React from 'react'
import './ToolCard.css'

const ToolCard = ({image, toolName, clicked}) => {
    return (
        <>
            <div className='toolCard' onClick={clicked}>
                <div className='toolCard-content'>
                    <img src={image} alt='tool-img'/>
                    <h5>{toolName}</h5>    
                </div>
            </div>    
        </>
    )
}

export default ToolCard
