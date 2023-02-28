import React from 'react'
import '../Css/Home.css'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className='homeFirstDiv' >
        <p><span>FREE SHIPPINGON</span> ORDERS OVER $75</p>
        <p>|</p>
        <p><span>FREE RETURNS</span> EVERYDAY</p>
      </div>
      <div className='winter-clearnce' >
        <img width='100%' src="https://clarks.scene7.com/is/image/Pangaea2Build/BANWKS50and51MBootsSaleDesktopBanner1500x500px?fmt=webp&wid=1500" alt="" />
        <div className='container' >
          <p>WINTER CLEARANCE</p>
          <p>SAVE UP TO</p>
          <p>50% OFF*</p>
          <p>TAKE AN EXTRA 30% OFF MARKDOWNS</p>
          <p>USE CODE: EXTRA</p>
          <div>
            <p><Link to='/womenssearch' >Shop Womens</Link></p>
            <p><Link to='/menssearch'>Shop Mens</Link></p>
            <p><Link to='/kidssearch' >Shop Kids</Link></p>
            <p><Link to='/shopall' >Shop All</Link></p>
          </div>
          <p>For more details see the terms & conditions</p>
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
