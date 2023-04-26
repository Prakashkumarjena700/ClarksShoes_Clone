import React, { useContext } from 'react'

import "./Components.css"

import { Link, useNavigate } from 'react-router-dom'

export default function SixtyPersentSale() {
    // const { setGender, setType } = useContext(ProductPageContext)

    // const navigate = useNavigate()

    // const setPageforSearch = (gen) => {
    //     setGender('Women')
    //     setType(' ')
    //     localStorage.setItem('gender', 'Women')
    //     localStorage.setItem('type', ' ')

    //     navigate("/productspage")
    // }

    return (
        <div className='sixtypersentoffSale' >
            <h1>SUMMER CLEARANCE UP TO 60% OFF SALE*</h1>
            <p>Take an extra 40% off Clearance. Use code: EXTRA40 at checkout for savings off select styles.</p>
            <div>
                <button>Shop Womens</button>
                <button>Shop Mens</button>
                <button>Shop Kids</button>
                <button>See Details</button>
            </div>
        </div>
    )
}

