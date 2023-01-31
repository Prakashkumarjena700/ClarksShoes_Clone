import React from 'react'

import { motion } from 'framer-motion'

export default function OriginalsSeven() {
  return (
    <div>
      <div className='IntroContainer' >
        <h3>A NEW ICON FOR SUSTAINABILITY</h3>
        <p>OUTSOLE - RECYCLED CONTENT</p>
      </div>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilitySevenLSwide?wid=1440&fmt=pjpg" alt="" />
      <motion.div
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} className='medalLikeLeather' >
        <img src="https://www.recycling.com/wp-content/uploads/recycling%20symbols/universal/Universal%20Recycling%20Symbol%20%28U%2B2672%29.gif" alt="" />
        <span>We’ve been making shoes for nearly 200 years, but we’re still driven by the same relentless pursuit of innovation we had when we crafted our first slippers from sheepskin offcuts all those years ago.</span>
        <p>9/24/19</p>
        <p>That’s why, when we embarked on a journey to create a shoe that redefines comfort, we wanted to combine progressive, simple design with inventive construction techniques rooted in our sustainable heritage.</p>
        <p>A unique challenge, we thought it deserved a unique approach, so we began by removing every single component we deemed unnecessary. The result? The Seven.</p>
        <p>While most traditional shoes are made with upwards of 16 components, our full moccasin construction uses just seven, with the seams and outsole naturally forming the shape of the shoe for superior bare foot comfort.</p>
        <p>Constructed from unlined suede, the Seven doesn’t just use fewer components, it also uses minimal glue meaning fewer chemicals, while at least 20% of the rubber outsole is made from a unique recycled mixture of regrind and waste latex.</p>
        <p>A fusion of craft, ingenuity and unconstrained contemporary design that eliminates the unnecessary, the Seven is just one step on our path to reducing waste, as we strive to do more for our planet and all those that call it home.</p>
      </motion.div>
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
