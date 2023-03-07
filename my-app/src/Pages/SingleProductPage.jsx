import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewProdect from '../Components/ViewProdect'
import '../Css/SinglePage.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/action'

import { useToast } from '@chakra-ui/react'

import { MdStar } from "react-icons/md";

const getData = (url) => {
    return axios.get(url)
}

export default function SignleProductPage() {
    const { id } = useParams()
    const [obj, setobj] = useState({})
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const toast = useToast()

    const [size, setSize] = useState('')
    const [showSizealert, setshowSizealert] = useState(false)



    useEffect(() => {
        getData(`https://witty-loafers-elk.cyclic.app/data/${id}`)
            .then((res) => setobj(res.data[0]))
    }, [id])

    const AddtoCart = () => {
        setLoading(true)
        let cartPayload = {
            name: obj.name,
            price: obj.price,
            color: obj.color,
            size,
            gender: obj.gender,
            type: obj.type,
            quentity: 1,
            img1: obj.img1,
        }
        if (size == '') {
            setshowSizealert(true)
            setLoading(false)
        } else {
            setshowSizealert(false)
            fetch(`https://witty-loafers-elk.cyclic.app/cart/add`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(cartPayload)
            })
                .then(res => res.json())
                .then(res => {
                    setLoading(false)
                    if (res.msg === 'Product has been added to cart') {
                        toast({
                            position: 'top',
                            variant: 'top-accent',
                            title: 'Added Sucessful',
                            description: "Product has been added into cart",
                            status: 'success',
                            duration: 5000,
                            isClosable: true
                        })
                    } else {
                        toast({
                            position: 'top',
                            variant: 'top-accent',
                            title: 'Something went wrong',
                            description: `Login to add product`,
                            status: 'error',
                            duration: 5000,
                            isClosable: true
                        })
                        setLoading(false)
                    }
                }).catch(err => setLoading(false))
        }
    }


    return (
        <div>
            <div className='showProductContainer' >
                <div>
                    <ViewProdect
                        img1={obj.img1}
                        img2={obj.img2}
                        img3={obj.img3}
                        img4={obj.img4}
                        img5={obj.img5}
                    />
                </div>
                <div className='productDetailsContainer' >
                    <h2>{obj && obj.name}</h2>
                    <p>${obj && obj.price}.00</p>
                    <p><MdStar color='#F3F3F3' fontSize='35px' /><MdStar color='#F3F3F3' fontSize='35px' /><MdStar color='#F3F3F3' fontSize='35px' /><MdStar color='#F3F3F3' fontSize='35px' /><MdStar color='#F3F3F3' fontSize='35px' /></p>
                    <p><span style={{ fontSize: '20px' }} >COLOR </span> {obj && obj.color}</p>
                    <br />
                    <p>{showSizealert ? <p style={{ color: 'red' }} >Please select a size</p> : 'SELECT SIZE'}</p>
                    <div>
                        {
                            obj.size && obj.size.map((ele) => <p className={ele == size && 'sizeBackground'} onClick={() => setSize(ele)} >{ele}</p>)
                        }
                    </div>
                    <p>SELECT WIDTH</p>
                    <button>Medium</button>
                    <button onClick={AddtoCart} className={loading && 'loading'} disabled={loading && true} >Add to shopping bag</button>
                    <button> <img width='60px' src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" /> 4 interest-free payments of $36.24. Learn More</button>
                </div>
            </div>
            <div className='productDiscription' >
                <div>
                    <h2>Product description</h2>
                    <p>{obj.dis}</p>
                </div>
                <div>
                    <h3>Delivery and Returns</h3>
                    <div>
                        <div>
                            <span>FREE</span>
                            <p>(on $50+) FedEx SmartPost Delivery (Within 7-10 business days)*</p>
                            <span>$8.95</span>
                            <p>FedEx Ground Delivery (Within 3-6 business days)*</p>
                            <span>$18.00</span>
                            <p>FedEx 2 Day Delivery (Within 2 business days. Order before 2pm EST)*</p>
                            <span>$26.00</span>
                            <p>FedEx Next Day Delivery (Within 1 business day. Order before 2pm EST)*</p>
                            <span>$20.00</span>
                            <p>USPS Delivery (Within 8-12 business days. Available for APO/FPO and US Territory addresses only)</p>
                            <span>FREE</span>
                            <p>Returns on all items</p>
                        </div>
                        <h4>* Orders delivering to Hawaii & Alaska must select Express shipping. We are unable to ship FedEx Ground, Next Day or Two Day orders to a PO Box.</h4>
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
