import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import CartPage from '../Pages/CartPage'
import EarthDay from '../Pages/EarthDay'
import EveryMoveMatters from '../Pages/EveryMoveMatters'
import Home from '../Pages/Home'
import KindPage from '../Pages/KindPage'
import LeatherWork from '../Pages/LeatherWork'
import Login from '../Pages/Login'
import MensPage from '../Pages/MensPage'
import Origin from '../Pages/Origin'
import Original from '../Pages/Original'
import Originals from '../Pages/Originals'
import OriginalsSeven from '../Pages/OriginalsSeven'
import ProductsPage from '../Pages/ProductsPage'
import Register from '../Pages/Register'
import SeeDetails from '../Pages/SeeDetails'
import SignleProductPage from '../Pages/SingleProductPage'
import TriNativ from '../Pages/TriNativ'
import WomensPage from '../Pages/WomensPage'
import PrivateRoute from "./PrivateRoute"

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            
            <Route path='/womenspage' element={<WomensPage />} />
            <Route path='/menspage' element={<MensPage />} ></Route>
            <Route path='/kidspage' element={<KindPage />} ></Route>
            <Route path='/originals' element={<Originals />} ></Route>
          
            <Route path='/everyMovematters' element={<EveryMoveMatters />} ></Route>
            <Route path='/earthday' element={<EarthDay />} ></Route>
            <Route path='/origin' element={<Origin />} ></Route>
            <Route path='/leatherwork' element={<LeatherWork />} ></Route>
            <Route path='/original' element={<Original />} ></Route>
            <Route path='/originalsseven' element={<OriginalsSeven />} ></Route>
            <Route path='/trinativ' element={<TriNativ />} ></Route>
          
            <Route path='/productspage' element={<ProductsPage />} ></Route>
            <Route path='/productspage/:id' element={<SignleProductPage />} ></Route>
            
            <Route path='/cart' element={<CartPage />} ></Route>
           
            <Route path='/seedetails' element={<SeeDetails />} ></Route>
            
            <Route path='/admindashboard' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} ></Route>

           </Routes>
    )
}
