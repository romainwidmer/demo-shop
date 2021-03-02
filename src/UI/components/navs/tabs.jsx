import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const NavTabs = ({ items, totals=null, sticky=false }) => (
    <nav className={`nav-tabs custom-nav-tabs ${sticky && 'sticky'}`}>
        <ul>
            {items.map((item, index) => (
                <SingleTab 
                    key={index} 
                    route={item.route} 
                    title={item.title}
                    total={totals && totals[item.route]}
                />
            ))}
        </ul>
    </nav>
)


const SingleTab = ({ route, title, total=null }) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)
    const location = useLocation()

    if(location.pathname === route) {
        if(!active) setActive(true)
    } else {
        if(active) setActive(false)
    }

    if(total !== null) total = `(${total})`

    const scrollTop = () => {
        let scrollToValue = 300

        //if(isMobile) scrollToValue = 310

        window.scrollTo({
            top: scrollToValue,
            behavior: "smooth"
        })
    }

    return(
        <li className={`nav-item nav-link ${active | hover && 'active'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <NavLink className="bold" to={route} onClick={scrollTop}>
                { title } { total } 
            </NavLink>
        </li>
    )
}

export default NavTabs
