import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { LoggerContext } from '../Context/LoggerContextProvider'


export default function Login() {
  const { userType, user, setUser, setUserType, isAuth, setIsAuth } = useContext(LoggerContext)



  const Navigate = useNavigate()
  const toast = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const handelLogin = () => {
    const payload = { email, password }

    if (email === "" || password === "") {

    } else {
      setLoading(true)
      fetch("https://witty-loafers-elk.cyclic.app/users/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg == "Wrong crediential") {
            setLoading(false)
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Wrong credential',
              description: `Please enter correct information`,
              status: 'error',
              duration: 5000,
              isClosable: true
            })
          } else {
            setLoading(false)
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Login successful',
              description: `${res.firstname}`,
              status: 'success',
              duration: 5000,
              isClosable: true
            })
            setUser(res.firstname)
            setUserType('user')
            setIsAuth(true)
            localStorage.setItem("user", res.firstname)
            localStorage.setItem("userType", 'user')
            localStorage.setItem("isAuth", true)
            localStorage.setItem("token", res.token)
            Navigate('/')
          }
        })
        .then(res => console.log(res))
        .catch((err) => {
          setLoading(false)
          toast({
            position: 'top',
            variant: 'top-accent',
            title: 'Wrong credential',
            description: `Please enter correct information`,
            status: 'error',
            duration: 5000,
            isClosable: true
          })
        })
    }

  }
  const AdminLogin = () => {
    const payload = { email, password }
    if (email === "" || password === "") {
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
      fetch("https://witty-loafers-elk.cyclic.app/admin/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then(res => {
          setLoading(false)
          if (res.msg == "Login sucessful as Admin") {
            localStorage.setItem("userType", "admin")
            localStorage.setItem("isAuth", true)
            localStorage.setItem("user", res.fullname)
            setIsAuth(true)
            setUser(res.fullname)
            setUserType('admin')
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Login successful',
              description: `${res.fullname}`,
              status: 'success',
              duration: 5000,
              isClosable: true
            })
            Navigate("/admindashboard")
          } else {
            setLoading(false)
            toast({
              position: 'top',
              variant: 'top-accent',
              title: 'Wrong credential',
              description: `Please enter correct information`,
              status: 'error',
              duration: 5000,
              isClosable: true
            })
          }
        })
        .catch((err) => {
          setLoading(false)
          toast({
            position: 'top',
            variant: 'top-accent',
            title: 'Wrong credential',
            description: `Please enter correct information`,
            status: 'error',
            duration: 5000,
            isClosable: true
          })
        })
    }


  }

  // toast({
  //   position: 'top',
  //   variant: 'top-accent',
  //   title: 'Missing information',
  //   description: `Please enter all mandatory fields`,
  //   status: 'warning',
  //   duration: 5000,
  //   isClosable: true
  // })

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
          <button className={loading && 'fetchinginProcess'} onClick={handelLogin} >LOG IN AS USER</button>
          <button className={loading && 'fetchinginProcess'} onClick={AdminLogin} >LOG IN AS ADMIN</button>
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
