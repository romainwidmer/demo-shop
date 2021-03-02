import React from 'react'

// Import components
import Card from '../cards'


const ListingBlock = ({ offers }) => (
    <section>
        {offers.length > 0 ? (
            <ul className="listing-items">
                {offers.map(offer => (
                    <li key={offer.id}>
                        <Card data={offer} />
                    </li>
                ))}
            </ul>
            ) : <p className="center">Aucune offre ne correspond aux critères sélectionnés. Regardez toutefois dans les autres onglets.</p>
        }
    </section>
)

export default ListingBlock
