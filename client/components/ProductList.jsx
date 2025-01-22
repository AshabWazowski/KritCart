"use client";
import React from "react";
import Product from "./Product";


 const ProductList = ({ products }) => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="grid grid-cols-3 gap-8">
    {products.map((product, i) => {
      return <Product key={i} product={product} />;
    })}
    </div>
  );
}


export default ProductList