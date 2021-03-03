import React, { useState, useEffect, createContext } from 'react'

// @ts-ignore TODO: fix this
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export const CartContext = createContext(null)

type Props = {
    children: any
}

export type CartItemType = {
    id: number,
    title: string,
    description: string,
    price: number,
    qte: number
}

const CartContextProvider = ({ children }: Props) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>(storage)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []))

        if(cartItems) {
            let tot = 0
    
            for(const item of cartItems) {
                tot += item.qte * item.price
            }
    
            setTotal(tot)
        } else {
            setTotal(0)
        }

    }, [cartItems])


    const addToCart = (data: CartItemType, qte: number) => {
        if(qte === 0) {
            removeFromCart(data)
            return
        }

        data.qte = qte

        const offerFoundInCart = cartItems.find(i => i.id === data.id)
        
        if(offerFoundInCart) {
            updateCart(data)
            return
        }

        setCartItems(prev => [...prev, data])
    }

    const updateCart = (data: CartItemType) => {
        const offerIndex = cartItems.findIndex(i => i.id === data.id)

        const newArray = [...cartItems]
        newArray[offerIndex] = data

        setCartItems(newArray)
    }

    const removeFromCart = (data: CartItemType) => {
        const newData = cartItems.filter(item => item.id !== data.id)
        setCartItems(newData)
    }

    const clearCart = () => {
        setCartItems([])
    }

    //--- Helpers
    const isOfferInCart = (data: CartItemType) => {
        const result = cartItems.find(i => i.id === data.id)

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
