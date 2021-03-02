import React from 'react'
import { Link } from 'react-router-dom'

// Import tools
import { HOME_PAGE } from '../../../tools/routes'


const PageNotFound = () => (
    <div className="error-page">
        <div className='banner not-found'>
            <div className="box">
                <h2>4<span className="zero"></span>4</h2>
            </div>
        </div>

        <div className="container">
            <h1>Oups, une erreur s'est glissée !</h1>

            <div className="actions">
                <h2>Découvrez les offres</h2>
                <div className="action">
                    <Link to={HOME_PAGE} className="button blue-grey">
                        <label>Découvrir</label>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default PageNotFound
