import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import CarouselAlbumItem from './CarouselAlbumItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselAlbum.css'
import { AppContext } from '../context/AppContext';

export default function CarouselAlbum() {

    const { carouselItems } = React.useContext(AppContext)

    const items = carouselItems.map((item, idx) => (
        <div key={idx} className="item">
            <CarouselAlbumItem
                truckIndex={idx}
                albumMediumImage={item.albumMediumImage}
                albumBigImage={item.albumBigImage}
                artistName={item.artistName}
                artisXLImage={item.artisXLImage}
                albumTitle={item.albumTitle}
                artistFansNumber={item.artistFansNumber}
                artistDescription={item.artistDescription}
            />
        </div>
    ))

    return React.useMemo(() => {
        return (
            <OwlCarousel
                className='owl-theme'
                loop
                margin={10}
                dots
                responsive={{ 0: { items: 1 } }}
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                dotsClass='carousel-album__dots'
                dotClass='carousel-album__dot'
            >
                {items}
            </OwlCarousel>
        )
    }, [carouselItems])
}