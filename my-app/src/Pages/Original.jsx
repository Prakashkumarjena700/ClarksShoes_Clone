import React from 'react'

import { motion } from 'framer-motion'

export default function Original() {
  return (
    <div>
      <h1 style={{ fontSize: '17px', marginTop: '70px', marginBottom: '30px', textAlign: 'center', fontWeight: '700', letterSpacing: '2px' }} >AN ORIGINAL TAKE ON SUSTAINABILITY</h1>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityOriginalsLSwide2880?wid=2880&fmt=pjpeg" alt="" />
      <br />
      <motion.div
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} className='medalLikeLeather' >
        <span>We’re always striving to find ways in which our environmental impact can be reduced. That’s why we ensure the materials we use and the partners we choose are as environmentally conscious as we are.</span>
        <p>12/09/19</p>
        <p>With unique properties wholly unlike any current synthetic material, leather is still one of the best choices for shoe making. With a three-dimensional fibre structure, elasticity, tear resistance and adaptability, with good care, a leather shoe will last (nearly) forever.</p>
        <p>That’s why we partner with Heinen, an innovative German tannery that has been tanning for over 125 years - almost as long as we’ve been making shoes.</p>
        <p>Based in the small town of Wegberg, Heinen are constantly working to lessen their energy and water usage and waste production, while simultaneously looking at ways to offset any impact they do have.</p>
        <p>It’s this desire to lighten their footprint that has seen them team up with the Kikonda Forest project, an organisation that plants trees in this biologically diverse area of Uganda, and one which is accredited as a Gold Standard offset program.  </p>
        <p>Through this particular program, Heinen has offset 10 tonnes of CO2 emissions, created in the manufacturing process of the Hillcrest leathers used in our Clarks Originals range. This means that during the manufacturing process, they adhered to the highest levels of environmental integrity, and contributed to ensuring climate security and sustainable development for all.</p>
        <p>Discover what we’re doing to reduce our waste and lighten our impact below.</p>
      </motion.div>
      <motion.h2
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }}
        style={{ letterSpacing: '2px', fontSize: '18px', textAlign: 'center', fontWeight: '700', marginBottom: '30px' }} >DISCOVER OUR LATEST <br />SUSTAINABILITY STORIES</motion.h2>
      <div className='ED2Flex' >
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}
        >
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityGoldLeathersSQ?wid=705&fmt=pjpeg" alt="" />
          <h2>Going for gold</h2>
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
