import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const Navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelLogin = () => {
    const payload = { email, password }

    if (email === "" || password === "") {
      alert("Please enter all the details")
    } else {
      fetch("https://worrisome-leggings-goat.cyclic.app/users/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          alert(`${res.msg}${" "}${res.name}`)
          localStorage.setItem("token", res.token)
          localStorage.setItem("logger", res.name)
          localStorage.setItem("logger", res.type)
          Navigate('/')
        })
        .catch((err) =>
          alert("Wrong Credential")

        )

    }
  }

  return (
    <div >
      <div className='formContainer' >
        <h1>Login In</h1>
        <div className='formDiv' >
          <label >Email address</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <span>Forgot your password?</span>
          <div><input type="checkbox" /><p>Remember Me</p></div>
          <button onClick={handelLogin} >LOG IN</button>
          <p>Don't have a Clarks account?  <span><Link to='/register' >CREATE AN ACCOUNT</Link></span></p>
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
