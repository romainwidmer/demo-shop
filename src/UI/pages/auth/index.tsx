import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams, useLocation, NavLink } from 'react-router-dom'

// Import components
import Banner from '../../components/banner'
import LoginPage from './login'
import SignupPage from './signup'

// Import tools
import { LOGIN_PAGE, SIGNUP_PAGE } from '../../../tools/routes'
import { RouterType, NavLinkType } from '../../../tools/types'


const authNav: NavLinkType[] = [
    {
        id: 0,
        title: "J'ai un compte",
        route: LOGIN_PAGE,
        component: LoginPage
    },
    {
        id: 1,
        title: "Créer mon compte",
        route: SIGNUP_PAGE,
        component: SignupPage
    }
]


const AuthIndex = ()  => {
    const [title, setTitle] = useState<string | null>(null)
    const { id } = useParams<RouterType>()

    useEffect(() => {
        if(id === 'login') {
            setTitle("Connexion")
        } else if(id === 'signup') {
            setTitle("Créer compte")
        }
    }, [id])

    return(
        <div>
            <Banner title="Identification" />

            <section className="container">
                <h2>{ title }</h2>

                <nav className={"nav nav-tabs custom-nav-tabs"}>
                    <ul>
                        {authNav.map(tab => <SingleTabComponent key={tab.id} data={tab} />)}
                    </ul>
                </nav>

                <Switch>
                    {authNav.map((route, i) => (
                        <Route key={i} path={route.route} render={() => <route.component />} />
                    ))}
                </Switch>
            </section>
        </div>
    )
}


type TabsProps = {
    data: {
        route: string,
        title: string
    }
}

const SingleTabComponent:React.FC<TabsProps> = ({ data: { route, title } }) => {
    const [active, setActive] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)

    const location = useLocation()

    if(location.pathname === route) {
        if(!active) setActive(true)
    } else {
        if(active) setActive(false)
    }

    return(
        <li className={`nav-item nav-link ${active || hover ? 'active' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <NavLink className="bold" to={route}>{ title }</NavLink>
        </li>
    )
}

export default AuthIndex
