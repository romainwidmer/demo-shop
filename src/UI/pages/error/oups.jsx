import React from 'react'
import { Link } from 'react-router-dom'

// Import tools
import { HOME_PAGE } from '../../../tools/routes'


const Oups = ({ message }) => (
    <div className="oups container">
        <h1>{ message ? message : `Oups, une erreur s'est glissée !` }</h1>

        <div className="actions">
            <h2>Découvrez les offres</h2>
            <div className="action">
                <Link to={HOME_PAGE} className="button blue-grey">
                    <label>Découvrir</label>
                </Link>
            </div>
        </div>
    </div>
)

export default Oups
