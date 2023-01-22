import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProducet, checkOut } from "../Redux/action"
import { Link, useNavigate } from 'react-router-dom'

import { TbTruck } from 'react-icons/tb'

import '../Css/CartPage.css'

export default function CartPage() {
    const cartArr = useSelector((stor) => stor.cart.cart)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [bagArr, setBagArr] = useState(cartArr)

    const totalCart = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].saleprice * arr[i].quentity
        }
        return sum
    }


    const Increment = (id) => {
        let ans = bagArr.map((ele, i) => {
            if (i === id) {
                ele.quentity++
            }
            return ele
        })

        setBagArr(ans)
    }

    const Decrement = (id) => {
        let ans = bagArr.map((ele, i) => {
            if (i === id && ele.quentity !== 0) {
                ele.quentity--
            }
            return ele
        })

        setBagArr(ans)
    }

    const RemoveProcuct = (id) => {
        let ans = bagArr.filter((ele) => {
            return ele.id !== id
        })
        setBagArr(ans)
        dispatch(removeProducet(id))
    }

    const CheckOut = () => {
        setBagArr([])
        dispatch(checkOut())
        alert("Order Placed Successfully")
        navigate("/")
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
                    {
                        bagArr && bagArr.map((ele, i) =>
                            <div className='cartListCard'>
                                <div>
                                    <img src={ele.img1} alt="" />
                                </div>
                                <div>
                                    <p><span style={{ fontSize: "20px" }} >{ele.name} </span>&nbsp; &nbsp; &nbsp;<span style={{ textDecoration: "line-through", fontWeight: '500' }} >{ele.prePrice1}</span> <span style={{ fontWeight: "500", color: "red" }} >${ele.saleprice}</span> </p>
                                    <p style={{ color: "gray" }} >{ele.color}</p>
                                    <p style={{ color: "gray" }} >Size : Medium</p>
                                    <div className='quentityBtns' >
                                        <button onClick={() => Decrement(i)} >-</button>
                                        <button>{ele.quentity}</button>
                                        <button onClick={() => Increment(i)} >+</button>
                                    </div>
                                    <button style={{ color: "#0579d0", textDecoration: "underline" }} onClick={() => RemoveProcuct(ele.id)} >Remove</button>
                                </div>
                            </div>)
                    }
                </div>
                <div className='checkoutContainer' >
                    <p><span>Subtotal</span><span>${totalCart(bagArr)}</span> </p>
                    <p><span>Taxes</span><span>$0.00</span></p>
                    <p><span>Estimated total</span><span style={{ color: "black" }} >${totalCart(bagArr)}</span></p>
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
