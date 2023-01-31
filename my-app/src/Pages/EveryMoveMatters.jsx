import React from 'react'
import { motion } from 'framer-motion'

import "../Css/Sustainability.css"

export default function EveryMoveMatters() {

  return (
    <div >
      <div className='EMMtitle' >
        <h1>EVERY MOVE MATTERS</h1>
        <p>PROTECTING THE PLANET. CHAMPIONING PEOPLE. INSPIRING FOR CHANGE.
        </p>
      </div>
      <div className='EMMFLogo'  >
        <img src="https://clarks.scene7.com/is/content/Pangaea2Build/abEveryMoveMattersClarksLogoYellow" alt="" />
      </div>
      <div className='EMMDetails' >
        <p>Acting with integrity has always been at the core of Clarks. From our beginnings almost 200 years ago, crafting our first pairs of shoes from offcuts and looking after our local community right through to the present day, where we work continuously to support people and planet.</p>
        <p>As part of doing everything in our power to be as sustainable, conscientious, responsible, and inclusive as possible, we're kicking off the first stage of our Every Move Matters manifesto: introducing the foundations on which Clarks is built, for the world ahead.</p>
        <p>We want to protect the planet for generations to come. We want to care for communities across the globe. We want to be catalysts for change and inspire our friends and neighbours to follow our lead. This is who we are, and what we stand for.</p>
        <p>Our Every Move Matters journey is just beginning. We've launched a sustainability advisory panel of leading experts to drive our progress, and our targets and road map to achieving them will launch later this year. Join us as we strive to be better today, than we were yesterday.</p>
        <p>Better for you, better for the planet, and better for us all.</p>
      </div>
      <div className='EMMthreeGrid' >
        <div>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abEMMInspiringForChange?wid=804&fmt=webp" alt="" />
          <h2>INSPIRING FOR CHANGE</h2>
          <p>We're change-makers - always have been, always will be. And we're fiercely committed to improving equality, diversity, and inclusivity locally and globally: whether it's supporting Black creatives in fashion, mentoring marketing talent from the LGBTQIA+ community or working with ShoeShare to transform the lives of children around the world. We're determined to keep amplifying marginalized and underrepresented voices. Watch this space for more partnerships with like-minded brands and businesses, that will make sure we keep changing the world - for the better.</p>
        </div>
        <div>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abEMMChampioningThePeople?wid=804&fmt=webp" alt="" />
          <h2>CHAMPIONING PEOPLE</h2>
          <p>People make us who we are, and we believe in looking after them. Back in the 19th century, his Quaker roots saw William Clark invest in his Somerset community and even build his workers homes - many of which still surround our global HQ in Street. When it comes to our colleagues, partners, and customers, acting with integrity, honesty and wellbeing in mind is at the heart of everything we do, and will keep doing as we move forward, with more pledges to our people on the way. Every move matters, and every person matters.</p>

        </div>
        <div>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abEMMProtectingThePlanet?wid=804&fmt=webp" alt="" />
          <h2>PROTECTING THE PLANET</h2>
          <p>Our very first pair of slippers was crafted from leftover sheepskin - so it's fair to say that minimising our impact on the earth is in our DNA. We've always made our shoes to last, using durable, quality materials that stand the test of time - great for our customers, and great for reducing waste. And from producing recycled, recyclable shoe boxes to fully circular shoe collections like Origin, we're ramping up the sustainable credentials of our product and experience</p>
        </div>
      </div>
      <div className='EMMsecondText' >
        <p>WE'VE BEGUN OUR SUSTAINABILITY JOURNEY, BUT THERE IS SO MUCH MORE TO DO. WE KNOW IT'S CRUCIAL TO MAKE TANGIBLE COMMITMENTS AND WE'LL BE SETTING OUT SOME BIG PLANS LATER THIS YEAR, TO ENSURE WE'RE DOING EVERYTHING POSSIBLE TO PROTECT OUR PRECIOUS PLANET FOR THE WORLD AHEAD.</p>
      </div>
      <motion.h2
        whileInView={{ scale: [0.5, 1.0] }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', margin: '20px', fontWeight: '700', letterSpacing: '3px', fontSize: '18px' }} >DISCOVER OUR LATEST SUSTAINABILITY STORIES</motion.h2>
      <div className='EMMeightgrid' >
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}
        >
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abPrideBannerEMMHUB?fmt=webp&wid=705" alt="" />
          <h2>Champions of pride: Clarks x The Elephant Room</h2>
          <p>Partnering with like-minded businesses to support marginalised and underrepresented individuals is at the core of Clarks culture. And so, for Pride and beyond, we’re continuing our collaboration with The Elephant Room - championing incredible talent from the LGBTQIA+ community and powering their professional development.</p>
          <br />
          <span>Find out more</span>
          <p>29/7/22</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abEveryMoveMattersBanner705?fmt=webp&wid=1410" alt="" />
          <h2>EMM Sustainability advisory panel</h2>
          <p>To support our ambitions, we're pleased to announce the creation of our Sustainability Advisory Panel.</p>
          <br />
          <span>Meet the panel</span>
          <p>22/04/22</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abUnicefKidsSchool1410ls?fmt=webp&wid=1410" alt="" />
          <h2>Sharing is caring - Shoeshare</h2>
          <p>By gathering old and unwanted shoes as part of our innovative ShoeShare program, we’re able to support our charity partners as they strive to transform lives.</p>
          <br />
          <span>Read more about ShowShare</span>
          <p>01/06/22</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/aceleySS21ab705ls?fmt=webp&wid=705" alt="" />
          <h2>Introducing Aceley: Powered by Nature</h2>
          <p>Another eco-friendly design for everyday footwear- the Aceley collection contains Lyocell canvas uppers made from eucalyptus - combining sustainable materials and comfort in to one shoe.</p>
          <br />
          <span>Shop Aceley styles</span>
          <p>21/02/21</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/earthDaySS21ab705ls?fmt=webp&wid=705" alt="" />
          <h2>Share the Love this Earth Day 2021</h2>
          <p>Whether you like your Clarks shoes looking brand new or worn and well loved, they are made to last. Having a wardrobe refresh? Find out how your old shoes can help vulnerable children across the world...</p>
          <br />
          <span>Read more about Earth Day</span>
          <p>21/04/21</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/originSS21ab705ls?fmt=webp&wid=705" alt="" />
          <h2>Introducing Clarks Origin: 5 Pieces. No Glue. Just Thread.</h2>
          <p>A natural extension of our pioneering heritage, Origin is innovatively crafted using zero glue and just five pieces - which means less waste and a reduced impact on the environment. Because sometimes less really is more.</p>
          <br />
          <span>Read more about Origin</span>
          <p>21/04/21</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilitySevenLSshort?fmt=webp&wid=1410" alt="" />
          <h2>A new icon for sustainability</h2>
          <p>We've been making shoes for nearly 200 years, but we're still driven by the same relentless pursuit of innovation we had when we crafted our first slippers from sheepskin offcuts all those years ago....</p>
          <br />
          <span>Read more about the Seven</span>
          <p>24/09/21</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityTrigenicLSshort?fmt=webp&wid=1410" alt="" />
          <h2>Movement made naturally</h2>
          <p>Our Trigenic technology optimises the natural movementof your foot through technical innovation and responsive cushioning. So, it’s only natural that we make them using innovative and more sustainable methods...</p>
          <br />
          <span>Read more about the Tri Native</span>
          <p>24/09/21</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityOriginalsLS1410?fmt=webp&wid=1410" alt="" />
          <h2>An original take on sustainability</h2>
          <p>We're always striving to find ways in which our environmental impact can be reduced. That’s why we ensure the materials we use and the partners we choose are as environmentally conscious as we are.</p>
          <br />
          <span>Read more about Originals</span>
          <p>01/12/19</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/girlRising1410lsAid?wid=705&fmt=webp" alt="" />
          <h2>Stand up for change</h2>
          <p>Creating a brighter future for girls around the world</p>
          <br />
          <span>Read more about Girl Rising</span>
          <p>11/10/19</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abSustainabilityGoldLeathersLSshort?fmt=webp&wid=1410" alt="" />
          <h2>Going for gold</h2>
          <p>Ever since we were began crafting shoes back in 1825, we’ve been determined to use materials that we believe in. Which is why we’re proudto say that we’re founder members of the Leather Working Group (LWG)...</p>
          <br />
          <span>Read more about responsibly sourcedleather</span>
          <p>24/04/19</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.5, 1.0] }}
          transition={{ duration: 1 }}>
          <img src="https://clarks.scene7.com/is/image/Pangaea2Build/abEveryMoveMatters1410?fmt=webp&wid=1410" alt="" />
          <h2>People. Planet. Policy .</h2>
          <p>Responsible business is part of our DNA. Which is whywe do as much as we can to support the communities in which we live and work, aswell as the planet we all call home. Our policies are there to guide us on thisjourney.</p>
          <br />
          <span>Discover all of our policies</span>
          <p>24/09/19</p>
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
