import React from 'react'
import Wrapper from './Wrapper'
import './Player.css'
import { AppContext } from '../context/AppContext'

export default function Player({ trucks, indexToPlay }) {

    const audioRef = React.useRef(null)
    const [isPlaying, setIsPlaying] = React.useState(true)

    const { setTruckIndexToPlay } = React.useContext(AppContext)

    const isReadyToPlay = trucks.length > 0 && indexToPlay >= 0
    const currentTruck = isReadyToPlay && trucks[indexToPlay]

    const handleNextClick = () => {
        if (isReadyToPlay) {
            if (indexToPlay < (trucks.length - 1)) {
                setTruckIndexToPlay(indexToPlay + 1)
            }
        }
    }

    const handlePrevClick = () => {
        if (isReadyToPlay) {
            if (indexToPlay > 0) {
                setTruckIndexToPlay(indexToPlay - 1)
            }
        }
    }

    const handlePlayStopClick = () => {
        if (isPlaying) {
            // isPlaying.current = false
            setIsPlaying(false)
            audioRef.current.pause()
        } else {
            // isPlaying.current = true
            setIsPlaying(true)
            audioRef.current.play()
        }
    }

    const handleEnded = () => {
        handleNextClick()
    }

    const handleVolumeChange = (e) => {
        console.log(e.target.value)
        audioRef.current.volume = e.target.value
    }

    return (
        <div className='player'>
            <Wrapper classes='player__wrapper'>
                {
                    isReadyToPlay ?
                        <div className='player__content'>
                            <audio
                                className='player__audio'
                                onEnded={handleEnded}
                                autoPlay
                                ref={audioRef}
                                src={currentTruck.preview}
                            ></audio>
                            <div className='player__album-image-container'>
                                <img
                                    className='player__album-image'
                                    src={currentTruck.albumMediumImage}
                                    alt={`${currentTruck.artistName} - ${currentTruck.albumTitle}`}
                                />
                            </div>
                            <div className='player__buttons'>
                                <button className='player__button' onClick={handlePrevClick}>
                                    <i className="fas fa-step-backward"></i>
                                </button>
                                <button className='player__play-button' onClick={handlePlayStopClick}>
                                    {isPlaying ?
                                        <i className="fas fa-play"></i> :
                                        <i class="fas fa-stop"></i>}
                                </button>
                                <button className='player__button' onClick={handleNextClick}>
                                    <i className="fas fa-step-forward"></i>
                                </button>
                                <span className='player__volumen'>
                                    <span className='player__volumen-icon'>
                                        <i className="fas fa-volume-off"></i>
                                    </span>
                                    <input
                                        className='player__volumen-range'
                                        type="range"
                                        id="vol"
                                        max="1"
                                        min="0"
                                        step="0.01"
                                        onChange={handleVolumeChange}
                                    />
                                </span>
                            </div>
                            <div className='player__truck'>
                                <div>
                                    <h2 className='player__truck-title'>{currentTruck.titleShort}</h2>
                                </div>
                                <div>
                                    <p className='player__truck-artist-album'>
                                        {currentTruck.artistName} - {currentTruck.albumTitle}
                                    </p>
                                </div>
                            </div>
                        </div> :
                        <div className='player__welcome-text'>
                            Busca algo para reproducir
                        </div>
                }
            </Wrapper>
        </div>
    )
}