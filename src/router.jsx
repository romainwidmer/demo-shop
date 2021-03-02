import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import tools
import * as ROUTES from './tools/routes'

// Import components
import Navbar from './UI/components/navs'
import AuthPage from './UI/pages/auth'
import CartPage from './UI/pages/cart'
import HomePage from './UI/pages/home'
import ListingPage from './UI/pages/listing'
import OfferDetail from './UI/pages/offer'
import Footer from './UI/components/footer'
import PageNotFound from './UI/pages/error/notFound'


const AppRouter= () => (
    <Router>
        <Navbar />

        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route path={ROUTES.LISTING_PAGE} component={ListingPage} />
            <Route path={ROUTES.OFFER_DETAIL_PAGE} component={OfferDetail} />
            <Route path={ROUTES.CART_PAGE} component={CartPage} />

            <Route path={ROUTES.AUTH_PAGE} component={AuthPage} />

            <Route component={PageNotFound} />
        </Switch>

        <Footer />
    </Router>
)

export default AppRouter
