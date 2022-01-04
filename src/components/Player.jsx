import React from 'react'
import Wrapper from './Wrapper'
import './Player.css'
import { AppContext } from '../context/AppContext'
import PlayerTruckInfo from './PlayerTruckInfo'
import PlayerButtons from './PlayerButtons'
import { PlayerContext } from '../context/PlayerContext'

export default function Player({ trucks, indexToPlay }) {

    const audioRef = React.useRef(null)
    const [isPlaying, setIsPlaying] = React.useState(true)

    const { setTruckIndexToPlay } = React.useContext(AppContext)

    const isReadyToPlay = trucks.length > 0 && indexToPlay >= 0
    const currentTruck = isReadyToPlay ? trucks[indexToPlay] : {}

    const handleNextClick = () => {
        if (isReadyToPlay) {
            if (indexToPlay < (trucks.length - 1)) {
                setTruckIndexToPlay(indexToPlay + 1)
                play()
            }
        }
    }

    const handlePrevClick = () => {
        if (isReadyToPlay) {
            if (indexToPlay > 0) {
                setTruckIndexToPlay(indexToPlay - 1)
                play()
            }
        }
    }

    const handlePlayToogle = () => {
        if (isPlaying) {
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    const play = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }
    }

    const handleEnded = () => {
        handleNextClick()
    }

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value
    }

    React.useEffect(() => {
        play()
    }, [indexToPlay])

    React.useEffect(() => {
        if (isReadyToPlay) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    return (
        <PlayerContext.Provider
            value={{
                handlePlayToogle,
                onPrevClick: handlePrevClick,
                onNextClick: handleNextClick,
                onVolumeChange: handleVolumeChange,
                isPlaying
            }}
        >
            <div className='player'>
                <Wrapper classes='player__content'>
                    {
                        isReadyToPlay ?
                            <>
                                <audio
                                    onEnded={handleEnded}
                                    autoPlay
                                    ref={audioRef}
                                    src={currentTruck.preview}
                                />
                                <PlayerButtons />
                                <PlayerTruckInfo
                                    albumTitle={currentTruck.albumTitle}
                                    artistName={currentTruck.artistName}
                                    titleShort={currentTruck.titleShort}
                                    albumMediumImage={currentTruck.albumMediumImage}
                                />
                            </> :
                            <div className='player__welcome'>
                                Busca algo para reproducir
                            </div>
                    }
                </Wrapper>
            </div>
        </PlayerContext.Provider>
    )
}