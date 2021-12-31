import React from 'react'
import Button from './Button'
import './CarouselAlbumItem.css'
import { AppContext } from '../context/AppContext'

export default function CarouselAlbumItem(
    {
        truckIndex,
        albumMediumImage,
        albumBigImage,
        artistName,
        artisXLImage,
        albumTitle,
        artistFansNumber,
        artistDescription
    }
) {

    const { setTruckIndexToPlay } = React.useContext(AppContext)

    const handleSetTruckIndex = (e, idx) => {
        setTruckIndexToPlay(idx)
    }

    return (
        <div className='album-item'>
            <div
                className='album-item__image-container'
                onClick={(e) => handleSetTruckIndex(e, truckIndex)}
            >
                <picture>
                    <source media="(max-width: 1023px)" srcSet={albumBigImage} />
                    <img className='album-item__image' src={albumMediumImage} alt={albumTitle} />
                </picture>
                <div className='album-item__image-icon-container'>
                    <i className='fas fa-play'></i>
                </div>
            </div>
            <div className='album-item__content'>
                <img className='album-item__content-image' src={artisXLImage} alt={artistName} />
                <div>
                    <h2 className='album-item__title'>{artistName}{' '}{albumTitle}</h2>
                    <p className='album-item__title-desc'>Lo mejor de {artistName} - <span className='album-item__fans'>{artistFansNumber} seguridores</span></p>
                    <p className='album-item__description'>{artistDescription}</p>
                </div>
                <div className='album-item__buttons'>
                    <Button value='Reproducir' onClick={(e) => handleSetTruckIndex(e, truckIndex)}/>
                    <Button value='Seguir' isSecondary />
                </div>
            </div>
        </div>
    )
}