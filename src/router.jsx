import React from 'react'
import {  BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

// Import tools
import * as ROUTES from './tools/routes'


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

const HomePage = () => (
    <h1>Home page</h1>
)

const ListingPage = () => (
    <h1>Listing</h1>
)

const AuthPage = () => (
    <h1>Auth</h1>
)

const CartPage = () => (
    <h1>Cart</h1>
)

const Footer = () => (
    <div className="main-footer">
        <h1>Footer</h1>
    </div>
)

const AppRouter= () => (
    <Router>
        <Navbar />

        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route path={ROUTES.LISTING_PAGE} component={ListingPage} />
            <Route path={ROUTES.CART_PAGE} component={CartPage} />

            <Route path={ROUTES.AUTH_PAGE} component={AuthPage} />
        </Switch>

        <Footer />
    </Router>
)

export default AppRouter
