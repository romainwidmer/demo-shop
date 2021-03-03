import React from 'react'

// Import components
import Card, { OfferType } from '../cards'


type OffersType = {
    offers: OfferType[]
}


const ListingBlock:React.FC<OffersType> = ({ offers }) => (
    <section>
        {offers.length > 0 ? (
            <ul className="listing-items">
                {offers.map((offer: OfferType) => (
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
