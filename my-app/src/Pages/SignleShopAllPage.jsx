import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewProdect from '../Components/ViewProdect'
import '../Css/SinglePage.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/action'

import { MdStar } from "react-icons/md";

const getData = (url) => {
    return axios.get(url)
}

export default function SignleMenPage() {
    const { id } = useParams()
    const [menobj, setMenObj] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        getData(`https://prakash-vercel-database.vercel.app/clarksAll/${id}`)
            .then((res) => setMenObj(res.data))
    }, [id])



    return (
        <div>
            <div className='showProductContainer' >
                <div>
                    <img className='offerLogo' src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22_285_E%201_12ClearancePhase3_Badge_V2?fmt=jpg" alt="" />

                    <ViewProdect
                        img1={menobj.img1}
                        img2={menobj.img2}
                        img3={menobj.img3}
                        img4={menobj.img4}
                        img5={menobj.img5}
                    />
                </div>
                <div className='productDetailsContainer' >
                    <h2>{menobj && menobj.name} {menobj && menobj.dis}</h2>
                    <p>{menobj && menobj.prePrice1}</p>
                    <p>SALE PRICE: ${menobj && menobj.saleprice}</p>
                    <p>WITH CODE: EXTRA40</p>
                    <p><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /></p>
                    <p>COLOR {menobj && menobj.color}</p>
                    <br />
                    <p>SELECT SIZE</p>
                    <div>
                        <p>7</p>
                        <p>7½</p>
                        <p>8</p>
                        <p>8½</p>
                        <p>9</p>
                        <p>9½</p>
                        <p>10</p>
                        <p>10½</p>
                        <p>11</p>
                        <p>11½</p>
                        <p>12</p>
                        <p>12½</p>
                        <p>13</p>
                        <p>13½</p>
                    </div>
                    <p>SELECT WIDTH</p>
                    <button>Medium</button>
                    <button onClick={() => dispatch(addProduct(menobj))} ><p onClick={() => alert("Product Added")} >Add to shopping bag</p></button>
                    <button> <img width='60px' src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" /> 4 interest-free payments of $36.24. Learn More</button>
                </div>
            </div>

        </div>
    )
}
