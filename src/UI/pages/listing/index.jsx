import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

// Import components
import Banner from '../../components/banner'
import Card from '../../components/cards'

// Import custom hooks
import useFetch from '../../../customHooks/useFetch'


const ListingPage = () => {
    const { data, loading, error } = useFetch('offers')

    if(loading) return <p>loading...</p>
    if(error) return <p>error !!</p>

    const sportOffers = data.filter(d => d.category === 'sport')
    const foodOffers = data.filter(d => d.category === 'food')
    const travelOffers = data.filter(d => d.category === 'travel')

    const scrollTop = () => {
        let scrollToValue = 300

        //if(isMobile) scrollToValue = 310

        window.scrollTo({
            top: scrollToValue,
            behavior: "smooth"
        })
    }


    return(
        <div className="listing">
            <Banner title="Listing" />

            <section className="container">
                <h2>Toutes les offres</h2>

                <Tabs defaultActiveKey='sport' transition={false} id="listing-articles" className="sticky-nav" onSelect={scrollTop}>
                    <Tab eventKey="sport" title={`Sport (${sportOffers.length})`}>
                        <OffersListing title="sport" data={sportOffers} />
                    </Tab>
                    <Tab eventKey='food' title={`Food (${foodOffers.length})`}>
                        <OffersListing title="food" data={foodOffers} />
                    </Tab>
                    <Tab eventKey='travel' title={`Travel (${travelOffers.length})`}>
                        <OffersListing title="travel" data={travelOffers} />
                    </Tab>
                </Tabs>


            </section>
        </div>
    )
}

const OffersListing = ({ data }) => (
    <div className="listing">
        <ul>
            {data.map(d => (
                <li key={d.id}>
                    <Card data={d} />
                </li>
            ))}
        </ul>
    </div>
)



export default ListingPage
