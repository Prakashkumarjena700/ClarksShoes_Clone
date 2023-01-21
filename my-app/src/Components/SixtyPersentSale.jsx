import React from 'react'

import "./Components.css"

import { Link } from 'react-router-dom'

export default function SixtyPersentSale() {
    return (
        <div className='sixtypersentoffSale' >
            <h1>WINTER CLEARANCE UP TO 60% OFF SALE*</h1>
            <p>Take an extra 40% off Clearance. Use code: EXTRA40 at checkout for savings off select styles.</p>
            <div>
                <button><Link to='/womenssearch' >Shop Womens</Link></button>
                <button><Link to='/menssearch'>Shop Mens</Link></button>
                <button><Link to='/kidssearch' >Shop Kids</Link></button>
                <button>See Details</button>
            </div>
        </div>
    )
}

