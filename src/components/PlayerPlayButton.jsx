import React from 'react'
import './PlayerPlayButton.css'
import { PlayerContext } from '../context/PlayerContext'

export default function PlayerPlayButton() {

    const { handlePlayToogle, isPlaying } = React.useContext(PlayerContext)

    const handleClick = () => {
        handlePlayToogle()
    }

    return (
        <button className='play-button' onClick={handleClick}>
            {isPlaying ?
                <i className="fas fa-play"></i> :
                <i class="fas fa-stop"></i>}
        </button>
    )
}