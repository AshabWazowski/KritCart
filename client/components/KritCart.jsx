import React from 'react'
import HomePage from './HomePage'
import CarouselComponent from '@/sharedComponent/CarouselComponent'
import CategoryComponent from './CategoryComponent'
import TopCollection from './TopCollection'
import Footer from './Footer'

const KritCart = () => {
  return (
    <div>
    <CarouselComponent/>
    <CategoryComponent/>
    <TopCollection/>
      {/*<HomePage/>*/}
    <Footer/>
    </div>
  )
}

export default KritCart
