import React from 'react'

// Import components
import Card from '../../components/cards'

import { OfferType } from '../home'

type Props = {
    data: OfferType[]
}


const ListingHome:React.FC<Props> = ({ data }) => (
    <div className="listing">
        <ul>
            {data.map((d:OfferType) => (
                <li key={d.id}>
                    <Card data={d} />
                </li>
            ))}
        </ul>
    </div>
)

export default ListingHome
