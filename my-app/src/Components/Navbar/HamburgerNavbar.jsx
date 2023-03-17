import React from 'react'
import logo from '../Photos/logo.png'

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, details } from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaFacebookF } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { TfiYoutube } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

export default function HamburgerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div className='hamburgerMenu' >
      <button className='hamburgerlogo' ref={btnRef} onClick={onOpen}>
        <RxHamburgerMenu />
      </button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color='white' />
          <DrawerBody className='hanmburgerBody' id='hamburger' >
            <img src={logo} alt="" />
            <p onClick={onClose} ><Link to='/login' >LONG IN / REGISTER</Link></p>
            <details color='white' >
              <summary>WOMEN</summary>
              <div>
                <h2 >Shop Women's</h2>
                <h2 >SHOP FEATURES</h2>
                <h2 >SHOP BY STYLE</h2>
                <h2 >SHOP BY COLLECTION</h2>
                <h2 >SHOP ACCESSORIES</h2>
                <h2 >HOLIDAY GIFT GUIDE</h2>
              </div>
            </details>
            <details  >
              <summary>MEN</summary>
              <h2 >Shop Men's</h2>
              <h2 >SHOP FEATURES</h2>
              <h2 >SHOP BY STYLE</h2>
              <h2 >SHOP BY COLLECTION</h2>
              <h2 >SHOP ACCESSORIES</h2>
              <h2 >HOLIDAY GIFT GUIDE</h2>
            </details>
            <details>
              <summary>KIDS</summary>
              <h2 >Girls</h2>
              <h2 >Boys</h2>
              <h2 >Collection</h2>
              <h2 >View All Kids</h2>
            </details>
            <details  >
              <summary >Shope Originals</summary>
              <h2 >SHOP MENS</h2>
              <h2 >SHOP WOMENS</h2>
              <h2 >SHOP KIDS</h2>
              <h2 >COLLABORATIONS</h2>
              <h2 >COLLECTIONS</h2>
            </details>
            <details >
              <summary >SALE</summary>
              <h2 >Shop Sale Styles</h2>
              <h2 >Fearured</h2>
              <h2 >Womens</h2>
              <h2 >Mens</h2>
              <h2 >Kids</h2>
            </details>
            <details >
              <summary >ACCESSORIES</summary>
              <h2 >Womens</h2>
              <h2 >Mens</h2>
            </details>
            <details>
              <summary>SUSTAINABILITY</summary>
              <h2 >Every Move Matters</h2>
              <h2 >Earth Day</h2>
              <h2 >Origin</h2>
              <h2 >Leather Work</h2>
              <h2 >Originals</h2>
              <h2 >Originals Sevens</h2>
              <h2 >Tri Native</h2>
            </details>
            <p>Store Location</p>
            <div className='hamburgerSocialMedia' >
              <FaFacebookF /><ImInstagram /><TfiYoutube />
            </div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>CCPA Privacy Policy</p>
            <p>
              © C. & J. Clark International 2022. Clarks and the Clarks
              logo are registered trademarks of C. & J. Clark International Limited.
            </p>
            <p>
              C&J Clark America, Inc., 140 Kendrick Street, Needham, MA 02494
            </p>
            <div className='hamburgerCardContainer' >
              <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterPaypalb?hei=70" alt="Paypal" />
              <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterVisa2020?hei=70" alt="Visa" />
              <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterMastercardv2?hei=70" alt="Mastercard" />
              <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterDiscoverCard2020b?hei=70" alt="Discover card" />
              <img src="https://s7g10.scene7.com/is/content/Pangaea2Build/adFooterAmericanExpress2020b?hei=70" alt="Discover card" />
              <img src="https://clarks.scene7.com/is/content/Pangaea2Build/IC_klarnaLogo" alt="Klarna" />
            </div>


          </DrawerBody  >
        </DrawerContent>
      </Drawer>
    </div>
  )
}

