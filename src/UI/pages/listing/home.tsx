import React from 'react'

// Import components
import Card from '../../components/cards'

// Import tools
import { OfferType } from '../../../tools/types'


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
