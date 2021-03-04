import React from 'react'

// Import components
import { HomeLink } from '../../components/buttons'

type Props = {
    message?: string
}

const Oups:React.FC<Props> = ({ message }) => (
    <section className="error-container oups container">
        <h1>{ message ? message : `Oups, une erreur s'est glissée !` }</h1>

        <div className="actions">
            <h2>Découvrez les offres</h2>
            <div className="action">
                <HomeLink />
            </div>
        </div>
    </section>
)

export default Oups
