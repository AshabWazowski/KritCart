import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#f4f4f4] w-full px-[3%] py-[2%] mt-8 flex flex-col gap-3 tablet:flex-row tablet:justify-between'>
    
    
    <div className='flex flex-col justify-start text-start '>
    <h1 className='text-[4rem] font-semibold p-[0px] m-[0px]'>KritCart</h1>
    <p>Get newsletter updates for upcoming products and best discounts for all items</p>
    <div className='flex justify-between gap-2 w-full mt-4'>
    <input placeholder='Subscribe' className='border-none w-[85%] px-2 py-2 focus:outline-none rounded-2xl bg-[#ffffff]'/>
    <button className='inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Subscribe</button>
    </div>
    </div>
   
   
    <div className='flex justify-between gap-4 mt-4 tablet:gap-[4rem]'>
    
    <div>
    <p className='font-semibold'>Offline Stores</p>
    <ul className=''>
    <li className=''><Link href="/">San Francisco, US</Link></li>
    <li className=''><Link href="/">Zurich, Switzerland</Link></li>
    <li className=''><Link href="/">Manchester, United Kingdom</Link></li>
    <li className=''><Link href="/">New Delhi, India</Link></li>
    <li className=''><Link href="/">Mumbai, India</Link></li>
    </ul>
    </div>

    <div>
    <p className='font-semibold'>Get to know us</p>
    <ul className=''>
    <li className=''><Link href="/">Facebook</Link></li>
    <li className=''><Link href="/">Twitter</Link></li>
    <li className=''><Link href="/">Instagram</Link></li>
    <li className=''><Link href="/">LinkedIn</Link></li>
    </ul>
    </div>

    <div>
    <p className='font-semibold'>Orders and Policies</p>
    <ul className=''>
    <li className=''><Link href="/">Return and Exchange Policy</Link></li>
    <li className=''><Link href="/">Terms and Conditions</Link></li>
    <li className=''><Link href="/">Refund Policy</Link></li>
    <li className=''><Link href="/">Track your order</Link></li>
    <li className=''><Link href="/">Contact Support</Link></li>
    </ul>
    </div>
    </div>
      
    </footer>
  )
}

export default Footer
