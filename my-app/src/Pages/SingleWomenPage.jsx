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

export default function SignleWomenPage() {
    const { id } = useParams()
    const [obj, setobj] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        getData(`https://witty-loafers-elk.cyclic.app/data/${id}`)
            .then((res) => setobj(res.data[0]))
    }, [id])


    console.log(id)

    return (
        <div>
            <div className='showProductContainer' >
                <div>
                    <img className='offerLogo' src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22_285_E%201_12ClearancePhase3_Badge_V2?fmt=jpg" alt="" />

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
                    <p>{obj && obj.prePrice1}</p>
                    <p>SALE PRICE: ${obj && obj.price}</p>
                    <p>WITH CODE: EXTRA40</p>
                    <p><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /><MdStar color='#0579d0' fontSize='20px' /></p>
                    <p>COLOR {obj && obj.color}</p>
                    <br />
                    <p>SELECT SIZE</p>
                    <div>
                        {
                            obj.size && obj.size.map((ele) => <p>{ele}</p>)
                        }
                    </div>
                    <p>SELECT WIDTH</p>
                    <button>Medium</button>
                    <button onClick={() => dispatch(addProduct(obj))} ><p onClick={() => alert("Product Added")} >Add to shopping bag</p></button>
                    <button> <img width='60px' src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" /> 4 interest-free payments of $36.24. Learn More</button>
                </div>
            </div>

        </div>
    )
}
