import React from 'react'
import { motion } from 'framer-motion'

export default function LeatherWork() {
  return (
    <div>
      <div className='IntroContainer' >
        <h3>GOING FOR GOLD</h3>
        <p>MEDAL - RATED LEATHER</p>
      </div>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityGoldLeathersLSwide2?wid=1440&fmt=pjpg" alt="" />
      <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }} className='medalLikeLeather' >
        <img src="https://cdn.shopify.com/s/files/1/0041/3099/6270/files/logo_e751f4f8-68aa-43b6-a555-918d14732f0a.png?v=1574136880" alt="" />
        <span>Ever since we began crafting shoes back in 1825, we’ve been determined to use materials that we believe in. Which is why we’re proud to say that we’re founder members of the Leather Working Group (LWG).</span>
        <p>09/24/19</p>
        <p>A collective dedicated to promoting sustainable and appropriate environmental business practices within the leather industry, the LWG works with suppliers, brands, retailers, leading technical experts, Non-Governmental Organizations (such as the WWF), academic institutions and other stakeholder organizations to ensure that tanners across the world are assessed against a common set of standards, regardless of region.</p>
        <p>Because of their great work, over 90% of all our leather is now sourced from tanneries given a Bronze, Silver or Gold Medal rating.</p>
        <p>This means that the tanneries have been proactively reducing their environmental footprint by integrating renewables, decreasing their energy and water use, finding new markets for waste products and improving their traceability.</p>
        <p>A great example of this is the tannery Prime Asia whose leather we use widely:</p>
        <span>“Prime Asia are longstanding members of the LWG and are strong advocates of improving environmental business practices within the leather industry. Participating in the LWG from the outset has assisted us to monitor and improve our own environmental footprint, and to invest in programmes such as renewable energy, water recycling and efficiencies. We are proud to have achieved Gold and Silver medal ratings for our tanneries and are working proactively to reduce our footprint even further, setting targets to increase our use of renewable energy to 75% by 2023 and to steadily decrease our consumption per square foot of leather manufactured by 15% for energy and 30% for water and waste.”</span>
        <p>Committing to responsibly sourcing materials is just one of the ways in which we’re fulfilling our aim of becoming as sustainable, conscientious and responsible as possible. You can find out what else we’re doing to lighten our impact below.</p>
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
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityTrigenicSQ?wid=705&fmt=pjpg" alt="" />
          <h2>Movement made naturally</h2>
          <p>Our Trigenic technology optimises the natural movement of your foot through technical innovation and responsive cushioning. So, it’s only natural that we make them using innovative and more sustainable methods...</p>
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
