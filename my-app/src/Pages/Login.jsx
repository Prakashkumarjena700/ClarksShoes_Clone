import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { LoggerContext } from '../Context/LoggerContextProvider'


export default function Login() {

  const Navigate = useNavigate()
  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const { setUser, setUserType } = useContext(LoggerContext)

  const handelLogin = () => {
    const payload = { email, password }
    console.log(payload)

    // if (email === "" || password === "") {
    //   toast({
    //     position: 'top',
    //     variant: 'top-accent',
    //     title: 'Missing information',
    //     description: `Please enter all mandatory fields`,
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true
    //   })
    // } else {
    //   setLoading(true)
    //   fetch("https://worrisome-leggings-goat.cyclic.app/users/login", {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //     headers: {
    //       "Content-type": "application/json"
    //     }
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       setLoading(false)
    //       toast({
    //         position: 'top',
    //         variant: 'top-accent',
    //         title: 'Login successful',
    //         description: `Thank you ${res.name}`,
    //         status: 'success',
    //         duration: 5000,
    //         isClosable: true
    //       })
    //       setUser(res.name)
    //       setUserType(res.type)
    //       localStorage.setItem("user",res.name)
    //       localStorage.setItem("userType",res.type)
    //       Navigate('/')
    //     })
    //     .catch((err) => {
    //       setLoading(false)
    //       toast({
    //         position: 'top',
    //         variant: 'top-accent',
    //         title: 'Wrong credential',
    //         description: `Please enter correct information`,
    //         status: 'error',
    //         duration: 5000,
    //         isClosable: true
    //       })
    //     })
    // }

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
          <button className={loading && 'fetchinginProcess'} onClick={handelLogin} >LOG IN</button>
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
