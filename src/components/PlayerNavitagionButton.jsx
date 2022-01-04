import React from 'react'
import './PlayerNavigationButton.css'
import { PlayerContext } from '../context/PlayerContext'

export default function PlayerNavitagionButton({ isNextButton }) {

    const { onPrevClick, onNextClick, play } = React.useContext(PlayerContext)

    const handleClick = () => {
        if (isNextButton) { 
            onNextClick()
        } else {
            onPrevClick()
        }
        play()
    }

    return (
        <button className='player-nav-button' onClick={handleClick}>
            {isNextButton ?
                <i className="fas fa-step-forward"></i> :
                <i className="fas fa-step-backward"></i>}
        </button>
    )
}



