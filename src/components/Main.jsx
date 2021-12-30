import React from 'react'
import CarouselAlbum from './CarouselAlbum'
import Wrapper from './Wrapper'
import { getArtistById } from '../api/search'
import CarouselAlbumItem from '../dto/CarouselAlbumItem'
import './Main.css'

export default function Main({ trucks }) {
    const [dataForCarouselAlbum, setDataForCarouselAlbum] = React.useState([])

    React.useEffect(() => {
        const prepareDataForCarouselAlbum = async () => {
            //solo los 3 primeros album
            const carouselItems = []
            const trucksSlice = trucks.slice(0, 3)
            for (let i = 0; i < trucksSlice.length; i++) {
                const artist = await getArtistById(trucksSlice[i].artist.id)
                //no encontro el objeto de donde sale la informacion biografica del artista. sorry :C
                const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
                carouselItems.push(
                    new CarouselAlbumItem(
                        trucksSlice[i].album.cover_medium,
                        trucksSlice[i].album.cover_big,
                        trucksSlice[i].artist.name,
                        trucksSlice[i].artist.picture_xl,
                        trucksSlice[i].album.title,
                        artist.nb_fan,
                        description
                    )
                )
            }
            setDataForCarouselAlbum(carouselItems)
        }
        prepareDataForCarouselAlbum()
    }, [trucks])



    return (
        <main className="main">
            <Wrapper>
                <CarouselAlbum items={dataForCarouselAlbum} />
            </Wrapper>
        </main>
    )
}