import React, { useState } from 'react'
import { createContext } from 'react'

export const ProductPageContext = createContext()

export default function ProductPageContextProvider({ children }) {

    const genderFromLS = localStorage.getItem('gender')
    const typeFromLS = localStorage.getItem('type')

    console.log(genderFromLS, typeFromLS)

    const [gender, setGender] = useState(genderFromLS || '')
    const [type, setType] = useState(typeFromLS || '')
    return (
        <ProductPageContext.Provider value={{ gender, setGender, type, setType }} >{children}</ProductPageContext.Provider>
    )
}
