"use client"
import KritCart from '@/components/KritCart'
import LogIn from '@/components/LogIn'
import { getData } from '@/lib/getData'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = async () => {
  return (
    <div>
    <KritCart/>
    </div>
  )
}

export default page
