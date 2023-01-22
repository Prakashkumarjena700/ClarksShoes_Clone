import React, { useEffect } from 'react'
import SixtyPersentSale from '../Components/SixtyPersentSale'
import { Link } from 'react-router-dom'

import "../Css/WomenSearch.css"

import axios from 'axios'
import { useState } from 'react'
import LoadingContainer from '../Components/LoadingContainer'

const getData = (url) => {
    return axios.get(url)
}


export default function WomensSearch() {
    const [loading, setLoading] = useState(false)
    const [menArr, setMenArr] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        setLoading(true)
        getData(`https://prakash-vercel-database.vercel.app/clarkshoeWomen?q=${query}`)
            .then((res) => {
                setMenArr(res.data)
                setLoading(false)
            })
    }, [query])
    return (
        <div>
            <div className='homeFirstDiv' >
                <p><span>FREE SHIPPINGON</span> ORDERS OVER $50</p>
                <p>|</p>
                <p><span>FREE RETURNS</span> EVERYDAY</p>
            </div>
            <SixtyPersentSale />
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
                            menArr && menArr.map((ele) =>
                                <Link to={`/menssearch/${ele.id}`} className='searchCard' >
                                    <img src="https://s7g10.scene7.com/is/image/Pangaea2Build/AW22_285_E%201_12ClearancePhase3_Badge_V2?fmt=jpg&wid=90&hei=90" alt="" />
                                    <img src={ele.img1} alt="" />
                                    <img src={ele.img5} alt="" />
                                    <div>
                                        <div>
                                            <p>{ele.name}</p>
                                            <p>{ele.whom}</p>
                                            <p>{ele.dis}</p>
                                        </div>
                                        <div>
                                            <p>{ele.saleprice}</p>
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
