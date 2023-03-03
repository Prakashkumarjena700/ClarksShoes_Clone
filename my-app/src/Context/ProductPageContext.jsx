import React, { useState } from 'react'
import { createContext } from 'react'

export const ProductPageContext = createContext()

export default function ProductPageContextProvider({ children }) {
    const [gender, setGender] = useState('')
    return (
        <ProductPageContext.Provider value={{ gender, setGender }} >{children}</ProductPageContext.Provider>
    )
}
