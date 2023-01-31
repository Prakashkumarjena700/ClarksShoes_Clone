import React from 'react'
import { motion } from 'framer-motion'

import "../Css/Sustainability.css"

export default function TriNativ() {
  return (
    <div>
      <div className='IntroContainer' >
        <h3>MOVEMENT MADE NATURALLY</h3>
        <p>UPPERS - RECYCLED CONTENT</p>
      </div>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityTrigenicLSwide?wid=1440&fmt=pjpg" alt="" />
      <motion.div
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} className='medalLikeLeather' >
        <img src="https://www.recycling.com/wp-content/uploads/recycling%20symbols/universal/Universal%20Recycling%20Symbol%20%28U%2B2672%29.gif" alt="" />
        <span>Our Trigenic technology optimizes the natural movement of your foot through technical innovation and responsive cushioning. So, it’s only natural that we make them using innovative and more sustainable methods.</span>
        <p>09/24/19</p>
        <p>Made to move you, our Trigenic range combines targeted flex points and ultra-light EVA outsoles with grip pods to take movement to a whole new level.</p>
        <p>But we weren’t happy simply fusing cutting-edge technology with expert craftsmanship and a classic moccasin construction. That’s why we decided to make the Tri Native uppers from 80% recycled materials.</p>
        <p>The yarn produced through this inventive method is then used as part of the engineered knit we pioneered specifically for the Tri Native. A bespoke process in which each piece is knitted individually, we can not only create intricate patterns, but multiple textures and color combinations as well. By adding additional yarn, we were also able to strengthen the structure of the knit to ensure it holds its shape over time.</p>
        <p>The Tri Native is just one step on our path to reducing waste. Find out what else we’re doing to reach our goal below.</p>
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
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilitySevenSQ?wid=705&fmt=pjpg" alt="" />
          <h2>A new icon for sustainability</h2>
          <p>We’ve been making shoes for nearly 200 years, but we’re still driven by the same relentless pursuit of innovation we had when we crafted our first slippers from sheepskin offcuts all those years ago....</p>
          <br />
          <span>Read more about the Seven</span>
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
