import React, { useContext, useEffect } from 'react'
import SixtyPersentSale from '../Components/SixtyPersentSale'
import { Link } from 'react-router-dom'
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure
} from '@chakra-ui/react'

import "../Css/WomenSearch.css"

import { useState } from 'react'
import LoadingContainer from '../Components/LoadingContainer'
import { ProductPageContext } from '../Context/ProductPageContext'


export default function ProductsPage() {
    const [loading, setLoading] = useState(false)
    const [skip, setSkip] = useState(0)
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('')
    const [order, setOrder] = useState('')

    const { gender, setGender, type, setType, size, setSize, color, setColor, rating, setRating } = useContext(ProductPageContext)

    const [dataArr, setDataArr] = useState([])

    const genderFronLS = localStorage.getItem('gender')
    const typeFromLS = localStorage.getItem('type')


    useEffect(() => {
        getData()

    }, [gender, type, size, color, rating, skip, sort, order])



    const getData = async () => {
        let URL = `https://witty-loafers-elk.cyclic.app/data/?gender=${gender}&type=${type}&size=${size}&color=${color}&rating=${rating}&limit=9&skip=${skip}&sort=${sort}&order=${order}`

        setLoading(true)
        try {
            await fetch(URL)
                .then(res => res.json())
                .then(res => {
                    setDataArr(res)
                    setLoading(false)
                })
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const filterdrowser = () => {
        onClose()
    }

    const resetFilter = () => {
        setGender(genderFronLS)
        setType(typeFromLS)
        setColor(' ')
        setSize(' ')
    }

    const sortingFunction = (e) => {
        let val = e.target.value

        if (val == 'atz') {
            setSort('name')
            setOrder(1)
        } else if (val == 'zta') {
            setSort('name')
            setOrder(-1)
        } else if (val == 'rhtl') {
            setSort('rating')
            setOrder(-1)
        } else if (val == 'plth') {
            setSort('price')
            setOrder(1)
        } else if (val == 'phtl') {
            setSort('price')
            setOrder(-1)
        } else if (val == '') {
            setSort('')
            setOrder('')
        }
    }


    return (
        <div>
            <div className='homeFirstDiv' >
                <p><span>FREE SHIPPINGON</span> ORDERS OVER $50</p>
                <p>|</p>
                <p><span>FREE RETURNS</span> EVERYDAY</p>
            </div>
            <SixtyPersentSale />
            <div className='filterAndSort' >
                <div onClick={onOpen} >
                    <button ref={btnRef}>EDIT FILTERS</button>

                    <Drawer
                        isOpen={isOpen}
                        placement='top'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        size='full'
                    >

                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton color='white' />
                            <DrawerHeader bg='#666666' color='white' textAlign='center' >FILTER BY:</DrawerHeader>

                            <DrawerBody className='drawerBody' >
                                <details>
                                    <summary>GENDER</summary>
                                    <label ><input type="checkbox" onChange={() => setGender('Boy')} />BOYS</label>
                                    <label ><input type="checkbox" onChange={() => setGender('Girl')} />GIRLS</label>
                                    <label ><input type="checkbox" onChange={() => setGender('Men')} />MENS</label>
                                    <label ><input type="checkbox" onChange={() => setGender('Women')} />WOMENS</label>
                                    <label ><input type="checkbox" onChange={() => setGender('Unisex')} />UNISEX</label>
                                </details>
                                <details>
                                    <summary>PRODUCET TYPE</summary>
                                    <label ><input type="checkbox" onChange={() => setType('Boot')} />BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Sandal')} />SANDALS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Shoe')} />SHOES</label>
                                    <label ><input type="checkbox" onChange={() => setType('Sneaker')} />SNEAKERS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Desert Boot')} />DESERT BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Flat Sandals')} />FLAT SANDALS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Ankle Boot')} />ANKLE BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setType('Accessories')} />ACCESSORIES</label>
                                </details>
                                <details>
                                    <summary>SIZE </summary>
                                    <div className='SizeOptionDiv' >
                                        <label ><input type="checkbox" onChange={() => setSize('1')} />1</label>
                                        <label ><input type="checkbox" onChange={() => setSize('1.5')} />1½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('2')} />2</label>
                                        <label ><input type="checkbox" onChange={() => setSize('2.5')} />2½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('3')} />3</label>
                                        <label ><input type="checkbox" onChange={() => setSize('3.5')} />3½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('4')} />4</label>
                                        <label ><input type="checkbox" onChange={() => setSize('4.5')} />4½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('5')} />5</label>
                                        <label ><input type="checkbox" onChange={() => setSize('5.5')} />5½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('6')} />6</label>
                                        <label ><input type="checkbox" onChange={() => setSize('6.5')} />6½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('7')} />7</label>
                                        <label ><input type="checkbox" onChange={() => setSize('7.5')} />7½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('8')} />8</label>
                                        <label ><input type="checkbox" onChange={() => setSize('8.5')} />8½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('9')} />9</label>
                                        <label ><input type="checkbox" onChange={() => setSize('9.5')} />9½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('10')} />10</label>
                                        <label ><input type="checkbox" onChange={() => setSize('10.5')} />10½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('11')} />11</label>
                                        <label ><input type="checkbox" onChange={() => setSize('11.5')} />11½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('12')} />12</label>
                                        <label ><input type="checkbox" onChange={() => setSize('12.5')} />12½</label>
                                        <label ><input type="checkbox" onChange={() => setSize('12')} />13</label>
                                    </div>
                                </details>
                                <details>
                                    <summary>COLOR</summary>
                                    <label ><input type="checkbox" onChange={() => setColor('Black')} />BLACK</label>
                                    <label ><input type="checkbox" onChange={() => setColor('Gray')} />GRAY</label>
                                    <label ><input type="checkbox" onChange={() => setColor('White')} />WHITE</label>
                                </details>
                            </DrawerBody>

                            <DrawerFooter className='draeerFooter' >
                                <button onClick={onClose} >VIEW</button>
                                <button onClick={filterdrowser} >RESET FILTERS</button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div>
                    <select onChange={sortingFunction} >
                        <option value="">Sort by</option>
                        <option value="rhtl">Highest Rated</option>
                        <option value="atz">A-Z</option>
                        <option value="zta">Z-A</option>
                        <option value="plth">Price(Low-High)</option>
                        <option value="phtl">Price(High-Low)</option>
                    </select>
                </div>
            </div>
            <div className='SearchPageContainer' >
                <div className='filterContainer' >
                    <p>FILTER BY:</p>
                    <details>
                        <summary>PRODUCT TYPE <span>{'>'}</span></summary>
                        <label ><input type="checkbox" onChange={() => setType('Boot')} />BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setType('Sandal')} />SANDALS</label>
                        <label ><input type="checkbox" onChange={() => setType('Shoe')} />SHOES</label>
                        <label ><input type="checkbox" onChange={() => setType('Sneaker')} />SNEAKERS</label>
                        <label ><input type="checkbox" onChange={() => setType('Desert Boot')} />DESERT BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setType('Flat Sandals')} />FLAT SANDALS</label>
                        <label ><input type="checkbox" onChange={() => setType('Ankle Boot')} />ANKLE BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setType('Accessories')} />ACCESSORIES</label>
                    </details>
                    <details>
                        <summary>GENDER<span>{'>'}</span></summary>
                        <label ><input type="checkbox" onChange={() => setGender('Boy')} />BOYS</label>
                        <label ><input type="checkbox" onChange={() => setGender('Girl')} />GIRLS</label>
                        <label ><input type="checkbox" onChange={() => setGender('Men')} />MENS</label>
                        <label ><input type="checkbox" onChange={() => setGender('Women')} />WOMENS</label>
                        <label ><input type="checkbox" onChange={() => setGender('Unisex')} />UNISEX</label>

                    </details>
                    <details >
                        <summary>SIZE  <span>{'>'}</span> </summary>
                        <div className='SizeOptionDiv' >
                            <label ><input type="checkbox" onChange={() => setSize('1')} />1</label>
                            <label ><input type="checkbox" onChange={() => setSize('1.5')} />1½</label>
                            <label ><input type="checkbox" onChange={() => setSize('2')} />2</label>
                            <label ><input type="checkbox" onChange={() => setSize('2.5')} />2½</label>
                            <label ><input type="checkbox" onChange={() => setSize('3')} />3</label>
                            <label ><input type="checkbox" onChange={() => setSize('3.5')} />3½</label>
                            <label ><input type="checkbox" onChange={() => setSize('4')} />4</label>
                            <label ><input type="checkbox" onChange={() => setSize('4.5')} />4½</label>
                            <label ><input type="checkbox" onChange={() => setSize('5')} />5</label>
                            <label ><input type="checkbox" onChange={() => setSize('5.5')} />5½</label>
                            <label ><input type="checkbox" onChange={() => setSize('6')} />6</label>
                            <label ><input type="checkbox" onChange={() => setSize('6.5')} />6½</label>
                            <label ><input type="checkbox" onChange={() => setSize('7')} />7</label>
                            <label ><input type="checkbox" onChange={() => setSize('7.5')} />7½</label>
                            <label ><input type="checkbox" onChange={() => setSize('8')} />8</label>
                            <label ><input type="checkbox" onChange={() => setSize('8.5')} />8½</label>
                            <label ><input type="checkbox" onChange={() => setSize('9')} />9</label>
                            <label ><input type="checkbox" onChange={() => setSize('9.5')} />9½</label>
                            <label ><input type="checkbox" onChange={() => setSize('10')} />10</label>
                            <label ><input type="checkbox" onChange={() => setSize('10.5')} />10½</label>
                            <label ><input type="checkbox" onChange={() => setSize('11')} />11</label>
                            <label ><input type="checkbox" onChange={() => setSize('11.5')} />11½</label>
                            <label ><input type="checkbox" onChange={() => setSize('12')} />12</label>
                            <label ><input type="checkbox" onChange={() => setSize('12.5')} />12½</label>
                            <label ><input type="checkbox" onChange={() => setSize('12')} />13</label>
                        </div>
                    </details>
                    <details>
                        <summary>COLOR  <span>{'>'}</span> </summary>
                        <label ><input type="checkbox" onChange={() => setColor('Black')} />BLACK</label>
                        <label ><input type="checkbox" onChange={() => setColor('Gray')} />GRAY</label>
                        <label ><input type="checkbox" onChange={() => setColor('White')} />WHITE</label>
                    </details>
                    <button onClick={resetFilter} >RESET FILTER</button>
                </div>
                {
                    loading ? <LoadingContainer className='loadingContainer' /> : <div className='resultContainer' >
                        {
                            dataArr && dataArr.map((ele) =>
                                <Link to={`/productspage/${ele._id}`} key={ele._id} className='searchCard' >
                                    <img src={ele.img1} alt="" />
                                    <img src={ele.img3} alt="" />
                                    <div>
                                        <div>
                                            <p>{ele.name.substring(0, 20)}..</p>
                                            <p>{ele.color} {ele.type}</p>
                                            <p>{ele.gender}</p>
                                        </div>
                                        <div>
                                            <p>${ele.price}</p>
                                            <p>{ele.prePrice1}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                }
            </div>
            <div className='paginationContainer' >
                <button disabled={page == 1} onClick={() => {
                    setSkip(skip - 9)
                    setPage(page - 1)
                }} >Prev</button>
                <button disabled={page == 1} onClick={() => {
                    setPage(page - 1)
                    setSkip(skip - 9)
                }
                } >{page - 1}</button>
                <button>{page}</button>
                <button
                    onClick={() => {
                        setPage(page + 1)
                        setSkip(skip + 9)
                    }
                    }
                >{page + 1}</button>
                <button onClick={() => {
                    setPage(page + 1)
                    setSkip(skip + 9)
                }} >Next</button>
            </div>
        </div >
    )
}
