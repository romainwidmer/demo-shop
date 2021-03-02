import React, { useEffect, useContext } from 'react'
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Import components
import Navbar from './UI/components/navs'
import AuthPage from './UI/pages/auth'
import CartPage from './UI/pages/cart'
import HomePage from './UI/pages/home'
import ListingPage from './UI/pages/listing'
import OfferDetail from './UI/pages/offer'
import Footer from './UI/components/footer'
import PageNotFound from './UI/pages/error/notFound'
import UserPage from './UI/pages/user'

// Import contexts
import { AuthContext } from './contexts/auth'

// Import tools
import * as ROUTES from './tools/routes'


const AppRouter= () => (
    <Router>
        <Navbar />

        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route path={ROUTES.LISTING_PAGE} component={ListingPage} />
            <Route path={ROUTES.OFFER_DETAIL_PAGE} component={OfferDetail} />
            <Route path={ROUTES.CART_PAGE} component={CartPage} />

            <Route path={ROUTES.AUTH_PAGE} component={AuthPage} />

            <PrivateRoute path={ROUTES.USER_PAGE} component={UserPage} />

            <Route component={PageNotFound} />
        </Switch>

        <Footer />
    </Router>
)

/**
 * This component handle the protected routes such as everything related to the customer space
 * If the access is denied, the router will redirect the customer on the login page
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext)

    console.log()

    useEffect(() => {
        //getUser()
    }, [])


    return(
        <Route {...rest} render={(props) => (
            user ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN_PAGE} />
        )} />
    )
}

export default AppRouter
