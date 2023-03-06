import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProducet, checkOut } from "../Redux/action"
import { Link, useNavigate } from 'react-router-dom'

import { TbTruck } from 'react-icons/tb'

import '../Css/CartPage.css'

export default function CartPage() {

    const navigate = useNavigate()

    const [cartData, setCartData]=useState([])

    const CheckOut = () => {
        alert("Order Placed Successfully")
    }

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async() => {
       console.log("Hello")
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
                    <h1>My Shopping Bag</h1>
                </div>
                <div>
                    <p>Bag ID:679810249</p>
                    <p>Need help?</p>
                    <button onClick={CheckOut} >CHECKOUT NOW</button>
                </div>
            </div>
            <div className='freeShipping' >
                <TbTruck color='#c0c8c2' fontSize='40px' /> <p>FREE SHIPPING ON ALL $50+ ORDERS + FREE RETURNS EVERYDAY</p>
            </div>
            <div className='cartPageContainer' >
                <div className='cartList' >
                 
                </div>
                <div className='checkoutContainer' >
                    <p><span>Subtotal</span><span>$</span> </p>
                    <p><span>Taxes</span><span>$0.00</span></p>
                    <p><span>Estimated total</span><span style={{ color: "black" }} >$</span></p>
                    <h3>Nurses, Medical Professionals, Military, First Responders, and Airline Employees receive a discount with ID.me</h3>
                    <img id='verifyId' src="https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme.png" alt="" />
                    <button onClick={CheckOut} >CHECKOUT NOW</button>
                    <span className='acptPtm' >Accepted Payment Methods</span>
                    <div>
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterPaypal" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterVisa" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterMastercardv2" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterDiscoverCard2020b" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterAmericanExpress2020b" alt="" />
                        <img src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" />
                    </div>
                </div>
            </div>
            <div className='scrollTopContainer' >
                <div>
                    <button>SCROLL TO TOP</button>
                    <button>|</button>
                    <button>CONTACT US</button>
                </div>
                <div>
                    <button>CLARKS NEWSLETTER</button>
                    <input type="text" placeholder='Enter email address' />
                    <button>{'>'}</button>
                </div>
            </div>
        </div>
    )
}
