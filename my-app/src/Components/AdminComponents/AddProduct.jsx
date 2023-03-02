import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Button } from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

export default function AddProduct() {
  const [name, setName] = useState('')
  const [dis, setDis] = useState("")
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [rating, setRating] = useState('')
  const [color, setColor] = useState('')
  const [gender, setGender] = useState('')
  const [type, setType] = useState('')
  const [img1, setimg1] = useState('')
  const [img2, setimg2] = useState('')
  const [img3, setimg3] = useState('')
  const [img4, setimg4] = useState('')
  const [img5, setimg5] = useState('')
  const [checkedItems, setCheckedItems] = useState([]);

  const [loading, setloading] = useState(false)

  const toast = useToast()

  const handleCheckboxChange = (event) => {
    const checkedValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedItems([...checkedItems, checkedValue]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== checkedValue));
    }
  };

  const handelSubmit = () => {
    setloading(true)
    const payload = {
      name,
      dis,
      price,
      discount,
      rating,
      quentity: 1,
      color,
      gender,
      type,
      size: checkedItems,
      img1,
      img2,
      img3,
      img4,
      img5
    }
    try {
      fetch(`https://witty-loafers-elk.cyclic.app/data/add`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      }).then(res => res.json())
        .then(res => {
          if (res.msg === "Product has been added") {
            setloading(false)
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Added successful',
              description: "Product has been added",
              status: 'success',
              duration: 5000,
              isClosable: true
            })
          }
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
      setloading(false)
    }
    setName("")
    setDis("")
    setPrice("")
    setDiscount("")
    setRating("")
    setColor("")
    setGender("")
    setType("")
    setimg1("")
    setimg2("")
    setimg3("")
    setimg4("")
    setimg5("")
  }

  return (
    <div>
      <div className='addProductContainer' >
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Dis' value={dis} onChange={(e) => setDis(e.target.value)} />
        <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Discount' value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <input type="number" placeholder='Rating' value={rating} onChange={(e) => setRating(e.target.value)} />
        <input type="text" placeholder='Color' value={color} onChange={(e) => setColor(e.target.value)} />

        <Popover placement='top-start'>
          <PopoverTrigger>
            <button className='sizeChat' >Size</button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Size Chart</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody className='sizeContainer' >
              <label >4<input type="checkbox" value="4" checked={checkedItems.includes("4")} onChange={handleCheckboxChange} /></label>
              <label >4.5<input type="checkbox" value="4.5" checked={checkedItems.includes("4.5")} onChange={handleCheckboxChange} /></label>
              <label>5<input type="checkbox" value="5" checked={checkedItems.includes("5")} onChange={handleCheckboxChange} /></label>
              <label>5.5<input type="checkbox" value="5.5" checked={checkedItems.includes("5.5")} onChange={handleCheckboxChange} /></label>
              <label>6<input type="checkbox" value="6" checked={checkedItems.includes("6")} onChange={handleCheckboxChange} /></label>
              <label>6.6<input type="checkbox" value="6.5" checked={checkedItems.includes("6.5")} onChange={handleCheckboxChange} /></label>
              <label>7<input type="checkbox" value="7" checked={checkedItems.includes("7")} onChange={handleCheckboxChange} /></label>
              <label>7.5<input type="checkbox" value="7.5" checked={checkedItems.includes("7.5")} onChange={handleCheckboxChange} /></label>
              <label>8<input type="checkbox" value="8" checked={checkedItems.includes("8")} onChange={handleCheckboxChange} /></label>
              <label>8.5<input type="checkbox" value="8.5" checked={checkedItems.includes("8.5")} onChange={handleCheckboxChange} /></label>
              <label>9<input type="checkbox" value="9" checked={checkedItems.includes("9")} onChange={handleCheckboxChange} /></label>
              <label>9.5<input type="checkbox" value="9.5" checked={checkedItems.includes("9.5")} onChange={handleCheckboxChange} /></label>
              <label>10<input type="checkbox" value="10" checked={checkedItems.includes("10")} onChange={handleCheckboxChange} /></label>
              <label>10.5<input type="checkbox" value="10.5" checked={checkedItems.includes("10.5")} onChange={handleCheckboxChange} /></label>
              <label>11<input type="checkbox" value="11" checked={checkedItems.includes("11")} onChange={handleCheckboxChange} /></label>
              <label>11.5<input type="checkbox" value="11.5" checked={checkedItems.includes("11.5")} onChange={handleCheckboxChange} /></label>
              <label>12<input type="checkbox" value="12" checked={checkedItems.includes("12")} onChange={handleCheckboxChange} /></label>
              <label>12.5<input type="checkbox" value="12.5" checked={checkedItems.includes("12.5")} onChange={handleCheckboxChange} /></label>
              <label>13<input type="checkbox" value="13" checked={checkedItems.includes("13")} onChange={handleCheckboxChange} /></label>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <select onChange={(e) => setGender(e.target.value)} value={gender} >
          <option value="">Select</option>
          <option value="Boy">Boy</option>
          <option value="Girl">Girl</option>
          <option value="Male">Male</option>
          <option value="Femail">Femail</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select onChange={(e) => setType(e.target.value)} value={type} >
          <option value="">Select</option>
          <option value="Boot">Boot</option>
          <option value="Shoe">Shoe</option>
          <option value="Canvas">Canvas</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Desert Boot">Desert Boot</option>
          <option value="Flat Sandals">Flat Sandals</option>
          <option value="Ankle Boot">Ankle Boot</option>
          <option value="Sandal">Sandal</option>
        </select>
        <input type="url" placeholder='Image1' value={img1} onChange={(e) => setimg1(e.target.value)} />
        <input type="url" placeholder='Image2' value={img2} onChange={(e) => setimg2(e.target.value)} />
        <input type="url" placeholder='Image3' value={img3} onChange={(e) => setimg3(e.target.value)} />
        <input type="url" placeholder='Image4' value={img4} onChange={(e) => setimg4(e.target.value)} />
        <input type="url" placeholder='Image5' value={img5} onChange={(e) => setimg5(e.target.value)} />

      </div>
      <button onClick={handelSubmit} id={loading && 'loading'} className='addproductBtn' >Add Product</button>
    </div>
  )
}


// name: String,
//   dis: String,
//     price: Number,
//       discount: String,
//         rating: Number,
//           color: String,
//             size: Array,
//               gender: String,
//                 type: String,
//                   quentity: Number,
//                     img1: String,
//                       img2: String,
//                         img3: String,
//                           img4: String,
//                             img5: String
