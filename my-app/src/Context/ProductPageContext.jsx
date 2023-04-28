import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ProductPageContext = createContext()

export default function ProductPageContextProvider({ children }) {

    const [cartCount, setCartCount] = useState(0)


    const genderFromLS = localStorage.getItem('gender')
    const typeFromLS = localStorage.getItem('type')
    const sizeFromLS = localStorage.getItem('size')
    const colorFromLs = localStorage.getItem('color')
    const ratingFromLs = localStorage.getItem('rating')

    useEffect(() => {
        getCartCount()
    }, [])

    const getCartCount = async () => {
        await fetch('https://witty-loafers-elk.cyclic.app/cart/usercart', {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((res) => res.json())
            .then(res => setCartCount(res.length))
    }

    const [gender, setGender] = useState(genderFromLS || ' ')
    const [type, setType] = useState(typeFromLS || ' ')
    const [size, setSize] = useState(sizeFromLS || ' ')
    const [color, setColor] = useState(colorFromLs || ' ')
    const [rating, setRating] = useState(ratingFromLs || ' ')
    return (
        <ProductPageContext.Provider value={{ gender, setGender, type, setType, size, setSize, color, setColor, rating, setRating, cartCount, setCartCount }} >{children}</ProductPageContext.Provider>
    )
}
