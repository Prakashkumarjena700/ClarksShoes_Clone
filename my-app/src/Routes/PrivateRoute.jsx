import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoggerContext } from '../Context/LoggerContextProvider'



export default function PrivateRoute({ children }) {
    const { isAuth } = useContext(LoggerContext)

    if (isAuth == false) {
        return <Navigate to='/login' />
    }
    return children
}
