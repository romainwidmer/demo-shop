import React, { useState, useEffect, createContext } from 'react'
import { CartItem } from '../tools/types'

// @ts-ignore TODO: fix this
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export const CartContext = createContext(null)


const CartContextProvider:React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(storage)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []))

        if(cartItems) {
            let tot = 0
    
            for(const item of cartItems) {
            }
    
            setTotal(tot)
        } else {
            setTotal(0)
        }

    }, [cartItems])


    const addToCart = (data: CartItem, qte: number) => {
        if(qte === 0) {
            removeFromCart(data)
            return
        }

        if(data.qte) {
            data.qte = qte
        }

        //data.qte = qte

        const offerFoundInCart = cartItems.find(i => i.item.id === data.item.id)
        
        if(offerFoundInCart) {
            updateCart(data)
            return
        }

        setCartItems(prev => [...prev, data])
    }

    const updateCart = (data: CartItem) => {
        const offerIndex = cartItems.findIndex(i => i.item.id === data.item.id)

        const newArray = [...cartItems]
        newArray[offerIndex] = data

        setCartItems(newArray)
    }

    const removeFromCart = (data: CartItem) => {
        const newData = cartItems.filter(item => item.item.id !== data.item.id)
        setCartItems(newData)
    }

    const clearCart = () => {
        setCartItems([])
    }

    //--- Helpers
    const isOfferInCart = (data: CartItem) => {
        const result = cartItems.find(i => i.item.id === data.item.id)

        return result !== undefined
    }

    const totalItemsInCart = cartItems.length

    const contextValues: any = {
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
