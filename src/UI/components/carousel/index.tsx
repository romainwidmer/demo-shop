import React from 'react'
import Slider from 'react-slick'

// import components
import { PrevArrow, NextArrow } from './arrows'


// This is only for demo
const IMAGES = [
    'https://picsum.photos/id/110/1920/1280',
    'https://picsum.photos/id/111/1920/1280',
    'https://picsum.photos/id/112/1920/1280',
    'https://picsum.photos/id/113/1920/1280'
]


const CustomCarousel:React.FC = () => {
    const settings = {
        className: "center",
        centerMode: true,
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

export default CustomCarousel
