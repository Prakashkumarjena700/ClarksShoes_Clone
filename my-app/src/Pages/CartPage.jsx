import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProducet, checkOut } from "../Redux/action"
import { Link, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

import { TbTruck } from 'react-icons/tb'

import '../Css/CartPage.css'
import { ProductPageContext } from '../Context/ProductPageContext'

export default function CartPage() {

    const { cartCount, setCartCount } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const [cartData, setCartData] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)

    const toast = useToast()

    const CheckOut = () => {
        alert("Order Placed Successfully")

    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await fetch(`https://witty-loafers-elk.cyclic.app/cart/usercart`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
            .then(res => {
                setCartData(res)
                let total = getTotal(res)
                setTotal(total)
            })
            .catch(err => console.log(err))
    }
    const QuentityDecresing = async (id) => {
        setLoading(true)
        const payload = { quentity: 1 }
        await fetch(`https://witty-loafers-elk.cyclic.app/cart/update/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => {
                setLoading(false)
                if (res.msg === "Product has been updated") {
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: ' quantity decreased successfully',
                        description: "Quantity has been decreased in your cart",
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                } else {
                    setLoading(false)
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Something went wrong',
                        description: `Login to add product`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true
                    })
                }
            }).then(res => getData())
            .catch(err => setLoading(false))
    }

    const QuentityIncresing = async (id) => {
        setLoading(true)
        const payload = { quentity: 2 }
        await fetch(`https://witty-loafers-elk.cyclic.app/cart/update/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => {
                setLoading(false)
                if (res.msg === "Product has been updated") {
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: ' quantity increased successfully',
                        description: "Quantity has been increased in your cart",
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                } else {
                    setLoading(false)
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Something went wrong',
                        description: `Login to add product`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true
                    })
                }
            }).then(res => getData())
            .catch(err => setLoading(false))
    }

    const DeletcartProdct = async (id) => {
        setLoading(true)
        await fetch(`https://witty-loafers-elk.cyclic.app/cart/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(res => res.json())
            .then(res => {
                setLoading(false)
                if (res.msg === 'Product has been removed from cart') {
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Removed Sucessfully',
                        description: "Product has been removed from cart",
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                } else {
                    setLoading(false)
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Something went wrong',
                        description: `Login to add product`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true
                    })
                }
            })
            .then(res => getData())
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
        setCartCount(cartCount - 1)

    }

    const getTotal = (arr) => {
        const totalAmount = arr.reduce((accumulator, item) => {
            return accumulator + item.price * item.quentity
        }, 0)
        return totalAmount
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
                        cartData && cartData.map((ele) =>
                            <div className='cartCard' >
                                <div>
                                    <img src={ele.img1} alt="" />
                                </div>
                                <div>
                                    <b>{ele.name}</b>
                                    <p>{ele.color}</p>
                                    <p>Size {ele.size}, Medium</p>
                                    <p className='priceinmedium' >${ele.price * ele.quentity}.00</p>
                                    <button disabled={ele.quentity == 1} id={loading && 'loadingCurser'} className={ele.quentity == 1 && 'disableStype'} onClick={() => QuentityDecresing(ele._id)} >-</button>
                                    <button>{ele.quentity}</button>
                                    <button disabled={ele.quentity == 2} id={loading && 'loadingCurser'} className={ele.quentity == 2 && 'disableStype'} onClick={() => QuentityIncresing(ele._id)} >+</button>
                                    <h3 id={loading && 'loadingCurser'} onClick={() => DeletcartProdct(ele._id)} >Remove</h3>
                                </div>
                                <div>
                                    <p>${ele.price * ele.quentity}.00</p>
                                </div>
                            </div>)
                    }
                </div>
                <div className='checkoutContainer' >
                    <p><span>Subtotal</span><span>${total}.00</span> </p>
                    <p><span>Taxes</span><span>$0.00</span></p>
                    <p><span>Estimated total</span><span style={{ color: "black" }} >${total}.00</span></p>
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
