import React from 'react'

import "../Css/Admin.css"

import { BsPlusSquare } from "react-icons/bs"
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



export default function Admin() {
    const navigate = useNavigate()

    const add = () => {
        navigate('/addproduct')
    }

    const edit = () => {
        navigate('/')
    }

    const delet = () => {
        navigate("/")
    }
    return (
        <>
            <div className='myshopingBag' >
                <h1>Admin Dashboard</h1>
            </div>
            <div className='adminpage' >
                <div onClick={add} >
                    <BsPlusSquare />
                    Add
                </div>
                <div onClick={edit} >
                    <AiOutlineEdit />
                    Edit
                </div>
                <div onClick={delet} >
                    <AiOutlineDelete />
                    Delete
                </div>
            </div>
        </>

    )
}
