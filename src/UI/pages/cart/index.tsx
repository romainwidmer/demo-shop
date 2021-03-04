import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Import components
import Banner from '../../components/banner'
import { CustomButton } from '../../components/buttons'
import EmptyCart from '../../components/cart/empty'

// Import contexts
import { CartContext } from '../../../contexts/cart'

// Import tools
import { CURRENCY } from '../../../tools/helpers'
import { CartType } from '../../../tools/types'



const CartPage:React.FC<null> = () => {
    //@ts-ignore
    const { cartItems, total, clearCart } = useContext(CartContext)

    return(
        <div className="cart">
            <Banner title="Panier" />

            <section className="container">
                {cartItems.length >= 1 ? (
                    <div className="row">
                    <div className="col col-md-8 col-12">
                        User login could come here if the user is not connected yet
                    </div>

                    <div className="col col-md 4 col-12">
                        <div className="resume">
                            <h2>Resume</h2>
                            <ul>
                                {cartItems.map((i: CartType) => (
                                    <li key={i.id}>
                                        <div className="label">
                                            <span>{ i.qte }x</span>
                                            <span>{ i.title }</span>
                                        </div>

                                        <div className="price">
                                            <span className="value">{ i.price }.-</span>
                                            <span className="currency">{ CURRENCY }</span>
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
                                    <span className="currency">{ CURRENCY }</span>
                                </div>
                            </div>

                            <div className="clear-cart">
                                <CustomButton
                                    label="Vider le panier"
                                    color="blue-grey"
                                    handleClick={clearCart}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                ): <EmptyCart />}
            </section>
        </div>
    )
}


export default CartPage
