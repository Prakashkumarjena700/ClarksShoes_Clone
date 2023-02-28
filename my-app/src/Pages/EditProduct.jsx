import React, { useState } from 'react'



export default function EditProduct() {
    const [products, setProducts] = useState([])

    const getData = () => {
        try {
            fetch('https://worrisome-leggings-goat.cyclic.app/data')
        } catch {

        }
    }

    return (
        <div>
            <div className='myshopingBag' >
                <h1>Edit Product</h1>
            </div>
        </div>
    )
}
