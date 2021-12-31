import React from 'react'
import { AppContext } from '../context/AppContext'
import './ResultsItem.css'

export default function ResultsItem({
    truckIndex,
    albumMediumImage,
    artistName,
    albumTitle
}) {

    const { setTruckIndexToPlay } = React.useContext(AppContext)

    const handlePlayClick = (e, truckIndex) => {
        setTruckIndexToPlay(truckIndex)
    }

    return (
        <article className='results-item'>
            <header className='results-item__image-container'>
                <a role='button' rel="nofollow" onClick={e => handlePlayClick(e, truckIndex)}>
                    <img
                        className='results-item__image'
                        src={albumMediumImage}
                        alt={albumTitle} />
                </a>
            </header>
            <h3 className='results-item__album-title'>{albumTitle}</h3>
            <p className='results-item__artist-name'>{artistName}</p>
        </article>
    )
}