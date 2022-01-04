import React from 'react'
import './PlayerVolumeButton.css'
import { PlayerContext } from '../context/PlayerContext'

export default function PlayerVolumeButton() {

    const { onVolumeChange } = React.useContext(PlayerContext)
    const handleVolumeChange = (e) => {
        onVolumeChange(e)
    }

    return (
        <span className='player-volumen'>
            <input
                className='player-volumen__range'
                type="range"
                id="vol"
                max="1"
                min="0"
                step="0.01"
                onChange={handleVolumeChange}
            />
            <span className='player-volumen__icon'>
                <i className="fas fa-volume-off"></i>
            </span>
        </span>
    )
}