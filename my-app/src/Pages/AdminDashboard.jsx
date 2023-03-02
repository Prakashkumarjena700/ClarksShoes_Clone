import React, { useEffect, useState } from 'react'

import AddProduct from '../Components/AdminComponents/AddProduct'
import Customer from '../Components/AdminComponents/Customer'
import Dashboard from '../Components/AdminComponents/Dashboard'
import Inventory from '../Components/AdminComponents/Inventory'

import "../Css/AdminDashboard.css"

import { MdOutlineInventory } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';



export default function AdminDashboard() {
  const [showDashboard, setShowDashboard] = useState(true)
  const [showInvertory, setShowInvertory] = useState(false)
  const [showCustomer, setShowCustomer] = useState(false)
  const [showAddproducts, setShowAddproducts] = useState(false)




  const FNshowDashboard = () => {
    setShowDashboard(true)
    setShowInvertory(false)
    setShowCustomer(false)
    setShowAddproducts(false)
  }

  const FNshowInvertory = () => {
    setShowDashboard(false)
    setShowInvertory(true)
    setShowCustomer(false)
    setShowAddproducts(false)
  }

  const FNshowCustomer = () => {
    setShowDashboard(false)
    setShowInvertory(false)
    setShowCustomer(true)
    setShowAddproducts(false)
  }

  const FNshowAddproduct = () => {
    setShowDashboard(false)
    setShowInvertory(false)
    setShowCustomer(false)
    setShowAddproducts(true)
  }

  return (
    <div className='ADdashboard' >
      <div className='ADoptions' >
        <button onClick={FNshowDashboard} className={showDashboard && 'showActiv'}><RxDashboard /> <span>Dashboard</span></button>
        <button onClick={FNshowInvertory} className={showInvertory && 'showActiv'}> <MdOutlineInventory /><span>Inventory</span></button>
        <button onClick={FNshowCustomer} className={showCustomer && 'showActiv'}><FiUsers /> <span>Customers</span></button>
        <button onClick={FNshowAddproduct} className={showAddproducts && 'showActiv'} ><AiOutlineAppstoreAdd /> <span>Add Product</span></button>
      </div>
      <div className='ADresult' >
        {showDashboard ? <Dashboard /> : showCustomer ? <Customer /> : showAddproducts ? <AddProduct /> : <Inventory />}
      </div>
    </div>
  )
}
