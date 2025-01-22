import FilterFacet from '@/sharedComponent/FilterFacet'
import React from 'react'
import Product from './Product'

const CategoryProduct = ({product}) => {
  return (
    <div className='w-full px-[6%] PY-[3%]'>
    <div className='flex gap-4 px-[6%] py-[3%]'>
     <FilterFacet/>
     <div className='w-full rounded-xl bg-[#f4f4f4] grid grid-cols-1 p-2 tablet:grid-cols-3'>
      {product.map((item)=>(
        <Product key={item.id} product={item}/>
  ))}
     </div>
     </div>
    </div>
  )
}

export default CategoryProduct
