import React, { useEffect, useState } from 'react'

import Skelitonforadmin from "./Skelitonforadmin"

export default function Customer() {
  const [usersArr, setUsersArr] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    setLoading(true)
    try {
      await fetch("https://witty-loafers-elk.cyclic.app/users")
        .then(res => res.json())
        .then(res => {
          setLoading(false)
          setUsersArr(res)
        })

    } catch (res) {
      console.log("Error")
      setLoading(false)
    }
  }
  return (
    <div>
      <div style={{ backgroundColor: '#F3F3F3' }} className='Ctable' >
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>Id</td>
      </div>
      {loading ? <Skelitonforadmin /> : usersArr.map((ele) =>
        <div className='Ctable' key={ele._id} >
          <td>{ele.firstname}</td>
          <td>{ele.lastname}</td>
          <td>{ele.email}</td>
          <td>{ele._id}</td>
        </div>)}

    </div>
  )
}
