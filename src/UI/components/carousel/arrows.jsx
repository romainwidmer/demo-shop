import React from 'react'


/*
* Override the carousel left arrow
*/
export function PrevArrow(props) {
    const { onClick } = props

    return (
        <div className="arrow prev" onClick={onClick}>
            <i className="fal fa-chevron-left"></i>
        </div>
    )
}

/*
* Override the carousel right arrow
*/
export function NextArrow(props) {
    const { onClick } = props

    return (
        <div className="arrow next" onClick={onClick}>
            <i className="fal fa-chevron-right"></i>
        </div>
    )
}
