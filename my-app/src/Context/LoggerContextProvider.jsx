import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const LoggerContext = createContext()

export default function LoggerContextProvider({ children }) {
    const userFromLS = localStorage.getItem('user')
    const usertypeFromLS = localStorage.getItem('userType')
    const loginStatus = localStorage.getItem("isAuth")
    const usermailLS = localStorage.getItem("usermail")
    const userImgLS = localStorage.getItem('userImg')

    const [user, setUser] = useState(userFromLS || '')
    const [userType, setUserType] = useState(usertypeFromLS || 'user')
    const [isAuth, setIsAuth] = useState(loginStatus || false)
    const [usermail, setusermail] = useState(usermailLS || 'user')
    const [userImg, setuserImg] = useState(userImgLS || '')


    return (
        <LoggerContext.Provider value={{ userType, user, setUser, setUserType, isAuth, setIsAuth, usermail, setusermail, userImg, setuserImg }} >{children}</LoggerContext.Provider>
    )
}
