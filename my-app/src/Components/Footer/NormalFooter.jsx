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
                    <p><FaFacebookF /><ImInstagram /><TfiYoutube /></p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
