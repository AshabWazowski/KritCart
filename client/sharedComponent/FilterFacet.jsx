import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FilterFacet = () => {
  return (
    <div className='w-full max-h-[300px] p-3 bg-[#f4f4f4] rounded-lg flex tablet:flex-col tablet:w-[300px]'>
    <div className='w-full hidden tablet:flex justify-center items-center py-4'>
    <h3 className='font-semibold'>Shop for more</h3>
    </div>

    <ul className='flex gap-2 w-[100%] justify-between overflow-hidden scroll-m-0 tablet:block'>
    <li><Link href='/category/men' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Men</p>
        <ArrowRight className='hidden tablet:block'/>
    </Link>
    </li>
    <li><Link href='/category/women' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Women</p>
        <ArrowRight className='hidden tablet:block'/>
    </Link>
    </li>
    <li><Link href='/category/footwear' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Footwear</p>
        <ArrowRight className='hidden tablet:block'/>
    </Link>
    </li>
    <li><Link href='/category/accessories' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Accessories</p>
        <ArrowRight className='hidden tablet:block'/>
    </Link>
    </li>
    <li><Link href='/category/electronics' className='flex justify-between py-2 px-[2%] border-b border-b-[#e0e0e0] text-[#323232] hover:bg-[#f9f9f9]'>
        <p className='font-lg'>Electronics</p>
        <ArrowRight className='hidden tablet:block'/>
    </Link>
    </li>
    
    
    </ul>

      
    </div>
  )
}

export default FilterFacet
