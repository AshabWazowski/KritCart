"use client"
import React from 'react'
import { productsDemo } from '@/components/constant'
import CategoryProduct from '@/components/CategoryProduct'


const Men = ({params}) => {
  const categoryName = params.categoryId
  console.log(categoryName);
    const data = productsDemo.filter((item)=> item.category === categoryName);

  return (
    <div>
      <CategoryProduct product={data}/>
    </div>
  )
}

export default Men
