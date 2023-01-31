import React from 'react'
import "../Css/LoginAndSignup.css"
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {

  const Navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("")

  const handelregister = () => {
    const payload = {
      email,
      firstname,
      lastname,
      password,
      type
    }
    fetch("https://worrisome-leggings-goat.cyclic.app/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }




  return (
    <div  >
      <div className='formContainer' >
        <h1>CREATE AN ACCOUNT</h1>
        <div className='formDiv' >
          <label>Email Address</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <label >Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <label >Create Your Password </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <select onChange={(e) => setType(e.target.value)} >
            <option value="">Register as</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div>
            <input type="checkbox" /> <p>Remember Me</p></div>
          <button onClick={handelregister} >CREATE ACCOUNT</button>
          <p>By creating this account you agree to our <span>Terms & Conditions.</span></p>
          <p>Already have a Clarks Account? <span><Link to='/login' >Log In</Link></span></p>
        </div>
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
