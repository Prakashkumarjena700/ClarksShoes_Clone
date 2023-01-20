import React from 'react'
import SixtyPersentSale from '../Components/SixtyPersentSale'

import "../Css/WomenSearch.css"

export default function WomensSearch() {
    return (
        <div>
            <div className='homeFirstDiv' >
                <p><span>FREE SHIPPINGON</span> ORDERS OVER $50</p>
                <p>|</p>
                <p><span>FREE RETURNS</span> EVERYDAY</p>
            </div>
           <SixtyPersentSale/>
        </div>
    )
}
