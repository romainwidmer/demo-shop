import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Import custom hooks
import useWindowResize from '../../../customHooks/useWindowResize'


// Import tools
import * as ROUTES from '../../../tools/routes'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [isNavTop, setIsNavTop] = useState(true)
    const isMobile = useWindowResize()

    const user = null

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
                                width: isNavTop ? '75px' : '55px'
                            }} />
                        </NavLink>
                    </div>

                    <div className="right">
                        { isMobile && <CartIcon /> }
                        <div className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            <div className="burger"></div>
                        </div>
                    </div>

                    <nav className={open ? 'visible' : ''}>
                        <ul>
                            <li>
                                <NavLink to={ROUTES.LISTING_PAGE} onClick={() => setOpen(!open)}>Offers</NavLink>
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
                            { !isMobile && <CartIcon /> }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

const CartIcon = () => {
    return null
}

export default Navbar
