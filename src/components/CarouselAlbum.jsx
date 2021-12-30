import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import CarouselAlbumItem from './CarouselAlbumItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselAlbum.css'

export default function CarouselAlbum({ items }) {

    const _items = items.map((item, idx) => {
        return (
            <div key={idx} className="item">
                <CarouselAlbumItem
                    {...item}
                />
            </div>
        )
    })

    return (
        <div>
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
                {_items}
            </OwlCarousel>
        </div>
    )
}