"use client"
import { CheckCircle } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 gap-4'>
    <h3 className='text-2xl'>You have successfully placed your order</h3>
    <span>
    <CheckCircle className='text-green-400'/>    
    </span>
    </div>
  )
}

export default page
