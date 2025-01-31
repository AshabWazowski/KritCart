"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Banner1 from "@/public/assets/1.png"
// import Banner2 from "@/public/assets/2.png"
// import Banner3 from "@/public/assets/3.png"
// import Banner4 from "@/public/assets/4.png"
import Image from 'next/image';

const CarouselComponent = () => {
    const handleCarouselClick = (e) =>{
         console.log(e)
     }
     return (
       <div className="bg-gray-100 w-full  flex items-center justify-center">
         <Carousel showArrows={false} onClickItem={handleCarouselClick} autoPlay={true} interval={2000} showThumbs={false} infiniteLoop>
         <div>
         <Image src={''} alt='Slide1' className='w-[100%] h-[100%] bg-contain cursor-pointer'/>
         </div>
         <div>
         <Image src={''} alt='Slide2' className='w-[100%] h-[100%] bg-contain cursor-pointer'/>
         </div>
         <div>
         <Image src={''} alt='Slide3' className='w-[100%] h-[100%] bg-contain cursor-pointer'/>
         </div>
         <div>
         <Image src={''} alt='Slide4' className='w-[100%] h-[100%] bg-contain cursor-pointer'/>
         </div>
         </Carousel>
       </div>
     )
}

export default CarouselComponent
