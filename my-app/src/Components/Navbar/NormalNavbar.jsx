import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


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


export default function NormalNavbar() {
    const [womenDropDown, setwomenDropdown] = useState(false)
    const [menDropDown, setmenDropdown] = useState(false)
    const [kidsDropDown, setKidsDropdown] = useState(false)
    const [originalsDropDown, setOriginalsDropDown] = useState(false)
    const [accessoriesDropDown, setAccessoriesDropDown] = useState(false)
    const [saleDropDown, setSaleDropDown] = useState(false)
    const [sustainabilityDropDown, setSustainabilityDropDown] = useState(false)

    const cartValue = useSelector((store) => store.cart.cart.length)


    const [showSearchBtn, setShowSearchBtn] = useState(false)
    const [showSearchbar, setShowSearchbar] = useState(false)

    const showSearch = () => {
        setShowSearchBtn(!showSearchBtn)
        setShowSearchbar(!showSearchbar)
    }

    return (
        <div className='wholeNavbar' >
            <div className='navbarTopSection' >
                <p><BsTruck color='#666666' />Track Order</p>
                <p><CiLocationOn color='#666666' /><span>Store Locator</span></p>
                <p><HiOutlineUserCircle color='#666666' /><Link to='/login'>Log in / Register</Link></p>
            </div>
            <div className='navbarContainer' >
                <Link to='/' ><img width='170px' src={logo} alt="" /></Link>
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
                                <div key={ele.id} >{ele.title}</div>
                            )
                        })
                    }
                </div>
                <div className='twoBtn' >
                    <button onClick={showSearch} >{showSearchBtn ? <RxCross1 /> : <FiSearch />}</button>
                    <button><Link to='/cart'><SlHandbag  /></Link> </button>
                    <p id='cartValue' >{cartValue}</p>
                </div>
            </div>
            {showSearchbar && <div className='searchBar' >
                <Input focusBorderColor="blue.500" type="text" placeholder='Search' />
            </div>}
            {/* <div className='searchResult'>
                <div style={{ border: '1px solid red', height: '100px' }} ></div>
                <div style={{ border: '1px solid red', height: '100px' }} ></div>
                <div style={{ border: '1px solid red', height: '100px' }} ></div>
                <div style={{ border: '1px solid red', height: '100px' }} ></div>
                <div style={{ border: '1px solid red', height: '100px' }} ></div>
            </div> */}
        </div>
    )
}
