import React from 'react'

// Import components
import Banner from '../../components/banner'
import ListingHome from '../listing/home'
import AppLoader from '../../components/loaders'
import ErrorPage from '../error'

// Import custom hooks
import useFetch from '../../../customHooks/useFetch'

export type OfferType = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	ratings: number;
}


const HomePage = () => {
    const { data, loading, error } = useFetch('offers?ratings=5')

    if(loading) return <AppLoader />
    
// @ts-ignore TODO: fix this
    if(error) return <ErrorPage message={error.message} />


    return(
        <div>
            <Banner title="Home page" componentName='home' />
            <h1>Les offres les mieux classées</h1>

            {/* @ts-ignore */}
            <ListingHome data={data} />
        </div>
    )
}

export default HomePage
