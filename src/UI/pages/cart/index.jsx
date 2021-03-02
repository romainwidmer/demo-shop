import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Import components
import Banner from '../../components/banner'

// Import contexts
import { CartContext } from '../../../contexts/cart'


const CartPage = () => {
    const { cartItems, total } = useContext(CartContext)

    return(
        <div className="cart">
            <Banner title="Pannier" />

            <section className="container">
                {cartItems.length >= 1 ? (
                    <div className="row">
                    <div className="col col-md-8 col-12">
                        User login
                    </div>

                    <div className="col col-md 4 col-12">
                        <div className="resume">
                            <h2>Resume</h2>
                            <ul>
                                {cartItems.map(i => (
                                    <li key={i.id}>
                                        <div className="label">
                                            <span>{ i.qte }x</span>
                                            <span>{ i.title }</span>
                                        </div>

                                        <div className="price">
                                            <span className="value">{ i.price }.-</span>
                                            <span className="currency">CHF</span>
                                            <Link to={`/offer/${i.id}`} key={i.id}>
                                                <i className="fal fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="total">
                                <label>Total</label>
                                <div className="price">
                                    <span className="value">{ total }.-</span>
                                    <span className="currency">CHF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ): <EmptyCart />}
            </section>
        </div>
    )
}

const EmptyCart = () => <h1>Le panier est vide !!</h1>

export default CartPage
