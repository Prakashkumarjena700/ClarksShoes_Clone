import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const LoggerContext = createContext()

export default function LoggerContextProvider({ children }) {
    const userFromLS = localStorage.getItem('user')
    const usertypeFromLS = localStorage.getItem('userType')

   
    const [user, setUser] = useState(userFromLS || '')
    const [userType, setUserType] = useState(usertypeFromLS || '')

    return (
        <LoggerContext.Provider value={{ userType, user, setUser, setUserType }} >{children}</LoggerContext.Provider>
    )
}
