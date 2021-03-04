import React from 'react'

// Import components
import Banner from '../../components/banner'
import ListingHome from '../listing/home'
import AppLoader from '../../components/loaders'
import { FetchError } from '../error'

// Import custom hooks
import useFetch, { API_URL } from '../../../customHooks/useFetch'
import { OfferType } from '../../../tools/types'



const HomePage = () => {
    const { data, loading, error } = useFetch<OfferType[]>(`${API_URL}/offers?ratings=5`)
    
    return(
        <div>
            <Banner title="Les offres les mieux classées" componentName='home' />

            <section className="container">
                <h2>Les offres ayants été les mieux notées</h2>
                
                { loading && <AppLoader /> }

                { error && <FetchError message={error} /> }

                { data && <ListingHome data={data} /> }
            </section>
        </div>
    )
}

export default HomePage
