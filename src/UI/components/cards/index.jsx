import React from 'react'
import { Link } from 'react-router-dom'

// Import tools
import { CURRENCY } from '../../../tools/helpers'


const Card = ({ data }) => {
    const { id, title, price } = data

    return(
        <div className="offer-card">
            <Link to={`/offer/${id}`}>
                <div className="card-wrapper">
                    <div className="img-box">
                        <img src={`https://picsum.photos/id/${id}/1920/1280`} alt="" />
                    </div>
                    <div className="price">
                        <span>Dès { CURRENCY }</span>
                        <span>{ price }.-</span>
                    </div>
                    <footer>
                        <h3>{ title }</h3>
                    </footer>
                </div>
            </Link>
        </div>
    )
}

export default Card
