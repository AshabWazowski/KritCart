"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HorizontalCardComponent from '@/sharedComponent/HorizontalCardComponent';
import CategoryComponent from '@/components/CategoryComponent';
import Footer from '@/components/Footer';
import FilterFacet from '@/sharedComponent/FilterFacet';

const TestItems = () => {
  const handleCarouselClick = (e) =>{
      console.log(e)
  }
  return(
    <div>
    <FilterFacet/>
    <HorizontalCardComponent/>
    <CategoryComponent/>
    <Footer/>
    </div>
  )
}

export default TestItems
