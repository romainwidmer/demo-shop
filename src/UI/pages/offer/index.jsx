import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// Import components
import Rating from '../../components/rating'
import AppLoader from '../../components/loaders'
import ErrorPage from '../error'

// Import contexts
import useFetch from '../../../customHooks/useFetch'
import { CartContext } from '../../../contexts/cart'

// Import tools
import { CURRENCY } from '../../../tools/helpers'
import CustomCarousel from '../../components/carousel'


const OfferDetail = () => {
    const { id } = useParams()
    const { data, loading, error } = useFetch(`offers/${id}`)
    const [count, setCount] = useState(0)
    const { cartItems, addToCart, isOfferInCart } = useContext(CartContext)

    useEffect(() => {
        if(data) {
            if(isOfferInCart(data)) {
                const offerInCart = cartItems.find(o => o.id === data.id)
                setCount(offerInCart.qte)
            }
        }
    }, [loading])
    
    if(loading) return <AppLoader />
    if(error) return <ErrorPage message={error.message} />

    const increment = () => setCount(prev => prev + 1)

    const decrement = () => count > 0 ?? setCount(prev => prev - 1)

    const reset = () => setCount(0)

    const handleAddToCart = () => addToCart(data, count)

    const ratings = () => {
        let ratings = []
        
        for(let i = 0; i < data.ratings; i++) {
            ratings.push(<Rating key={i} />)
        }

        return ratings
    }

    return(
        <div className="offer-detail gradiant">
            <CustomCarousel />

            <section className="container">
                <div className="row">
                    <div className="col col-md-8 col-12">
                        <h1>{ data.title }</h1>
                        <div className="details">
                            <div className="location">{ data.location }</div>
                            <div className="category">{ data.category }</div>
                            <div className="ratings">{ ratings() }</div>
                        </div>
                        <p>{ data.description }</p>
                    </div>

                    <div className="col col-md-4 col-12">
                        <div className="sticky">
                            <h2>Add this offer to your cart</h2>

                            <div className="counter">
                                <div className="actions">
                                    <span onClick={decrement}><i className="fa fa-minus"></i></span>
                                    <input type="text" value={count} readOnly />
                                    <span onClick={increment}><i className="fa fa-plus"></i></span>
                                    <span className="ml-15" onClick={reset}><i className="fal fa-trash-alt"></i></span>
                                </div>

                                <div className="price">
                                    <span className="value">{ data.price }.-</span>
                                    <span className="currency">{ CURRENCY }</span>
                                </div>
                            </div>

                            <div className="total">
                                <label>Total</label>

                                <div className="value">
                                    <span className="value">{ count * data.price }.-</span>
                                    <span className="currency">{ CURRENCY }</span>
                                </div>
                            </div>

                            <button className="button booking" onClick={handleAddToCart}>
                            <label>{ isOfferInCart(data) ? 'update cart' : 'Add to cart' }</label>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OfferDetail
