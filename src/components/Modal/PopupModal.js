import React from 'react'
import './PopupModal.css'
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById( 'modal' );

const PopupModal = ({open, children, onClose}) => {

    if (!open) return null

    return  createPortal(
        <>
            <div className='popupModal_Overlay' onClick={onClose}/>
            <div>
                <div className='popupModal_Content'>
                    <button className='close' onClick={onClose}><i class="fas fa-times"></i></button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

const mapStateToProps = (state) => ({
    emailInfo: state.emailCheck  
})


export default PopupModal
