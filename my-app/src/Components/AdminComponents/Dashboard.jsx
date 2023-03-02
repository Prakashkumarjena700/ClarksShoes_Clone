import React, { useEffect, useState } from 'react'


import { HiOutlineClipboardList } from "react-icons/hi"
import { FiUsers } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from "react-icons/md"

export default function Dashboard() {
    const [usersData, setusersData] = useState(0)
    const [productData, setProductData] = useState(0)

    useEffect(() => {
        getUserData()
        getProductData()
    }, [])

    const getUserData = async () => {
        try {
            await fetch("https://witty-loafers-elk.cyclic.app/users")
                .then(res => res.json())
                .then(res => setusersData(res.length))
        } catch (res) {
            console.log("Error")
        }
    }
    const getProductData = async () => {
        try {
            await fetch("https://witty-loafers-elk.cyclic.app/data")
                .then(res => res.json())
                .then(res => setProductData(res.length))
        } catch (res) {
            console.log("Error")
        }
    }

    return (
        <div>
            <div className='detailsOfFourFild' >
                <div>
                    <h2><HiOutlineClipboardList />Products </h2>
                    <p>{productData}</p>
                </div>
                <div>
                    <h2><FiUsers />Customers</h2>
                    <p>{usersData}</p>
                </div>
                <div>
                    <h2><AiOutlineShoppingCart />Order</h2>
                    <p>50</p>
                </div>
                <div>
                    <h2><MdOutlineAdminPanelSettings />Admin</h2>
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}
