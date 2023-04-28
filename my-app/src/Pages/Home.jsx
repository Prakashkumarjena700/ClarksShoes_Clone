import React, { useEffect, useState } from 'react'
import '../Css/Home.css'

import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@chakra-ui/react'

import { RiSearch2Line } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { AiTwotoneStar } from 'react-icons/ai'

export default function Home() {

  const [showSearch, setShowSearch] = useState(false)
  const [que, setQue] = useState(-1)
  const [arr, setArr] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [que])

  const getData = async () => {
    await fetch(`https://witty-loafers-elk.cyclic.app/data/?q=${que}&limit=4`)
      .then(res => res.json())
      .then(res => setArr(res))
      .catch(err => console.log(err))
  }

  console.log(arr)

  return (
    <div>
      <button onClick={() => {
        setArr([])
        setShowSearch(!showSearch)
      }} className='searchBtn' >
        {showSearch ? <RxCross1 /> : <RiSearch2Line />}
      </button>
      {showSearch && <Input type="text" p='7' fontSize='3xl' onChange={(e) => setQue(e.target.value)} className='searchInputBox' placeholder='Search' />}

      <div className='searchContainer'  >
        {
          arr && arr.map((ele) =>
            <div style={arr && {padding:'20px'}} onClick={() => navigate(`/productspage/${ele._id}`)} className='searchCardHp' >
              <div>
                <img width='200px' src={ele.img1} alt="" />
              </div>
              <div>
                <div>
                  <p>{ele.name.substring(0, 20)}...</p>
                  <p>{ele.gender} {ele.type}</p>
                  <p>{ele.color}</p>
                  <p>
                    <AiTwotoneStar color='#0092FF' />
                    <AiTwotoneStar color='#0092FF' />
                    <AiTwotoneStar color='#0092FF' />
                    <AiTwotoneStar color='#0092FF' />
                    <AiTwotoneStar color='#0092FF' />
                  </p>
                </div>
                <div>
                  <p>${ele.price}.00</p>
                </div>
              </div>

            </div>
          )
        }

      </div>
      <div className='homeFirstDiv' >
        <p><span>FREE SHIPPINGON</span> ORDERS OVER $75</p>
        <p>|</p>
        <p><span>FREE RETURNS</span> EVERYDAY</p>
      </div>
      <div className='BREEZEContainer' >
        <div>
          <img className='breezeimg1' src="https://clarks.scene7.com/is/content/Pangaea2Build/SS23BreezePageLiberateYourFeetGroupDesktopBanner1500x500px?fmt=webp&wid=1500" alt="" />
          <img className='breezeimg2' src="https://clarks.scene7.com/is/content/Pangaea2Build/SS2BreezePageLiberateYourFeetGroupTabletBanner705x395px_GIF?fmt=webp&wid=768" alt="" />
        </div>
        <div>
          <h2>JOIN THE BREEZE COMFORT REVOLUTION!</h2>
          <p>Get that better-than-barefoot feeling, in slip-ons and sandals crafted with signature Clarks comfort – setting you free to embrace the best of warm weather.</p>
          <div>
            <button>Explore Breeze Collection</button>
            <button>Shop Breeze Collection</button>
          </div>
        </div>
      </div>
      <div className='winterRebootimg' >
      </div>
      <div className='winterRebootContainer' >
        <h2>WINTER REBOOT</h2>
        <p>Reworking a staple shoe in iconic style, meet our Orianna Mid boot. Crafted in responsibly sourced dark sand suede for a premium look, its chunky profile ticks the box for on-trend, while snug faux shearling linings keeps toes toasty when braving cooler climes. Clarks’ stitching detail nods to our heritage, making every tread timeless, too.</p>
        <div>
          <button>Shop Women's Boots</button>
          <button>Shope Men's Boots</button>
        </div>
      </div>
      <div className='homepageTwoContainer' >
        <div>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/BANWKS50and51OpalZipPeppleSuedeTabletBanner705x395px?fmt=webp&wid=705" alt="" />
          <h2> COMFORTABLY WARM  </h2>
          <p>Keep warm, and look cool in Opal Sky, our Chelsea-inspired suede upper boot.  Step out in feel-good style every time with our Ultimate Comfort footbed and slip-resistant sole.  </p>
          <div>
            <button>Shop Opal Sky on Sale</button>
            <button>Shop Women's Warm Boots</button>
          </div>
        </div>
        <div>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22CostonWallyWPDarkSandWLinedOnsiteBannerTablet705x397?fmt=webp&wid=705" alt="" />
          <h2>WEATHER READY WITH A TWIST</h2>
          <p>A fresh take on the iconic Wallabee profile, our Corston Wally WP boot melds heritage style with a winter-ready twist. With a fully waterproof finish and snug faux fur linings – the weather’s not dampening our plans!</p>
          <div>
            <button>Shope Corston Wally on Sale</button>
            <button>Shop Men's Waterproof Boots</button>
          </div>
        </div>
      </div>
      <div className='eighthStreet' >
      </div>
      <div className='eighthStreetContainer' >
        <h1>8TH STREET BY RONNIE FIEG FOR CLARKS ORIGINALS</h1>
        <p>With nearly three decades of footwear industry expertise to his name, American designer and founder of Kith Ronnie Fieg is a bona fide classic kicks aficionado- making him the perfect partner for a Clarks Originals collab.</p>
        <button>Shop the 8th Street Collection</button>
        <button>See The Feature</button>
      </div>
      <div className='seftyRecall' >
        <div>
          <p>SAFETY RECALL OF FIVE STYLES OF CLARKS WOMEN'S SHOES </p>
          <p>Click here for more information</p>
        </div>
      </div>
      <div className='homeFourGrid' >
        <div>
          <Link to='/womenspage' ><img src="https://clarks.scene7.com/is/image/Pangaea2Build/MagnoliaZipBlackLeather852x852px?&fmt=png-alpha" alt="" /></Link>
          <p><Link to='/womenspage'> Shop Womens</Link></p>
        </div>
        <div>
          <Link to='/menspage' ><img src="https://clarks.scene7.com/is/image/Pangaea2Build/MNature5TieBeeswaxLeather852x852px?&fmt=png-alpha" alt="" /></Link>
          <Link to='/menspage' ><p>Shop Mens</p></Link>
        </div>
        <div>
          <Link to='/originals' ><img src="https://clarks.scene7.com/is/image/Pangaea2Build/WebBannersDualGenderSashikoOriginalsHomepage852x852px?&fmt=png-alpha" alt="" /></Link>
          <Link to='/originals'><p>Shop Originals</p></Link>
        </div>
        <div>
          <Link to='/kidspage' ><img src="https://clarks.scene7.com/is/image/Pangaea2Build/KWallabeeBootNavyCombi852x852px?&fmt=png-alpha" alt="" /></Link>
          <Link to='/kidspage'><p>Shop Kids</p></Link>
        </div>
      </div>
      <div className='klarnaDiv' >
        <div>
          <p>Buy now. Pay Later. With</p>
          <img width='100px' src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" />
        </div>
        <div>
          <p>Find out more</p>
        </div>
      </div>
      <div className='scrollTopContainer' >
        <div>
          <button>SCROLL TO TOP</button>
          <button>|</button>
          <button>CONTACT US</button>
        </div>
        <div>
          <button>CLARKS NEWSLETTER</button>
          <input type="text" placeholder='Enter email address' />
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  )
}
