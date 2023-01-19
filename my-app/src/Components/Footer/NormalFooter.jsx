import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { TfiYoutube } from 'react-icons/tfi'

export default function NormalFooter() {
    return (
        <div className='normalFooter' >
            <div className='normalFooterTop' >
                <div >
                    <p>DEPARTMENTS</p>
                    <p>HELP</p>
                    <p>ABOUT CLARKS</p>
                    <p>CLARKSUSA.COM</p>
                    <p><FaFacebookF color='#666666' /><ImInstagram color='#666666' /><TfiYoutube color='#666666' /></p>
                </div>
                <div>
                    <div>
                        <p>Womens</p>
                        <p>Mens</p>
                        <p>Originals</p>
                        <p>DiscoverSale</p>
                    </div>
                    <div>
                        <p>Product Recall</p>
                        <p>Customer Service</p>
                        <p>Shipping & Delivery</p>
                        <p>Order Lookup</p>
                        <p>Returns</p>
                        <p>Compare At Pricing</p>
                        <p>FAQs</p>
                        <p>ID.ME FAQs</p>
                        <p>In-Store Rewards Program Terms</p>
                        <p>In-Store Rewards Program FAQs</p>
                        <p>Shoe Care Guide</p>
                    </div>
                    <div>
                        <p>About Us</p>
                        <p>Accessibility</p>
                        <p>Affiliate Program</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>California - Do Not Sell My Info</p>
                        <p>California Supply Chains Act</p>
                        <p>Corporate Responsibility</p>
                        <p>Coronavirus Statement</p>
                        <p>Technologies</p>
                    </div>
                    <div>
                        <p>Gift Cards</p>
                        <p>Gift card Blance</p>
                        <p>Size Guide</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='normalFooterBtm' >
                <div>
                    <p>Terms & Conditions Privacy Policy CCPA Privacy Policy</p>
                </div>
                <div>
                    <p>© C. & J. Clark International 2022. Clarks and the Clarks logo are registered trademarks of C. & J. Clark International Limited.</p>
                    <br />
                    <p>C&J Clark America, Inc., 140 Kendrick Street, Needham, MA 02494</p>
                    <div>
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterPaypalb?hei=70" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterVisa2020?hei=70" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterMastercardv2?hei=70" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterDiscoverCard2020b?hei=70" alt="" />
                        <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterAmericanExpress2020b?hei=70" alt="" />
                        <img src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
