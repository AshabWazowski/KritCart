import React from 'react'
import { categoriesData } from './constant'
import CardComponent from '@/sharedComponent/CardComponent'


const CategoryComponent = () => {
  return (
    <div className=''>
    <div className='flex justify-center items-center mt-8'>
    <h1 className='text-2xl font-semibold tablet:text-[4rem]'>Top Category</h1>
    </div>
    <div className='grid grid-cols-1 place-items-center gap-4 mt-8 p-4 bg-[#f4f4f4] tablet:grid-cols-5'>
    {categoriesData.map((item)=>(
        <CardComponent key={item.id} image={item.image} title={item.title} btnText={item.btnText} url={item.url}/>
    ))}      
    </div>
    </div>
  )
}

export default CategoryComponent
