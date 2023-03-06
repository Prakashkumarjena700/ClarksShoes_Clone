import React, { useContext } from 'react'
import { Women, Men, Kids, Originals, Accessories, Sale, Sustainability } from './NavbarItem'
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link, useNavigate } from 'react-router-dom';
import { ProductPageContext } from '../../Context/ProductPageContext';



export const WomenDropDown = () => {
    const { setGender, setType, type } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const [dropDown, setDropdown] = React.useState(false)

    const setPageforWomen = () => {
        setGender('Women')
        setType('')

        localStorage.setItem('gender', 'Women')
        localStorage.setItem('type', '')

        navigate("/productspage")
    }
    console.log(type)
    return (
        <div id='womenSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Women.map((ele) => <p onClick={setPageforWomen} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}>{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
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
    const { setGender, setType } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const setPageforMen = () => {
        setGender('Men')
        setType('')

        localStorage.setItem('gender', 'Men')
        localStorage.setItem('type', '')

        navigate("/productspage")
    }
    return (
        <div id='menSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Men.map((ele) => <p onClick={setPageforMen} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}  > {ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
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
    const { setGender, setType } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const setPageforKids = (path) => {
        setGender(path)
        setType('')

        localStorage.setItem('gender', path)
        localStorage.setItem('type', '')

        navigate("/productspage")
    }
    return (
        <div id='kidsSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Kids.map((ele) => <p onClick={() => setPageforKids(ele.path)} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const OriginalsDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    const { setGender, setType } = useContext(ProductPageContext)

    const navigate = useNavigate()

    const setPageforOriginal = (path) => {
        setGender(path)
        setType('')

        localStorage.setItem('gender', path)
        localStorage.setItem('type', '')

        navigate("/productspage")
    }
    return (
        <div id='originalsSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Originals.map((ele) => <p onClick={() => setPageforOriginal(ele.path)} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}  >{ele.id === 2 && <AiOutlineArrowRight />} {ele.title}</p>)
            }
            <div className='womennavbarpic' >
                <img src="https://clarks.scene7.com/is/image/Pangaea2Build/ClarksHomepageBanner_8thSt_70505?wid=286&fmt=pjpeg" alt="" />
                <p style={{ backgroundColor: "#685438" }} >See The Feature</p>
            </div>
        </div>
    )
}
export const AccessoriesDropDown = () => {

    const { type, setType, setGender } = useContext(ProductPageContext)

    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const setProductPage = (path) => {
        setType("Accessories")
        setGender(path)

        localStorage.setItem('gender', path)
        localStorage.setItem('type', 'Accessories')

        navigate("/productspage")
    }

    return (
        <div id='accessoriesSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Accessories.map((ele) => <p onClick={() => setProductPage(ele.path)} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const SaleDropDown = () => {

    const { type, setType, setGender } = useContext(ProductPageContext)

    const [dropDown, setDropdown] = React.useState(false)

    const navigate = useNavigate()

    const setProductPage = (path) => {
        setType('')
        setGender(path)

        localStorage.setItem('gender', path)
        localStorage.setItem('type', '')

        navigate("/productspage")
    }

    return (
        <div id='saleSubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Sale.map((ele) => <p onClick={() => setProductPage(ele.path)} className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.key}  >{ele.id === 2 && <AiOutlineArrowRight />}{ele.title}</p>)
            }
        </div>
    )
}
export const SustainabilityDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='sustainabilitySubmenue' onClick={() => setDropdown(!dropDown)} >
            {
                Sustainability.map((ele) => <Link to={ele.path} ><p className={ele.id === 2 ? 'heading' : 'normal'} id={ele.id === 3 ? 'subheading' : 'normal'} key={ele.id}  >{ele.title}</p></Link>)
            }
        </div>
    )
}

