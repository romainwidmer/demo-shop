import React from 'react'

// Import components
import { HomeLink } from '../buttons'


const EmptyCart = () => (
    <div>
        <h1>Le panier est vide !!</h1>

        <div className="action">
                <HomeLink />
            </div>
    </div>
)

export default EmptyCart
