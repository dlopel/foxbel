import React from "react"
import FoxBelImg from '../images/foxbel-music.png'
import './Logo.css'

export default function Logo() {
    return (
        <div className="logo">
            <img className="logo__image" src={FoxBelImg} alt="foxbel music mp3 gratis" />
        </div>
    )
}