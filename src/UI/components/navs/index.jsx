import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => (
    <div className="main-nav">
        <h1>Navbar</h1>
        <ul>
            <li><NavLink to={ROUTES.HOME_PAGE}>Home</NavLink></li>
            <li><NavLink to={ROUTES.LISTING_PAGE}>Listing</NavLink></li>
            <li><NavLink to={ROUTES.CART_PAGE}>Cart</NavLink></li>
        </ul>
    </div>
)

export default Navbar
