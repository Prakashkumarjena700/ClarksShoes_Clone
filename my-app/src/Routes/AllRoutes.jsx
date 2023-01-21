import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import KidsSearch from '../Pages/KidsSearch'
import KindPage from '../Pages/KindPage'
import Login from '../Pages/Login'
import MensPage from '../Pages/MensPage'
import MensSearchPage from '../Pages/MensSearchPage'
import Originals from '../Pages/Originals'
import Register from '../Pages/Register'
import SeeDetails60Persent from '../Pages/SeeDetails60Persent'
import WomensPage from '../Pages/WomensPage'
import WomensSearch from '../Pages/WomensSearch'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/womenspage' element={<WomensPage />} />
            <Route path='/menspage' element={<MensPage />} ></Route>
            <Route path='/originals' element={<Originals />} ></Route>
            <Route path='/kidspage' element={<KindPage />} ></Route>
            <Route path='/womenssearch' element={<WomensSearch />} ></Route>
            <Route path='/menssearch' element={<MensSearchPage />} ></Route>
            <Route path='/kidssearch' element={<KidsSearch />} ></Route>
            <Route path='/seedetails60' element={<SeeDetails60Persent />} ></Route>
        </Routes>
    )
}
