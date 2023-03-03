import React, { useContext, useEffect } from 'react'
import SixtyPersentSale from '../Components/SixtyPersentSale'
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'

import "../Css/WomenSearch.css"

import axios from 'axios'
import { useState } from 'react'
import LoadingContainer from '../Components/LoadingContainer'
import { ProductPageContext } from '../Context/ProductPageContext'

const getData = (url) => {
    return axios.get(url)
}


export default function ProductsPage() {
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const { gender, setGender } = useContext(ProductPageContext)

    const [dataArr, setDataArr] = useState([])

    useEffect(() => {
        setLoading(true)
        getData(`https://witty-loafers-elk.cyclic.app/data/?gender=${gender}`)
            .then((res) => {
                setDataArr(res.data)
                setLoading(false)
            })
    }, [gender])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const filterdrowser = () => {
        onClose()
        setQuery("")
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
                                    <label ><input type="checkbox" onChange={() => setQuery('boys')} />BOYS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('girls')} />GIRLS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('kids')} />KIDS UNISEX</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('mens')} />MENS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('WOMENS')} />WOMENS</label>
                                </details>
                                <details>
                                    <summary>PRODUCET TYPE</summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('boots')} />BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('sandels')} />SANDELS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('shoes')} />SHOES</label>
                                </details>
                                <details>
                                    <summary>PRODUCT TYPE</summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('boots')} />BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('sandals')} />SANDALS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('shoes')} />SHOES</label>
                                </details>
                                <details>
                                    <summary>COLOR</summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />BEIGR</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />BLACK</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />BLUE</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />GREEN</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />GREY</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />RED</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />WHITE</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('black')} />YELLOW</label>
                                </details>
                                <details>
                                    <summary>PRICE </summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('$30')} />$30-$39.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$50')} />$50-$59.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$60')} />$60-$69.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$70')} />$70-$79.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$80')} />$80-$89.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$90')} />$90-$99.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$100')} />$100-$109.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$110')} />$110-$119.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$120')} />$120-$129.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$130')} />$130-$139.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$140')} />$140-$149.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$150')} />$150-$159.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$160')} />$160-$169.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$170')} />$170-$179.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$180')} />$180-$189.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$190')} />$190-$199.99</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('$200')} />$200-$209.99</label>
                                </details>
                                <details>
                                    <summary>STYLE</summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('ankel')} />ANKLE BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('chelsea')} />CHELSE BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('derby')} />DERBY SHOE</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('desert')} />DESERT BOOTS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('flat')} />FLAT SANDALS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('lace')} />LACE UP</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('loafers')} />LOAFERS & SLIP ONS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('slip')} />SLIP ONS</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('sneakers')} />SNEAKERS</label>
                                </details>
                                <details>
                                    <summary>MATERIAL </summary>
                                    <label ><input type="checkbox" onChange={() => setQuery('leather')} />LEATHER</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('nubuck')} />NUBUCK</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('suede')} />DUEDE</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('textile')} />TEXTILE</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('waxy')} />WAXY LEATHER</label>
                                    <label ><input type="checkbox" onChange={() => setQuery('waxy')} />SUEDE</label>
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
                    <select>
                        <option value="">Sort by</option>
                        <option value="">Relevance</option>
                        <option value="">Newest</option>
                        <option value="">Highest Rated</option>
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>
                        <option value="">Price(Low-High)</option>
                        <option value="">Price(High-Low)</option>
                    </select>
                </div>
            </div>
            <div className='SearchPageContainer' >
                <div className='filterContainer' >
                    <p>FILTER BY:</p>
                    <details>
                        <summary>PRODUCT TYPE <span>{'>'}</span></summary>
                        <label ><input type="checkbox" onChange={() => setQuery('boots')} />BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('sandals')} />SANDALS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('shoes')} />SHOES</label>
                    </details>
                    <details>
                        <summary>COLOR  <span>{'>'}</span> </summary>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />BEIGR</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />BLACK</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />BLUE</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />GREEN</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />GREY</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />RED</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />WHITE</label>
                        <label ><input type="checkbox" onChange={() => setQuery('black')} />YELLOW</label>
                    </details>
                    <details>
                        <summary>PRICE  <span>{'>'}</span> </summary>
                        <label ><input type="checkbox" onChange={() => setQuery('$30')} />$30-$39.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$50')} />$50-$59.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$60')} />$60-$69.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$70')} />$70-$79.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$80')} />$80-$89.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$90')} />$90-$99.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$100')} />$100-$109.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$110')} />$110-$119.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$120')} />$120-$129.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$130')} />$130-$139.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$140')} />$140-$149.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$150')} />$150-$159.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$160')} />$160-$169.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$170')} />$170-$179.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$180')} />$180-$189.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$190')} />$190-$199.99</label>
                        <label ><input type="checkbox" onChange={() => setQuery('$200')} />$200-$209.99</label>
                    </details>
                    <details>
                        <summary>STYLE  <span>{'>'}</span> </summary>
                        <label ><input type="checkbox" onChange={() => setQuery('ankel')} />ANKLE BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('chelsea')} />CHELSE BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('derby')} />DERBY SHOE</label>
                        <label ><input type="checkbox" onChange={() => setQuery('desert')} />DESERT BOOTS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('flat')} />FLAT SANDALS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('lace')} />LACE UP</label>
                        <label ><input type="checkbox" onChange={() => setQuery('loafers')} />LOAFERS & SLIP ONS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('slip')} />SLIP ONS</label>
                        <label ><input type="checkbox" onChange={() => setQuery('sneakers')} />SNEAKERS</label>
                    </details>
                    <details>
                        <summary>MATERIAL  <span>{'>'}</span> </summary>
                        <label ><input type="checkbox" onChange={() => setQuery('leather')} />LEATHER</label>
                        <label ><input type="checkbox" onChange={() => setQuery('nubuck')} />NUBUCK</label>
                        <label ><input type="checkbox" onChange={() => setQuery('suede')} />DUEDE</label>
                        <label ><input type="checkbox" onChange={() => setQuery('textile')} />TEXTILE</label>
                        <label ><input type="checkbox" onChange={() => setQuery('waxy')} />WAXY LEATHER</label>
                        <label ><input type="checkbox" onChange={() => setQuery('waxy')} />SUEDE</label>
                    </details>
                    <button onClick={() => setQuery("")} >RESET FILTER</button>
                </div>
                {
                    loading ? <LoadingContainer className='loadingContainer' /> : <div className='resultContainer' >
                        {
                            dataArr && dataArr.map((ele) =>
                                <Link to={`/productspage/${ele._id}`} className='searchCard' >
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
        </div>
    )
}
