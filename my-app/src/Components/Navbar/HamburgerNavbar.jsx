import React from 'react'
import logo from '../Photos/logo.png'

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Select } from '@chakra-ui/react'
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
          <DrawerBody className='hanmburgerBody' >
            <img src={logo} alt="" />
            <p onClick={onClose} ><Link to='/login' >LONG IN / REGISTER</Link></p>
            <Select color='white' >
              <option>WOMEN</option>
              <option >Shop Women's</option>
              <option >SHOP FEATURES</option>
              <option >SHOP BY STYLE</option>
              <option >SHOP BY COLLECTION</option>
              <option >SHOP ACCESSORIES</option>
              <option >HOLIDAY GIFT GUIDE</option>
            </Select>
            <Select color='white' >
              <option >MEN</option>
              <option >Shop Men's</option>
              <option >SHOP FEATURES</option>
              <option >SHOP BY STYLE</option>
              <option >SHOP BY COLLECTION</option>
              <option >SHOP ACCESSORIES</option>
              <option >HOLIDAY GIFT GUIDE</option>
            </Select>
            <Select color='white' >
              <option >KIDS</option>
              <option >Girls</option>
              <option >Boys</option>
              <option >Collection</option>
              <option >View All Kids</option>
            </Select>
            <Select color='white' >
              <option >Shope Originals</option>
              <option >SHOP MENS</option>
              <option >SHOP WOMENS</option>
              <option >SHOP KIDS</option>
              <option >COLLABORATIONS</option>
              <option >COLLECTIONS</option>
            </Select>
            <Select color='white'>
              <option >SALE</option>
              <option >Shop Sale Styles</option>
              <option >Fearured</option>
              <option >Womens</option>
              <option >Mens</option>
              <option >Kids</option>
            </Select>
            <Select color='white'>
              <option >ACCESSORIES</option>
              <option >Womens</option>
              <option >Mens</option>
            </Select>
            <Select color='white'>
              <option >SUSTAINABILITY</option>
              <option >Every Move Matters</option>
            </Select>
            <p>My account</p>
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

