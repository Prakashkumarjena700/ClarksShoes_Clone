import React, { useState } from 'react'
import { createContext } from 'react'

export const ProductPageContext = createContext()

export default function ProductPageContextProvider({ children }) {

    const genderFromLS = localStorage.getItem('gender')
    const typeFromLS = localStorage.getItem('type')
    const sizeFromLS = localStorage.getItem('size')
    const colorFromLs = localStorage.getItem('color')
    const ratingFromLs = localStorage.getItem('rating')

    const [gender, setGender] = useState(genderFromLS || ' ')
    const [type, setType] = useState(typeFromLS || ' ')
    const [size, setSize] = useState(sizeFromLS || ' ')
    const [color, setColor] = useState(colorFromLs || ' ')
    const [rating, setRating] = useState(ratingFromLs || ' ')
    return (
        <ProductPageContext.Provider value={{ gender, setGender, type, setType, size, setSize, color, setColor, rating, setRating }} >{children}</ProductPageContext.Provider>
    )
}
