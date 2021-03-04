import React from 'react'

// Import components
import { HomeLink } from '../../components/buttons'

type Props = {
    message: string
}

export const FetchError:React.FC<Props> = ({ message }) => (
    <div className="error-container fetch-error">
        <p>{ message }</p>
    </div>
)

export const PageNotFound:React.FC = () => (
    <div className="error-page not-found">
        <div className='banner'>
            <div className="box">
                <h2>4<span className="zero"></span>4</h2>
            </div>
        </div>

        <section className="error-container oups container">
            <h1>La page demandée n'existe pas</h1>

            <div className="actions">
                <h2>Découvrez les offres</h2>
                <div className="action">
                    <HomeLink />
                </div>
            </div>
        </section>
    </div>
)
