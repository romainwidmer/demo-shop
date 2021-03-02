import React from 'react'
import Slider from 'react-slick'

// import components
import { PrevArrow, NextArrow } from './arrows'


// This is only for demo
const IMAGES = [
    'https://picsum.photos/id/1/1920/1280',
    'https://picsum.photos/id/2/1920/1280',
    'https://picsum.photos/id/3/1920/1280',
    'https://picsum.photos/id/4/1920/1280'
]

export default function CustomCarousel() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return(
        <div className="carousel-offer-detail">
            <Slider {...settings}>
                {IMAGES.map((image, index) => (
                    <div className="img-wrapper" key={index}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
