import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar
} from '@chakra-ui/react'


import { BsTruck } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { SlHandbag } from 'react-icons/sl'
import { RxCross1 } from 'react-icons/rx'



import './Navbar.css'
import { WomenDropDown, MenDropDown, KidsDropDown, OriginalsDropDown, AccessoriesDropDown, SaleDropDown, SustainabilityDropDown } from "./DropDown"
import { mainItem } from "./NavbarItem"
import logo from "../Photos/logo.png"
import { Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { LoggerContext } from '../../Context/LoggerContextProvider';
import { ProductPageContext } from '../../Context/ProductPageContext';


export default function NormalNavbar() {
    const [womenDropDown, setwomenDropdown] = useState(false)
    const [menDropDown, setmenDropdown] = useState(false)
    const [kidsDropDown, setKidsDropdown] = useState(false)
    const [originalsDropDown, setOriginalsDropDown] = useState(false)
    const [accessoriesDropDown, setAccessoriesDropDown] = useState(false)
    const [saleDropDown, setSaleDropDown] = useState(false)
    const [sustainabilityDropDown, setSustainabilityDropDown] = useState(false)

    const { setCartCount } = useContext(ProductPageContext)

    const [displayResult, setDisplayResult] = useState(false)

    const [showLogout, setShowLogout] = useState(false)

    const [query, setQuery] = useState(null)


    const Navigate = useNavigate()

    const { cartCount } = useContext(ProductPageContext)

    const { userType, user, setUser, setUserType, setIsAuth, isAuth, usermail, userImg, setuserImg, setusermail } = useContext(LoggerContext)

    const logoutFn = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userType')
        localStorage.removeItem('isAuth')
        localStorage.removeItem('usermail')
        localStorage.removeItem('userImg')
        localStorage.removeItem('token')
        setShowLogout(false)
        setUser('')
        setIsAuth(false)
        setUserType('user')
        setuserImg('')
        setusermail('')
        setCartCount(0)
        Navigate("/login")
    }
    return (
        <div className='wholeNavbar' >
            <div className='navbarTopSection' >
                <p><BsTruck color='#666666' /><span className='displaunoteSection' >Track Order</span></p>
                <p><CiLocationOn color='#666666' /><span className='displaunoteSection' >Store Locator</span></p>
                <Menu  >
                    <MenuButton as={Button} size="sm" >
                        <p><HiOutlineUserCircle color='#666666' />{user === '' ? 'Login/Register' : <p >{user}</p>}</p>
                    </MenuButton>
                    <MenuList>
                        <MenuItem> {userImg !== '' && <Avatar size='2xl' m="auto" src={userImg} />}</MenuItem>
                        <MenuItem>{user}</MenuItem>
                        <MenuItem>{usermail}</MenuItem>
                        {userType == 'admin' && isAuth && <MenuItem onClick={() => Navigate("/admindashboard")} >Admin Dashboard</MenuItem>}
                        <MenuItem onClick={() => Navigate("/register")} >Register</MenuItem>
                        {user !== '' && <MenuItem onClick={logoutFn} >Logout</MenuItem>}
                        <MenuItem onClick={() => Navigate("/login")} >Login</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className='navbarContainer' >
                <Link style={{ zIndex: "21", marginRight: '30px' }} to='/' ><img width='100px' className='logoinNav' src='https://1000logos.net/wp-content/uploads/2021/05/Clarks-logo.png' alt="" /></Link>
                <div className='navbar' >
                    {
                        mainItem.map((ele) => {
                            if (ele.title === 'Women') {
                                return (
                                    <div
                                        onMouseEnter={() => setwomenDropdown(true)}
                                        onMouseLeave={() => setwomenDropdown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {womenDropDown && <WomenDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Men') {
                                return (
                                    <div
                                        onMouseEnter={() => setmenDropdown(true)}
                                        onMouseLeave={() => setmenDropdown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {menDropDown && <MenDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Kids') {
                                return (
                                    <div
                                        onMouseEnter={() => setKidsDropdown(true)}
                                        onMouseLeave={() => setKidsDropdown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {kidsDropDown && <KidsDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Originals') {
                                return (
                                    <div
                                        onMouseEnter={() => setOriginalsDropDown(true)}
                                        onMouseLeave={() => setOriginalsDropDown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {originalsDropDown && <OriginalsDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Accessories') {
                                return (
                                    <div
                                        onMouseEnter={() => setAccessoriesDropDown(true)}
                                        onMouseLeave={() => setAccessoriesDropDown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {accessoriesDropDown && <AccessoriesDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Sale') {
                                return (
                                    <div
                                        onMouseEnter={() => setSaleDropDown(true)}
                                        onMouseLeave={() => setSaleDropDown(false)}
                                        key={ele.title}
                                    >   <p >{ele.title}</p>
                                        {saleDropDown && <SaleDropDown />}
                                    </div>
                                )
                            }
                            if (ele.title === 'Sustainability') {
                                return (
                                    <div
                                        onMouseEnter={() => setSustainabilityDropDown(true)}
                                        onMouseLeave={() => setSustainabilityDropDown(false)}
                                        key={ele.title}
                                    >   <p>{ele.title}</p>
                                        {sustainabilityDropDown && <SustainabilityDropDown />}
                                    </div>
                                )
                            }
                            return (
                                <div key={ele.key} >{ele.title}</div>
                            )
                        })
                    }
                </div>
                <div className='twoBtn' >
                    <button style={{ zIndex: "21" }} ><Link to='/cart' ><SlHandbag /></Link> </button>
                    <p id='cartValue' style={{ zIndex: "21" }} > <Link to='/cart' >{cartCount}</Link> </p>
                </div>
            </div>


        </div>
    )
}
