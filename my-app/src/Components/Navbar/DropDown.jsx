import React from 'react'
import { Women, Men, Kids, Originals, Accessories, Sale, Sustainability } from './NavbarItem'
import { AiOutlineArrowRight } from "react-icons/ai";

export const WomenDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div  id='womenSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Women.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}>{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
            <div className='womennavbarpic' >
                <img width='100%' src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22WATLTrailUpWPOnsiteBannerMobile705?wid=286&fmt=pjpeg" alt="" />
                <p>SHOP ATL COLLECTION</p>
            </div>
        </div>
    )
}
export const MenDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='menSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Men.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  > {ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
            <div className='mennavbarpic' >
                <img width='100%' src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22MATLTrailUpWPOnsiteBannerMobile705?wid=286&fmt=pjpeg" alt="" />
                <p><p>SHOP ATL COLLECTION</p></p>
            </div>
        </div>
    )
}
export const KidsDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='kidsSubmenue'  onClick={() => setDropdown(!dropDown)} >
            {
                Kids.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const OriginalsDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='originalsSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Originals.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.id === 2 && <AiOutlineArrowRight />} {ele.title}</p>)
            }
            <div className='womennavbarpic' >
                <img src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksHomepageBanner_8thSt_70505?wid=286&fmt=pjpeg" alt="" />
                <p style={{ backgroundColor: "#685438" }} >See The Feature</p>
            </div>
        </div>
    )
}
export const AccessoriesDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='accessoriesSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Accessories.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const SaleDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='saleSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Sale.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const SustainabilityDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='sustainabilitySubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Sustainability.map((ele) => <p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.title}</p>)
            }
        </div>
    )
}

