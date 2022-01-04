import React from 'react'
import './PlayerButtons.css'
import PlayerNavitagionButton from './PlayerNavitagionButton'
import PlayerPlayButton from './PlayerPlayButton'
import PlayerVolumeButton from './PlayerVolumeButton'

export default function PlayerButtons() {
    return (
        <div className='player-buttons'>
            <div className='player-buttons__mid-buttons'>
                <PlayerNavitagionButton />
                <PlayerPlayButton />
                <PlayerNavitagionButton isNextButton />
            </div>
            <PlayerVolumeButton />
        </div>
    )
}