import React from 'react'

// Import components
import Banner from '../../components/banner'
import ListingHome from '../listing/home'

// Import custom hooks
import useFetch from '../../../customHooks/useFetch'


const HomePage = () => {
    const { data, loading, error } = useFetch('offers?rating=5')

    if(loading) return <p>loading...</p>
    if(error) return <p>error !!</p>


    return(
        <div>
            <Banner title="Home page" componentName='home' />
            <h1>Les offres les mieux classées</h1>
            <ListingHome data={data} />
        </div>
    )
}

export default HomePage
