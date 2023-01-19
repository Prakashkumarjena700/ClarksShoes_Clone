import React from 'react'
import '../Css/Mens.css'

export default function MensPage() {
    return (
        <div>
            <div className='homeFirstDiv' >
                <p><span>FREE SHIPPINGON</span> ORDERS OVER $75</p>
                <p>|</p>
                <p><span>FREE RETURNS</span> EVERYDAY</p>
            </div>
            <div className='womensPageAllOptions' >
                <p>New Arrivals</p>
                <p>All Shoes</p>
                <p>Sneakers</p>
                <p>Boots</p>
                <p>Dress Shoes</p>
                <p>Comfort Shoes</p>
            </div>
            <details className='womensPageAllOptionsSelect' >
                <summary>Shop by Category</summary>
                <p>New Arrivals</p>
                <p>All Shoes</p>
                <p>Sneakers</p>
                <p>Boots</p>
                <p>Casual Shoes</p>
                <p>Comfort Shoes</p>
            </details>
            <div className='winter-clearnce' >
                <img src="https://clarks.scene7.com/is/image/Pangaea2Build/BANWKS50and51MBootsSaleDesktopBanner1500x500px?fmt=webp&wid=1500" alt="" />
                <div className='container' >
                    <p>WINTER CLEARANCE</p>
                    <p>SAVE UP TO</p>
                    <p>50% OFF*</p>
                    <p>TAKE AN EXTRA 30% OFF MARKDOWNS</p>
                    <p>USE CODE: EXTRA</p>
                    <div style={{ justifyContent: 'center', gap: '10px' }} >
                        <p> Shop Mens</p>
                        <p>Shop All</p>
                    </div>
                    <p>For more details see the terms & conditions</p>
                </div>
            </div>
            <div className='theWinterRebootMen' >

            </div>
            <div className='theWinterRebootWomenContainer' id='theWinterRebootMenContainer' >
                <h1>WEATHER READY <br /> WITH A TWIST</h1>
                <p>A fresh take on the iconic Wallabee profile, our Corston Wally WP boot melds heritage style with a winter-ready twist. With a fully waterproof finish and snug faux fur linings – the weather’s not dampening our plans! </p>
                <div>
                    <button>Shop Women's Boot Sale</button>
                    <button>Shop All Women's Sale</button>
                </div>
            </div>
            <div className='womenspageTwoContainer' >
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22ColehillMidBlueInterestOnsiteBannerTablet705x397?fmt=webp&wid=705" alt="" />
                    <h2>ICONS. REIMAGINED.</h2>
                    <p>Our latest Clarks Icons collection boasts refreshed, ultra-comfortable profiles set to empower every move. Sneaker styling and sporty edits lend vintage cool to tried-and-true silhouettes that are made for the world ahead.</p>
                    <div>
                        <button>Shop Icons</button>
                        <button>Shop Men's Lace Up Boots</button>
                    </div>
                </div>
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22Craftdale2HiBlackLeatherOnsiteBannerTablet705x397?fmt=webp&wid=705" alt="" />
                    <h2>BOOTS UPGRADED</h2>
                    <p>Everyday durability meets fine craftsmanship in our Craftdale 2 Hi casual boot with its tough construction and chunky sole to plush underfoot cushioning.  In rugged black leather, it’s a shoe built for adventure. </p>
                    <div>
                        <button>Shop Craftdale 2 Hi</button>
                        <button>Shop Men's Sale Boots</button>
                    </div>
                </div>
            </div>
            <img src="https://clarks.scene7.com/is/image/Pangaea2Build/BANWKS50and51MBootsSaleDesktopBanner1500x500px?fmt=webp&wid=1500" alt="" />
            <div className='theWinterRebootWomenContainer' id='winterBootSaleMen' >
                <h1>WINTER BOOT SALE</h1>
                <p>Take an extra 30% OFF markdowns and save up to 50% OFF. Use promo code EXTRA at check out.</p>
                <div>
                    <button>Shop Men's Boot Sale</button>
                    <button>Shop All Men's Sale</button>
                </div>
            </div>
            <div className='fourGrideWomenPage' id='fourGridMenPage' >
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/aw22mens4upwhiddongroup852x852px?wid=852&fmt=pjpg" alt="" />
                    <h2>MENS DRESS</h2>
                    <button>Shop now</button>
                </div>
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/aw22mens4uptorruntan852x852px?wid=852&fmt=pjpg" alt="" />
                    <h2>MEN SNEAKERS</h2>
                    <button>Shop now</button>
                </div>
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/aw22mens4upwallabeewlauburn852x852px?wid=852&fmt=pjpg" alt="" />
                    <h2>MEN'S COMFORT</h2>
                    <button>Shop now</button>
                </div>
                <div>
                    <img src="https://clarks.scene7.com/is/image/Pangaea2Build/aw22mens4upmorrisbrowntumb852x852px?wid=852&fmt=pjpg" alt="" />
                    <h2>MENS BOOTS</h2>
                    <button>Shop now</button>
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
