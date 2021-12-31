import React from 'react'
import './Button.css'

export default function Button({ value, isSecondary, onClick }) {
    const classes = isSecondary ? 'button_theme_secondary' : ''

    const handleClick = () => {
        onClick()
    }

    return (
        <button onClick={handleClick} className={`button ${classes}`}>
            {value}
        </button>
    )
}