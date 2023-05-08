import React, { useEffect, useState } from 'react'

import '../Css/Order.css'
import { Link } from 'react-router-dom'

import '../Css/Order.css'

import { TbTruck } from 'react-icons/tb'

export default function Orders() {

  const [userOrder, setUserOrder] = useState([])
  const [total, setTotal] = useState(0)

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
        let total = getTotal(res)
        setTotal(total)
        setUserOrder(res)
      })
      .catch(err => console.log(err))
  }


  const getTotal = (arr) => {
    const totalAmount = arr.reduce((accumulator, item) => {
      return accumulator + item.price * item.quentity
    }, 0)
    return totalAmount
  }

  console.log(userOrder)

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
      <div className='cartPageContainer' >
        <div className='cartList' >
          {
            userOrder && userOrder.map((ele) =>
              <div id='OrderCard' className='cartCard' >
                <div>
                  <img src={ele.img1} alt="" />
                </div>
                <div>
                  <b>{ele.name}</b>
                  <p>Gender : {ele.gender}</p>
                  <p>Color : {ele.color}</p>

                  <p>Price : ${ele.price}.00</p>
                  <p>Quentity : {ele.quentity}</p>
                  <p>Method of Payment : {ele.payment}</p>
                  <p>Size : {ele.size}</p>

                  <p>Total price : ${ele.price * ele.quentity}.00</p>
                 
                </div>

              </div>)
          }
        </div>
        <div className='checkoutContainer'  >
          <p><span>Subtotal</span><span>${total}.00</span> </p>
          <p><span>Taxes</span><span>$0.00</span></p>
          <p><span>Estimated total</span><span style={{ color: "black" }} >${total}.00</span></p>
          <h3>Nurses, Medical Professionals, Military, First Responders, and Airline Employees receive a discount with ID.me</h3>
          <img id='verifyId' src="https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme.png" alt="" />

        </div>
      </div>
    </div>
  )
}
