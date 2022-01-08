import './Results.css'
import React from 'react'
import { AppContext } from '../context/AppContext'
import ResultsItem from './ResultsItem'
import LazyLoad from 'react-lazyload'

export default function Results() {

    const { resultItems } = React.useContext(AppContext)

    const items = resultItems.map((album, idx) => (
        <LazyLoad
            key={idx}
            once
            height={'100%'}
            throttle={300}
            style={{ height: '100%' }}
        >
            <ResultsItem
                truckIndex={idx}
                albumMediumImage={album.albumMediumImage}
                albumTitle={album.albumTitle}
                artistName={album.artistName}
            />
        </LazyLoad>
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
