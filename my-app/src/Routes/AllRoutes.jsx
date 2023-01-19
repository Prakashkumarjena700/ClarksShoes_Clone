import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import KindPage from '../Pages/KindPage'
import Login from '../Pages/Login'
import MensPage from '../Pages/MensPage'
import Originals from '../Pages/Originals'
import Register from '../Pages/Register'
import WomensPage from '../Pages/WomensPage'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/> } ></Route>
            <Route path='/login' element={<Login/> } ></Route>
            <Route path='/register' element={<Register/> } ></Route>
            <Route path='/womenspage' element={<WomensPage/>} />
            <Route path='/menspage' element={<MensPage/>} ></Route>
            <Route path='/originals' element={<Originals/>} ></Route>
            <Route path='/kidspage' element={<KindPage/>} ></Route>
        </Routes>
    )
}
