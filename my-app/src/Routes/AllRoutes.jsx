import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../Pages/AddProduct'
import AdminDashboard from '../Pages/AdminDashboard'
import AdminRegister from '../Pages/AdminRegister'
import CartPage from '../Pages/CartPage'
import EarthDay from '../Pages/EarthDay'
import EditProduct from '../Pages/EditProduct'
import EveryMoveMatters from '../Pages/EveryMoveMatters'
import Home from '../Pages/Home'
import KidsSearch from '../Pages/KidsSearch'
import KindPage from '../Pages/KindPage'
import LeatherWork from '../Pages/LeatherWork'
import Login from '../Pages/Login'
import MenAccessories from '../Pages/MenAccessories'
import MensPage from '../Pages/MensPage'
import MensSearchPage from '../Pages/MensSearchPage'
import Origin from '../Pages/Origin'
import Original from '../Pages/Original'
import Originals from '../Pages/Originals'
import OriginalsSeven from '../Pages/OriginalsSeven'
import Register from '../Pages/Register'
import SeeDetails from '../Pages/SeeDetails'
import SeeDetails60Persent from '../Pages/SeeDetails60Persent'
import ShopAllPage from '../Pages/ShopAllPage'
import SignleKidPage from '../Pages/SignleKidPage'
import SignleMenPage from '../Pages/SignleMenPage'
import SignleShopAllPage from '../Pages/SignleShopAllPage'
import SingleMenAccessories from '../Pages/SingleMenAccessories'
import SingleWomenAccessories from '../Pages/SingleWomenAccessories'
import SignleWomenPage from '../Pages/SingleWomenPage'
import TriNativ from '../Pages/TriNativ'
import WomensAccessories from '../Pages/WomensAccessories'
import WomensPage from '../Pages/WomensPage'
import WomensSearch from '../Pages/WomensSearch'

import PrivateRoute from "./PrivateRoute"

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
            <Route path='/womenssearch/:id' element={<SignleWomenPage />} ></Route>
            <Route path='/menssearch' element={<MensSearchPage />} ></Route>
            <Route path='/menssearch/:id' element={<SignleMenPage />} ></Route>
            <Route path='/kidssearch' element={<KidsSearch />} ></Route>
            <Route path='/kidssearch/:id' element={<SignleKidPage />} ></Route>
            <Route path='/seedetails60' element={<SeeDetails60Persent />} ></Route>
            <Route path='/cart' element={<CartPage />} ></Route>
            <Route path='/shopall' element={<ShopAllPage />} ></Route>
            <Route path='/shopall/:id' element={<SignleShopAllPage />} ></Route>
            <Route path='/seedetails' element={<SeeDetails />} ></Route>
            <Route path='menaccessories' element={<MenAccessories />} ></Route>
            <Route path='/manaccessories/:id' element={<SingleMenAccessories />} ></Route>
            <Route path='/womensaccessories' element={<WomensAccessories />}></Route>
            <Route path='/womensaccessories/:id' element={<SingleWomenAccessories />} ></Route>
            <Route path='/everyMovematters' element={<EveryMoveMatters />} ></Route>
            <Route path='/earthday' element={<EarthDay />} ></Route>
            <Route path='/origin' element={<Origin />} ></Route>
            <Route path='/leatherwork' element={<LeatherWork />} ></Route>
            <Route path='/original' element={<Original />} ></Route>
            <Route path='/originalsseven' element={<OriginalsSeven />} ></Route>
            <Route path='/trinativ' element={<TriNativ />} ></Route>
            <Route path='/admindashboard' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} ></Route>
            <Route path='/addproduct' element={<AddProduct />} ></Route>
            <Route path='/editproduct' element={<EditProduct />} ></Route>
        </Routes>
    )
}
