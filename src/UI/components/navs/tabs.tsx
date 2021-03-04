import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type TabType = {
    id: number,
    title: string,
    route: string,
    component: JSX.Element
}

type NavTabsProps = {
    items: TabType[],
    totals?: {},
    sticky?: boolean
}



const NavTabs:React.FC<NavTabsProps> = ({ items, totals=null, sticky=false }) => (
    <nav className={`nav-tabs custom-nav-tabs ${sticky && 'sticky'}`}>
        <ul>
            {items.map((item, index) => (
                <SingleTab 
                    key={index} 
                    route={item.route} 
                    title={item.title}
                    //@ts-ignore
                    total={totals && totals[item.route]}
                />
            ))}
        </ul>
    </nav>
)


type SingleTabType = {
    route: string,
    title: string,
    total?: number
}

const SingleTab:React.FC<SingleTabType> = ({ route, title, total=null }) => {
    const [active, setActive] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    const location = useLocation()

    console.log(location.pathname === route)

    if(location.pathname === route) {
        if(!active) setActive(true)
    } else {
        if(active) setActive(false)
    }

    //@ts-ignore
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
        <li className={`nav-item nav-link ${active || hover ? 'active': ''}`}
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
