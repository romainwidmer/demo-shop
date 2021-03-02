import React, { useState, useEffect, createContext } from 'react'

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export const CartContext = createContext(null)

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(storage)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []))

        let tot = 0

        for(const item of cartItems) {
            tot += item.qte * item.price
        }

        setTotal(tot)

    }, [cartItems])


    const addToCart = (data, qte) => {
        const offerFoundInCart = cartItems.find(i => i.id === data.id)

        if(qte === 0) {
            removeFromCart(data)
            return
        }

        data.qte = qte
        
        if(offerFoundInCart) {
            updateCart(data)
            return
        }

        setCartItems(prev => [...prev, data])
    }

    const updateCart = data => {
        const offerIndex = cartItems.findIndex(i => i.id === data.id)

        const newArray = [...cartItems]
        newArray[offerIndex] = data

        setCartItems(newArray)
    }

    const removeFromCart = data => {
        const newData = cartItems.filter(item => item.id !== data.id)
        setCartItems(newData)
    }

    const clearCart = () => {
        setCartItems([])
    }

    //--- Helpers
    const isOfferInCart = (data) => {
        const result = cartItems.find(i => i.id === data.id)

        return result !== undefined
    }

    const totalItemsInCart = cartItems.length

    const contextValues = {
        cartItems, total, totalItemsInCart,
        addToCart, removeFromCart, clearCart,
        isOfferInCart
    }

    return(
        <CartContext.Provider value={contextValues}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
