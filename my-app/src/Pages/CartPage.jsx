import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Input } from '@chakra-ui/react'

import { TbTruck } from 'react-icons/tb'

import '../Css/CartPage.css'
import { ProductPageContext } from '../Context/ProductPageContext'

export default function CartPage() {

    const { cartCount, setCartCount } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()


    const [cartData, setCartData] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [showPyment, setShowPyment] = useState(false)
    const [houseName, setHouseName] = useState('')
    const [state, setState] = useState('')
    const [pin, setPin] = useState('')
    const [mobil, setMobil] = useState('')
    const [payment, setPayment] = useState('')

    const [Cn, setCn] = useState('')
    const [CVn, setCvn] = useState('')
    const [Chn, setChn] = useState('')

    const toast = useToast()

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
                        title: 'Quantity decreased successfully',
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
                        title: 'Quantity increased successfully',
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

    const confromAddress = () => {
        if (houseName === '' || state === '' || pin === '' || mobil === '') {
            toast({
                position: 'top',
                variant: 'top-accent',
                title: 'Missing info',
                description: "Please fill all the information",
                status: 'info',
                duration: 5000,
                isClosable: true
            })
        } else {
            setShowPyment(true)
        }
    }

    const checkoutSucess = async (id, obj) => {
        await fetch(`https://witty-loafers-elk.cyclic.app/checkout/add/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": localStorage.getItem("token"),
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const confromPment = () => {
        if (payment === '') {
            toast({
                position: 'top',
                variant: 'top-accent',
                title: 'Missing info',
                description: "Please fill choos payment method",
                status: 'info',
                duration: 5000,
                isClosable: true
            })
        } else {
            if (payment === 'COD') {
                let checkouts = cartData.map((ele) => { return ele._id })

                // const { payment, user } = req.body
                let address = houseName + ', ' + state + ', ' + pin
                let phone = mobil

                let obj = {
                    address,
                    phone,
                    payment
                }

                checkouts.map((ele) =>
                    checkoutSucess(ele, obj)
                )
                setCartCount(0)
                toast({
                    title: 'Checkout Sucessful',
                    description: "You can see those product in your order section",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
                navigate('/')
            } else {
                if (Cn == '' || CVn == '' || Chn == '') {
                    toast({
                        position: 'top',
                        variant: 'top-accent',
                        title: 'Missing info',
                        description: "Please fill all the information",
                        status: 'info',
                        duration: 5000,
                        isClosable: true
                    })
                } else {
                    let checkouts = cartData.map((ele) => { return ele._id })

                    // const { payment, user } = req.body
                    let address = houseName + ', ' + state + ', ' + pin
                    let phone = mobil

                    let obj = {
                        address,
                        phone,
                        payment
                    }

                    checkouts.map((ele) =>
                        checkoutSucess(ele, obj)
                    )
                    setCartCount(0)
                    toast({
                        title: 'Checkout Sucessful',
                        description: "You can see those product in your order section",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                    })
                    navigate('/')
                }
            }
        }
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
                    <button onClick={onOpen} >CHECKOUT NOW</button>
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
                    {/* <button onClick={CheckOut} ></button> */}
                    <button onClick={onOpen}>CHECKOUT NOW</button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                                {
                                    showPyment ?
                                        <div className='checkoutModal' >
                                            <h2>Pyment</h2>
                                            <span style={payment === 'Card' ? { backgroundColor: 'red' } : { backgroundColor: 'gray' }} onClick={() => setPayment('Card')} >Credit / Debit Card</span>
                                            <span style={payment === 'COD' ? { backgroundColor: 'red' } : { backgroundColor: 'gray' }} onClick={() => setPayment('COD')} >COD</span>
                                            {
                                                payment === 'Card' &&
                                                <div>
                                                    <Input onChange={(e) => setCn(e.target.value)} mt='2' mb='2' type="number" placeholder='Card Number' />
                                                    <Input onChange={(e) => setCvn(e.target.value)} mb='2' type="number" placeholder='CVV Numver' />
                                                    <Input onChange={(e) => setChn(e.target.value)} mb='2' type="text" placeholder='Card Holder Name' />
                                                </div>
                                            }
                                            <button onClick={confromPment} >Confirm pyment</button>
                                        </div> :
                                        <div className='checkoutModal' >
                                            <h2>Address</h2>
                                            <Input mb='2' placeholder='House name / Street name' onChange={(e) => setHouseName(e.target.value)} />
                                            <Input mb='2' placeholder='State' onChange={(e) => setState(e.target.value)} />
                                            <Input mb='2' placeholder='Pin' onChange={(e) => setPin(e.target.value)} />
                                            <Input mb='2' placeholder='Mobile' onChange={(e) => setMobil(e.target.value)} />
                                            <button onClick={confromAddress} >CONFIRM ADDRESS</button>
                                        </div>
                                }
                            </ModalBody>

                        </ModalContent>
                    </Modal>
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
