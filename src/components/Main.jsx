import React from 'react'
import CarouselAlbum from './CarouselAlbum'
import Wrapper from './Wrapper'
import './Main.css'
import Results from './Results'

export default function Main({ trucksLength, isFirstRendered, isLoading }) {

    return (
        <main className="main">
            <Wrapper classes='main__content'>
                {
                    isFirstRendered ?
                        (<div>
                            <h1 className='main__title'>Bienvenido</h1>
                            <p>Busca una cancion</p>
                        </div>) :

                        isLoading ?
                            <p>Cargando...</p> :

                            trucksLength ?
                                <>
                                    <CarouselAlbum />
                                    <Results />
                                </> :
                                <p>No hay coincidencias...</p>
                }
            </Wrapper>
        </main>
    )
}