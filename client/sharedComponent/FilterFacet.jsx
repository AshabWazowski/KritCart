import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FilterFacet = () => {
  return (
    <div className='w-[200px] max-h-[300px] p-3 bg-[#f4f4f4] rounded-lg flex flex-col tablet:w-[300px]'>
    <div className='w-full flex justify-center items-center py-4'>
    <h3 className='font-semibold'>Shop for more</h3>
    </div>

    <ul>
    <li><Link href='/category/men' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Men</p>
        <ArrowRight/>
    </Link>
    </li>
    <li><Link href='/category/women' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Women</p>
        <ArrowRight/>
    </Link>
    </li>
    <li><Link href='/category/footwear' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Footwear</p>
        <ArrowRight/>
    </Link>
    </li>
    <li><Link href='/category/accessories' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Accessories</p>
        <ArrowRight/>
    </Link>
    </li>
    <li><Link href='/category/electronics' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Electronics</p>
        <ArrowRight/>
    </Link>
    </li>
    
    
    </ul>

      
    </div>
  )
}

export default FilterFacet
