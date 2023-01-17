import React from 'react'
import HamburgerNavbar from './HamburgerNavbar'
import './Navbar.css'
import NormalNavbar from './NormalNavbar'

export default function Navbar() {
  return (
    <div>
        <NormalNavbar/>
        <HamburgerNavbar/>
    </div>
  )
}
