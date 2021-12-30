import React from 'react'
import './MainHeaderIcon.css'

export default function MainHeaderIcon({ children, onClick }) {
    const handleClickOpen = () => { onClick() }
    return (
        <a className='main-header-icon' role="button" rel="nofollow" onClick={handleClickOpen}>
            {children}
        </a>
    )
}