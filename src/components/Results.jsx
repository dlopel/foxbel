import React from 'react'
import { AppContext } from '../context/AppContext'
import './Results.css'
import ResultsItem from './ResultsItem'

export default function Results() {

    const { resultItems } = React.useContext(AppContext)
    
    const items = resultItems.map((album, idx) => (
        <ResultsItem
            key={idx}
            truckIndex={idx}
            albumMediumImage={album.albumMediumImage}
            albumTitle={album.albumTitle}
            artistName={album.artistName}
        />
    ))

    return (
        <section className='results'>
            <h2 className='results__title'>Resultados</h2>
            <div className='results__content'>
                {items}
            </div>
        </section>
    )
}
