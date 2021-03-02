import React from 'react'

// Import components
import Card from '../../components/cards'


const ListingHome = ({ data }) => (
    <div className="listing">
        <ul>
            {data.map(d => (
                <li key={d.id}>
                    <Card data={d} />
                </li>
            ))}
        </ul>
    </div>
)

export default ListingHome
