import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Import custom hooks
import useWindowResize from '../../../customHooks/useWindowResize'

// Import contexts
import { CartContext } from '../../../contexts/cart'
import { AuthContext } from '../../../contexts/auth'

// Import tools
import * as ROUTES from '../../../tools/routes'
import { getFormatedPrice } from '../../../tools/helpers'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [isNavTop, setIsNavTop] = useState(true)
    const { total, totalItemsInCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const isMobile = useWindowResize()


    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY <= 10
            if(isTop) {
                if(!isNavTop) setIsNavTop(true)
            } else {
                if(isNavTop) setIsNavTop(false)
            }
        })
    }, [isNavTop])

    return(
        <div className="main-nav-wrapper">
            <div className="main-nav" style={{
                height: isNavTop ? '80px' : '60px',
                background: isNavTop ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)'
            }}>
                <div className="container">
                    <div className="logo">
                        <NavLink to={ROUTES.HOME_PAGE}>
                            <img src="/img/logo1.png" alt="logo" style={{
                                width: isMobile ? 55 : isNavTop ? 75 : 55
                            }} />
                        </NavLink>
                    </div>

                    <div className="right">
                        { isMobile && <CartIcon totalItemsInCart={totalItemsInCart} isNavTop={isNavTop} isMobile={isMobile} total={total} /> }
                        <div className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            <div className="burger"></div>
                        </div>
                    </div>

                    <nav className={open ? 'visible' : ''}>
                        <ul>
                            <li>
                                <NavLink to={ROUTES.LISTING_PAGE_SPORT} onClick={() => setOpen(!open)}>Offers</NavLink>
                            </li>
                            <li className="nav-icon user">
                                <div className="icon white">
                                    <NavLink to={ROUTES.LOGIN_PAGE} onClick={() => setOpen(!open)}>
                                        {user ? <i className="far fa-user-check"></i> : <i className="far fa-user"></i>}
                                    </NavLink>
                                </div>
                                
                                {isMobile && <NavLink to={ROUTES.LOGIN_PAGE} onClick={() => setOpen(!open)}>
                                    mon compte
                                </NavLink>}
                            </li>
                            { !isMobile && <CartIcon totalItemsInCart={totalItemsInCart} isNavTop={isNavTop} isMobile={isMobile} total={total} /> }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

const CartIcon = ({ totalItemsInCart, isNavTop, isMobile, total }) => {
    return (
        <li className="nav-icon">
            <div className={totalItemsInCart > 0 ? 'dropdown icon white active' : 'dropdown icon white'}>
                <NavLink to={ROUTES.CART_PAGE}>
                    {totalItemsInCart > 0 ? (
                        <>
                            <i className="fas fa-shopping-cart dropbtn"></i>
                            <span>{ totalItemsInCart }</span>
                        </>
                    ) : (
                        <i className="fal fa-shopping-cart dropbtn"></i>
                    )}
                </NavLink>

                {totalItemsInCart > 0 && !isMobile &&
                <div className="dropdown-content">
                    <div className="content" style={{ opacity: isNavTop ? .8 : 1 }}>
                        <div className="nb-items">
                            <p>{ totalItemsInCart } { totalItemsInCart > 1 ? 'articles' : 'article' }</p>
                        </div>

                        <div className="total">
                            <label>Total</label>
                            <div className="value">
                                <span>{ getFormatedPrice(total) }</span>
                                <span>chf</span>
                            </div>
                        </div>

                        <div className="link">
                            <Link className="button blue-grey" to={ROUTES.CART_PAGE}>
                                <label>Voir le panier</label>
                            </Link>
                        </div>
                    </div>
                </div>
                }
            </div>
        </li>
    )
}

export default Navbar
