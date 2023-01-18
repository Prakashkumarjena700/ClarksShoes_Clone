import React from 'react'
import './Footer.css'
import MidAndSmallFooter from './MidAndSmallFooter'
import NormalFooter from './NormalFooter'

export default function Footer() {
  return (
    <div>
      <NormalFooter />
      <MidAndSmallFooter />
    </div>
  )
}
