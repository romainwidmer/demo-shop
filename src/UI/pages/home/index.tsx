import React from 'react'

// Import components
import Banner from '../../components/banner'
import ListingHome from '../listing/home'
import AppLoader from '../../components/loaders'
import ErrorPage from '../error'

// Import custom hooks
import useFetch from '../../../customHooks/useFetch'
import { OfferType } from '../../../tools/types'



const HomePage = () => {
    const { data, loading, error } = useFetch<OfferType[]>('http://localhost:3001/offers?ratings=5')

    if(loading) return <AppLoader />
    
    //@ts-ignore
    if(error) return <ErrorPage message={error.message} />


    return(
        <div>
            <Banner title="Home page" componentName='home' />
            <h1>Les offres les mieux classées</h1>

            { data && <ListingHome data={data} /> }
        </div>
    )
}

export default HomePage
