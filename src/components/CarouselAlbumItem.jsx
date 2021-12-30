import React from 'react'
import Button from './Button'
import './CarouselAlbumItem.css'

export default function CarouselAlbumItem(
    {
        albumMediumImage,
        albumBigImage,
        artistTitle,
        artisXLImage,
        albumTitle,
        artistFansNumber,
        artistDescription
    }
) {
    return (
        <div className='album-item'>
            <div className='album-item__image-container'>
                <picture>
                    <source media="(max-width: 1023px)" srcSet={albumBigImage} />
                    <img className='album-item__image' src={albumMediumImage} alt={albumTitle} />
                </picture>
                <div className='album-item__image-icon-container'>
                    <i className='fas fa-play'></i>
                </div>
            </div>
            <div className='album-item__content'>
                <img className='album-item__content-image' src={artisXLImage} alt={artistTitle} />
                <div>
                    <h2 className='album-item__title'>{artistTitle}{' '}{albumTitle}</h2>
                    <p className='album-item__title-desc'>Lo mejor de {artistTitle} <span className='album-item__fans'>{artistFansNumber}</span></p>

                    {/* No encontre el endpoint de la api deezer en donde envia la informacion biografica del artista */}
                    <p className='album-item__description'>{artistDescription}</p>
                </div>
                <div className='album-item__buttons'>
                    <Button value='Reproducir' />
                    <Button value='Seguir' isSecondary />
                </div>
            </div>
        </div>
    )
}