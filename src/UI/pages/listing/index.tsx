import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'

// Import components
import Banner from '../../components/banner'
import AppLoader from '../../components/loaders'
import ErrorPage, { FetchError } from '../error'
import FilterComponent from '../../components/filters'
import NavTabs from '../../components/navs/tabs'
import ListingBlock from '../../components/listing'

// Import custom hooks
import useFetch from '../../../customHooks/useFetch'

// Import tools
import { LISTING_PAGE_SPORT, LISTING_PAGE_FOOD, LISTING_PAGE_TRAVEL } from '../../../tools/routes'
import { OfferType, RouterType, FilterType } from '../../../tools/types'


const listingNav = [
    {
        id: 0,
        title: "Sport",
        route: LISTING_PAGE_SPORT,
        component: ListingBlock
    },
    {
        id: 1,
        title: "Food",
        route: LISTING_PAGE_FOOD,
        component: ListingBlock
    },
    {
        id: 2,
        title: "Travel",
        route: LISTING_PAGE_TRAVEL,
        component: ListingBlock
    }
]


const ListingPage:React.FC = () => {
    const { data, loading, error } = useFetch<OfferType[]>('http://localhost:3001/offers')
    const [locationFilter, setLocationFilter] = useState<FilterType[] | []>([])

    const [sportOffers, setSportOffers] = useState<OfferType[] | []>([])
    const [foodOffers, setFoodOffers] = useState<OfferType[] | []>([])
    const [travelOffers, setTravelOffers] = useState<OfferType[] | []>([])

    const [sportOffersFiltered, setSportOffersFiltered] = useState<OfferType[] | []>([])
    const [foodOffersFiltered, setFoodOffersFiltered] = useState<OfferType[] | []>([])
    const [travelOffersFiltered, setTravelOffersFiltered] = useState<OfferType[] | []>([])

    const { id } = useParams<RouterType>()

    useEffect(() => {
        if(data) {
            setSportOffers(data.filter(d => d.category === 'sport'))
            setFoodOffers(data.filter(d => d.category === 'food'))
            setTravelOffers(data.filter(d => d.category === 'travel'))
        }
    }, [data])

    useEffect(() => {
        if(locationFilter.length === 0) {
            setSportOffersFiltered(sportOffers)
            setFoodOffersFiltered(foodOffers)
            setTravelOffersFiltered(travelOffers)
            return
        }

        let locations: string[] = []
        let sportOutput = sportOffers
        let foodOutput = foodOffers
        let travelOutput = travelOffers

        //@ts-ignore
        locations = locationFilter.map(({ value }) => value)

        if (locations.length > 0) {
            sportOutput = sportOutput.filter(offer => locations.includes(offer.location))
            foodOutput = foodOutput.filter(offer => locations.includes(offer.location))
            travelOutput = travelOutput.filter(offer => locations.includes(offer.location))
        }

        setSportOffersFiltered(sportOutput)
        setFoodOffersFiltered(foodOutput)
        setTravelOffersFiltered(travelOutput)

    }, [locationFilter])

    //@ts-ignore
    const setFilters = (values: FilterType[], cat: string) => {
        if(cat === 'location') setLocationFilter(values)
    }

    //--- Filters location preps
    //@ts-ignore
    let locations = data && data.map(offer => offer.location)
    //@ts-ignore
    locations =  [].concat.apply([], locations)
    locations = Array.from(new Set(locations))

    let locationObject: any = []
    locations.map(location => location !== null && locationObject.push({ label:location, value: location, cat: 'location' }))

    const totalByType = {
        [LISTING_PAGE_SPORT]: sportOffersFiltered.length,
        [LISTING_PAGE_FOOD]: foodOffersFiltered.length,
        [LISTING_PAGE_TRAVEL]: travelOffersFiltered.length
    }


    return(
        <div className="listing">
            <Banner title="Listing" />

            <section className="container">
                <h2>Toutes les offres</h2>

                { loading && <AppLoader /> }

                { error ? <FetchError message={error} /> : 
                    <>
                        <div className="filter-component">
                            <div className="selects-wrapper">
                                <FilterComponent
                                    categories={locationObject}
                                    setFilters={setFilters}
                                    cat={"location"}
                                    placeholder="Filter par location"
                                />
                            </div>
                        </div>
                        
                        {/**@ts-ignore */}
                        <NavTabs items={listingNav} totals={totalByType} sticky />
        
                        <Switch>
                            {listingNav.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.route}
                                    render={() => (
                                        <route.component
                                            offers={id === 'sport' ? sportOffersFiltered : id === 'food' ? foodOffersFiltered : travelOffersFiltered}
                                        />
                                    )}
                                />
                            ))}
                        </Switch>
                    </>
                }



            </section>
        </div>
    )
}


export default ListingPage
