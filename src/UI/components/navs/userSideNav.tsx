import React, { useState, useContext } from 'react'

// Import components
import AccountPage from '../../pages/user/account'
import OrdersPage from '../../pages/user/orders'

// Import app context
import { AuthContext } from '../../../contexts/auth'
import { CustomButton } from '../buttons'

type Props = {
    handleChange: (index: number) => void
}

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


const UserSideNav:React.FC<Props> = ({ handleChange }) => {
    const [active, setActive] = useState<number>(0)
    //@ts-ignore
    const { handleSignOut } = useContext(AuthContext)

    const handleClick = (index: number) => {
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
