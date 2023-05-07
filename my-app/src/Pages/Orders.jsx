import React, { useEffect } from 'react'

import '../Css/Order.css'
import { Link } from 'react-router-dom'

import { TbTruck } from 'react-icons/tb'

export default function Orders() {

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await fetch(`https://witty-loafers-elk.cyclic.app/checkout/usercheckout`, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then(res => res.json())
      .then(res => {
        // setCartData(res)
        // let total = getTotal(res)
        // setTotal(total)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='homeFirstDiv' >
        <p><span>FREE SHIPPINGON</span> ORDERS OVER $75</p>
        <p>|</p>
        <p><span>FREE RETURNS</span> EVERYDAY</p>
      </div>
      <Link to='/' className='browsing' >{'<'}  CONTINUE BROWSING</Link>
      <div className='myshopingBag' >
        <div >
          <h1>My Orders</h1>
        </div>
        <div>
          <p>Bag ID:679810249</p>
          <p>Need help?</p>

        </div>
      </div>
      <div className='freeShipping' >
        <TbTruck color='#c0c8c2' fontSize='40px' /> <p>FREE SHIPPING ON ALL $50+ ORDERS + FREE RETURNS EVERYDAY</p>
      </div>
    </div>
  )
}
