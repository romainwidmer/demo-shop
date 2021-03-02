import React, { useState, useEffect, useContext } from 'react'

// Import components
import Banner from '../../components/banner'
import UserSideNav from '../../components/navs/userSideNav'
import AccountPage from './account'
import OrdersPage from './orders'

// Import contexts
import { AuthContext } from '../../../contexts/auth'


const UserPage = () => {
    const [Content, setContent] = useState(null)
    const [title, setTitle] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        setContent(Contents[0])
    }, [])

    const handleSetTitle = value => setTitle(value)

    const Contents = [
        <AccountPage handleSetTitle={handleSetTitle} />,
        <OrdersPage handleSetTitle={handleSetTitle} />,
    ]

    const handleChange = id => setContent(Contents[id])


    return(
        <div>
            <Banner title={`Bonjour ${user.email}`} />

            <div className="container">
                <h2>{ title }</h2>

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
