import React from 'react'
import './PlayerTruckInfo.css'

export default function PlayerTruckInfo({
    titleShort,
    albumTitle,
    artistName,
    albumMediumImage
}) {
    return (
        <div className='player-truck'>
            <div className='player-truck__album'>
                <img
                    className='player-truck__album-image'
                    src={albumMediumImage}
                    alt={`${artistName} - ${albumTitle}`}
                />
            </div>
            <div>
                <h2 className='player-truck__title'>{titleShort}</h2>
            </div>
            <div>
                <p className='player-truck__name'>
                    {artistName} - {albumTitle}
                </p>
            </div>
        </div>
    )
}