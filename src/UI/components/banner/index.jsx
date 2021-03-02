import React from 'react'


const Banner = ({ title, componentName }) => {
    const url = 'https://picsum.photos/1920/1280'

    return(
        <div className={`banner ${componentName}`}>
            <img src={url} alt="banner-img" />
            <h1 className="main title">{title}</h1>
        </div>
    )
}

export default Banner
