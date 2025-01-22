"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "@/public/assets/1.png"
import Banner2 from "@/public/assets/2.png"
import Banner3 from "@/public/assets/3.png"
import Banner4 from "@/public/assets/4.png"
import Image from 'next/image';
import CardComponent from '@/sharedComponent/CardComponent';
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
