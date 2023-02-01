import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const Logger = createContext()

export default function LoggerProvider() {

  const [userType, setUserType] = useState('')

  return (
    <Logger.Provider value={{ userType, setUserType }} >Logger</Logger.Provider>
  )
}
