import React, { useState, useEffect, useContext } from 'react'

// Import components
import Banner from '../../components/banner'
import UserSideNav from '../../components/navs/userSideNav'
import AccountPage from './account'
import OrdersPage from './orders'

// Import contexts
import { AuthContext } from '../../../contexts/auth'


const UserPage:React.FC = () => {
    const [Content, setContent] = useState<JSX.Element | null>(null)
    const { user } = useContext<any>(AuthContext)

    useEffect(() => {
        setContent(Contents[0])
    }, [])

    const Contents = [
        <AccountPage />,
        <OrdersPage />,
    ]

    const handleChange = (id: number) => setContent(Contents[id])


    return(
        <div>
            <Banner title={`Bonjour ${user.email}`} />

            <div className="container">

                <section className="row">
                    <div className="col col-lg-3 col-12">
                        <UserSideNav handleChange={handleChange} />
                    </div>

                    <div className="col col-lg-9 col-12">{ Content }</div>
                </section>
            </div>
        </div>
    )
}

export default UserPage
