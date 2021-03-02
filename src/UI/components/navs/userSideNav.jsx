import React, { useState, useContext } from 'react'

// Import components
import AccountPage from '../../pages/user/account'
import OrdersPage from '../../pages/user/orders'

// Import app context
import { AuthContext } from '../../../contexts/auth'
import { CustomButton } from '../buttons'

const userNav = [
    {
        id: 0,
        title: "Mon profil",
        component: AccountPage
    },
    {
        id: 1,
        title: "Mes commandes",
        component: OrdersPage
    }
]


const UserSideNav = ({ handleChange }) => {
    const [active, setActive] = useState(0)
    const { handleSignOut } = useContext(AuthContext)

    const handleClick = index => {
        setActive(index)
        handleChange(index)
    }

    return(
        <div className="side-nav">
            <nav>
                <h2>Accès</h2>
                <ul>
                    {userNav.map(tab => (
                        <li key={tab.id}>
                            <span className={`link-style ${active === tab.id ? 'active': ''}`}
                                  onClick={() => handleClick(tab.id)}>{ tab.title }
                            </span>
                        </li>
                    ))}
                </ul>
                <CustomButton 
                    label="Déconnexion"
                    color="blue-grey user-side-nav"
                    handleClick={handleSignOut}
                />
            </nav>
        </div>
    )
}

export default UserSideNav
