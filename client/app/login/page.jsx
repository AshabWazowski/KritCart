"use client"
import KritCart from '@/components/KritCart'
import LogIn from '@/components/LogIn'
import React from 'react'
import { useSelector } from 'react-redux'

const Login = () => {
 const token = useSelector((state)=> state.cartReducer.token);

  return (
    <div>
   {!token ? <LogIn/> : <KritCart/>}
    </div>
  )
}

export default Login
