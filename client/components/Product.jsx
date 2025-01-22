import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWishlistData, removeWishlistData } from "@/lib/getData";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const [wishlistIconFill , setWislistIconFill] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.images,
        qty: 1,
      })
    );
  };

  const handleWishlist = (productId) =>{
    console.log(productId, wishlistIconFill)

    if(wishlistIconFill){
      removeWishlistData("http://localhost:4554/product/wishlist/remove", productId);     
    }
    else{
      addWishlistData("http://localhost:4554/product/wishlist/add", productId);
    }
    setWislistIconFill(!wishlistIconFill)
  }
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
            className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white"
            onClick={handleAddToCart}
          >
            <BaggageClaim />
            <span>Add</span>
          </button>
          <span>
          <Heart fill={wishlistIconFill ? "Red" : "transparent"} onClick={()=>handleWishlist(product.id)}/>
          </span>
          </>
        </div>
      </div>
    </div>
  );
}
