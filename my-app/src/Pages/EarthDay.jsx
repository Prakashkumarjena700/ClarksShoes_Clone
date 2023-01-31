import React from 'react'

import { motion } from 'framer-motion'

export default function EarthDay() {
  return (
    <div>
      <div className='IntroContainer' >
        <h3>EARTH DAY - SHOESHARE</h3>
        <p>SHAPING THE FUTURE</p>
      </div>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/earthDaySS21ab1500ls?wid=1440&fmt=webp" alt="" />
      <div className='EDDiscription' >
        <h3>Clarks shoes are made to last - looking great and staying comfortable for as long as you need them in your wardrobe.</h3>
        <p>04/22/2021</p>
        <p>Once you are ready to pass your shoes along, give them another lease of live by donating them. This can be done at your nearest second-hand store or, if you live in the UK, why not donate your shoes to Clarks ShoeShare? Join us in helping UNICEF to reach even more kids in danger by donating your old or unwanted shoes at one of 500 Clarks stores around the UK.</p>
        <p>Read more about our work with Unicef.</p>
      </div>
      <motion.h2
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', margin: '20px', fontWeight: '700', letterSpacing: '3px', fontSize: '18px' }} >DISCOVER OUR LATEST <br />SUSTAINABILITY STORIES</motion.h2>
      <div className='ED2Flex' >
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}
        >
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityGoldLeathersSQ?wid=705&fmt=pjpg" alt="" />
          <h2>GOING FOR GOLD</h2>
          <p>Ever since we were began crafting shoes back in 1825, we’ve been determined to use materials that we believe in. Which is why we’re proud to say that we’re founder members of the Leather Working Group (LWG)...</p>
          <br />
          <span>Read more about responsibly sourced leather</span>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abMadeToLast1410sq?wid=852&fmt=pjpg" alt="" />
          <h2>MADE TO <br /> LAST PEOPLE.PLANTE.NOW.ALWAYS.</h2>
          <p>Shoes form our strongest, most intimate connection to the earth beneath our feet. That’s why we’re striving to make them as sustainably as possible.</p>
          <br />
          <span>Discover Made to Last</span>
        </motion.div>
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
