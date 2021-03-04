import React, { useState, useEffect, createContext } from 'react'
import { CartType } from '../tools/types'


const cart = localStorage.getItem('cart')
const storage = cart ? JSON.parse(cart) : []

export const CartContext = createContext(null)


const CartContextProvider:React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartType[]>(storage)
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


    const addToCart = (data: CartType, qte: number) => {
        if(qte === 0) {
            removeFromCart(data)
            return
        }
        
        data.qte = qte

        const offerFoundInCart = cartItems.find(item => item.id === data.id)
        
        if(offerFoundInCart) {
            updateCart(data)
            return
        }

        setCartItems(prev => [...prev, data])
    }

    const updateCart = (data: CartType) => {
        const offerIndex = cartItems.findIndex(item => item.id === data.id)

        const newArray = [...cartItems]
        newArray[offerIndex] = data

        setCartItems(newArray)
    }

    const removeFromCart = (data: CartType) => {
        const newData = cartItems.filter(item => item.id !== data.id)
        setCartItems(newData)
    }

    const clearCart = () => setCartItems([])

    const isOfferInCart = (data:CartType) => {
        const result = cartItems.find(item => item.id === data.id)

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
