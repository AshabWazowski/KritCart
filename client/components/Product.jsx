"use client";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "@/redux/slices/cartSlice";
import { BaggageClaim, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistData, removeWishlistData } from "@/lib/getData";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const [cartAdded, setCartAdded] = useState(false);
  const cartValue = useSelector((state)=> state.cartReducer.cartValue);


  const handleAddToCart = () => {
    console.log("1: ",cartAdded);
    setCartAdded(!cartAdded);
    console.log("2: ",cartAdded);
    {!cartAdded ? 
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.images,
        qty: 1,
      })
    )
    :
    dispatch(removeFromCart(product.id))
  }
  };
  return (
    <div className=" m-3 rounded-lg mr-3 flex justify-between flex-col bg-white dark:bg-slate-900 overflow-hidden border shadow">
      <Link href="#">
        <img
          src={product.images[0]}
          alt={product.title}
          width={556}
          height={656}
          className="w-full h-68 object-cover p-3"
        />
      </Link>
      <div className="px-4 py-4">
        <Link href={`/products/${product.id}`}>
          <h2 className="text-center dark:text-slate-200 text-slate-800 my-2 font-semibold">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 mb-0 dark:text-slate-200 text-slate-800">
          <p>$ {product.price}</p>
          <>
            <button
              className={`flex items-center space-x-2 ${!cartAdded ? 'bg-lime-600' : 'bg-red-800'} px-4 py-2 rounded-md text-white`}
              onClick={handleAddToCart}
            >
              <BaggageClaim />
              <span>{cartAdded ? "Remove" : "Add"}</span>
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
