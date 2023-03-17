import React from 'react'
import "../Css/LoginAndSignup.css"
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useToast } from '@chakra-ui/react'

export default function Register() {

  const Navigate = useNavigate()
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handelregister = async () => {
    const payload = {
      email,
      firstname,
      lastname,
      password
    }

    if (email === "" || firstname === "" || lastname === "" || password === "") {
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
      setLoading(true)
      await fetch(`https://witty-loafers-elk.cyclic.app/users/register`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      }).then(res => res.json())
        .then(res => {
          setLoading(false)
          if (res.msg == 'new user has been register') {
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Register successful',
              description: `${payload.firstname}`,
              status: 'success',
              duration: 5000,
              isClosable: true
            })
            Navigate("/login")
          } else if (res.msg == 'Already have an account please login') {
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Already user existing',
              description: `Already have an account please login`,
              status: 'warning',
              duration: 5000,
              isClosable: true
            })
            Navigate("/login")
          }
          else {
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Error',
              description: `Something went wrong`,
              status: 'error',
              duration: 5000,
              isClosable: true
            })

          }
        })
        .catch(err => {
          setLoading(false)
          toast({
            position: 'top',
            variant: 'top-accent',
            title: 'Error',
            description: `Something went wrong`,
            status: 'error',
            duration: 5000,
            isClosable: true
          })
          console.log(err)
        })
    }
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
          <div>
            <input type="checkbox" /> <p>Remember Me</p></div>
          <button className={loading && 'fetchinginProcess'} onClick={handelregister} >CREATE ACCOUNT</button>
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
