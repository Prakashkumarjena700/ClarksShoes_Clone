import React, { useState } from 'react'

import { useToast } from '@chakra-ui/react'

export default function AddProduct() {
  const [name, setName] = useState('')
  const [catagory, setCatagory] = useState('')
  const [type, setType] = useState('')
  const [dis, setDis] = useState('')
  const [prePrice1, setPrePrice1] = useState('')
  const [saleprice, setSaleprice] = useState('')
  const [color, setColor] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')

  const toast = useToast()

  const addProduct = () => {
    const payload = {
      name,
      catagory,
      type,
      dis,
      prePrice1: '$' + prePrice1,
      saleprice: Number(saleprice),
      quentity: 1,
      color,
      img1,
      img2,
      img3,
      img4,
      img5,
    }
    if (name === "" || catagory === "" || dis === "" || prePrice1 === "" || saleprice === "" || color === "" || img1 === "" || img2 === "" || img3 === "" || img4 === "" || img5 === "") {
      toast({
        position: 'top',
        variant: 'top-accent',
        title: 'Missing information',
        description: `Please enter all mandatory fields`,
        status: 'warning',
        duration: 5000,
        isClosable: true
      })
    } else {
      try {
        fetch(`https://worrisome-leggings-goat.cyclic.app/data/create`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json"
          }
        }).then((res) => res.json())
        toast({
          position: 'top',
          variant: 'top-accent',
          title: 'Added successful',
          description: `Your ${catagory} product has been added`,
          status: 'success',
          duration: 5000,
          isClosable: true
        })
        setName('')
        setDis('')
        setCatagory('')
        setPrePrice1('')
        setSaleprice('')
        setColor('')
        setImg1('')
        setImg2('')
        setImg3('')
        setImg4('')
        setImg5('')
        setType('')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <div className='myshopingBag' >
        <h1>Add Product</h1>
      </div>
      <div className='addproduct'>
        <div>
          <label >Name</label>
          <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
          <label >Catagory</label>
          <br />
          <select value={catagory} onChange={(e) => setCatagory(e.target.value)} >
            <option value="">Select</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="men accessories">Men Accessories</option>
            <option value="women accessories">Women Accessories</option>
          </select>
          <br />
          <label >Type</label>
          <br />
          <select value={type} onChange={(e) => setType(e.target.value)} >
            <option value="">Select</option>
            <option value="Sandel">Sandel</option>
            <option value="Boot">Boot</option>
            <option value="Shoe">Shoe</option>
            <option value="Slipper">Slipper</option>
          </select>
          <br />
          <label >Description</label>
          <input value={dis} type="text" onChange={(e) => setDis(e.target.value)} />
          <label >Original Price</label>
          <input value={prePrice1} type="text" onChange={(e) => setPrePrice1(e.target.value)} />
          <label >Sale Price</label>
          <input value={saleprice} type='Number' onChange={(e) => setSaleprice(e.target.value)} />
        </div>
        <div>
          <label >Color</label>
          <input value={color} type="text" onChange={(e) => setColor(e.target.value)} />
          <label >Image 1</label>
          <input value={img1} type="text" onChange={(e) => setImg1(e.target.value)} />
          <label >Image 2</label>
          <input value={img2} type="text" onChange={(e) => setImg2(e.target.value)} />
          <label >Image 3</label>
          <input value={img3} type="text" onChange={(e) => setImg3(e.target.value)} />
          <label >Image 4</label>
          <input value={img4} type="text" onChange={(e) => setImg4(e.target.value)} />
          <label >Image 5</label>
          <input value={img5} type="text" onChange={(e) => setImg5(e.target.value)} />
        </div>
      </div>
      <button onClick={addProduct} className='addbtn' >Add Product</button>
    </div>
  )
}
