import React from 'react'

import { motion } from 'framer-motion'

export default function Origin() {
  return (
    <div>
      <img src="https://clarks.scene7.com/is/image/Pangaea2Build/originCPABLand1500?fmt=webp&wid=1500&qlt=85" alt="" />
      <div className='originIntro' >
        <p>INTRODUCING CLARKS ORIGIN</p>
        <h1>5 Pieces. No Glue. <span> Just Thread.</span></h1>
        <p>A natural extension of our pioneering heritage, Origin is innovatively crafted using zero glue and just five pieces - which means less waste and a reduced impact on the environment.</p>
        <p>Because sometimes less really is more.</p>
      </div>
      <div className='OG2Flex' >
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img width='350px' src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksOriginWhiteSuede626ab?fmt=pjpeg&wid=750&qlt=85" alt="" />
          <h2>CLARKS ORIGIN</h2>
          <p>WHITE SUEDE</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img width='350px' src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksOriginblackSuede626ab?fmt=pjpeg&wid=750&qlt=85" alt="" />
          <h2>CLARKS ORIGIN</h2>
          <p>BLACK SUEDE</p>
        </motion.div>
      </div>
      <div className='OGBbtn' >
        <button>Shop Womens Origin</button>
        <button>Shop Mens Origin</button>
      </div>
      <motion.iframe
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }}
        title='ODvideo' src="https://clarks.scene7.com/is/content/Pangaea2Build/TransactionalSites/Videos/ss21/ClarksOriginNoIntroSqshd.mp4"
        allow="autoplay"
        className="OGVideo"
      />
      <motion.img whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} src="https://clarks.scene7.com/is/image/Pangaea2Build/originCPABpeices1500?fmt=webp&wid=1500&qlt=85" alt="" />
      <div className='ODFourGrid' >
        <div>
          <h3>1. LACES</h3>
          <p>100% recycled polyester</p>
        </div>
        <div>
          <h3>2. SUEDE UPPER</h3>
          <p>Unlined, sustainably sourced leather from tanneries committed to reducing their environmental footprint</p>
        </div>
        <div>
          <h3>3. FOOTBED</h3>
          <p>Ultra-cushioned OrthoLite® recycled footbed</p>
        </div>
        <div>
          <h3>4. OUTSOLE</h3>
          <p>ExtraLight® EVA sustainably made from 51% recycled content</p>
        </div>
      </div>
      <h1 style={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginBottom: '80px' }} >Less is <span style={{ color: '#268384' }} >More.</span></h1>
      <motion.img whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} src="https://clarks.scene7.com/is/image/Pangaea2Build/originCPABWallabeeLand1500?fmt=webp&wid=1500&qlt=85" alt="" />
      <h1 style={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', margin: '60px 15px 30px 15px' }} > <span style={{ color: '#717171' }} >Introducing</span> Origin Wallabee.</h1>
      <p className='IntroP' > Designed with sustainability and circularity in mind, the all-new Origin Wallabee effortlessly blends the iconic lines of our original moccasin with truly ingenious craftmanship to create something that’s elegant in its simplicity and enduring in style.</p>
      <motion.div whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} className='OGThreeflex'>
        <img src="https://clarks.scene7.com/is/image/Pangaea2Build/originWallabeeRTB1ab750?fmt=pjpeg&wid=500&qlt=85" alt="" />
        <img src="https://clarks.scene7.com/is/image/Pangaea2Build/originWallabeeRTB2ab750?fmt=pjpeg&wid=500&qlt=85" alt="" />
        <img src="https://clarks.scene7.com/is/image/Pangaea2Build/originWallabeeRTB3ab750?fmt=pjpeg&wid=500&qlt=85" alt="" />
      </motion.div>
      <motion.div
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }} className='OG2Flex' >
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img width='350px' src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksOriginWallabeeMintSuede636ab?fmt=pjpeg&wid=750&qlt=85" alt="" />
          <h2>ORIGIN WALLABEE</h2>
          <p>MINT SUEDE</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img width='350px' src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksOriginWallabeeBlackSuede636ab?fmt=pjpeg&wid=750&qlt=85" alt="" />
          <h2>ORIGIN WALLABEE</h2>
          <p>BLACK SUEDE</p>
        </motion.div>
      </motion.div>
      <div className='OGBbtn' >
        <button>Shop Womens Origin</button>
        <button>Shop Mens Origin</button>
      </div>
      <br />
      <br />
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
