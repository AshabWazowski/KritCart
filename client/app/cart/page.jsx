"use client"
import Breadcrumb from "@/components/Breadcrumb";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "@/redux/slices/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cartValues = useSelector((state)=>state.cartReducer.cartValue);
  const user = useSelector((state)=>state.cartReducer.user);
  const token = useSelector((state)=>state.cartReducer.token);
  console.log(cartValues);
  


  const handleIncrement = (id)=>{
   dispatch(increaseQty(id))
  //  handleSummaryTotal()
  }
  const handleDecrease = (id)=>{
   dispatch(decreaseQty(id))
  //  handleSummaryTotal()
  }

  const handleSuccessClearCart = () =>{
    dispatch(clearCart())
  }

  const handleRemoveFromCart = (id) =>{
    dispatch(removeFromCart(id))
    // handleSummaryTotal()
  }
  const subTotal = cartValues.reduce((acc , item)=> (acc + item.price*item.qty), 0).toFixed(2)
  return (
    <div className="px-20 py-16">
      <Breadcrumb />
      <div className="grid grid-cols-1 gap-14 tablet:grid-cols-12">
     
     
      {/* CART ITEMS */}
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* CART1 */}
            {cartValues.map((item)=>(
              <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4" key={item.id}>
              
              {/*IMAGE and TITLE*/}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img[0]}
                    width={249}
                    height={249}
                    alt="Alt text"
                    className="rounded-xl w-20 h-20"
                  />
                  <div className="flex flex-col w-[60%]">
                    <h2>{item.title}</h2>
                    <small>Golden</small>
                  </div>
                </div>

                {/* INCREMENT DECREMENT BUTTON */}
                <div className="flex flex-col justify-center items-center gap-4">
                <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
                  <button className="border-r border-gray-400 py-2 px-4" onClick={()=>handleDecrease(item.id)}>
                    <Minus />
                  </button>
                  <p className="flex-grow py-2 px-4">{item.qty}</p>
                  <button className="border-l border-gray-400 py-2 px-4" onClick={() =>handleIncrement(item.id)}>
                    <Plus />
                  </button>
                </div>

                {/* PRICE and DELETE*/}
                <div className="flex items-center gap-2">
                  <h4>${item.price}</h4>
                  <button onClick={()=>handleRemoveFromCart(item.id)}>
                    <Trash2 className="text-red-600 w-5 h-5" />
                  </button>
                </div>

                </div>
              </div>

  ))}
            

          </div>


        </div>



        {/* CART TOTAL */}
        <div className="col-span-6 tablet:col-span-4 h-auto sm:block bg-[#f4f4f4] border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">Cart total</h2>
<div className="border-b border-slate-500 pb-4">
          {cartValues.map((item)=>(
            <div className="flex items-center justify-between w-[100%] pb-6 ">
              <span className="w-[60%] font-medium text-gray-700">{item.title}</span>
              <span className="font-medium text-gray-700">${(item.price*item.qty).toFixed(2)}</span>
              </div>
            
  ))}
  </div>
          <div className="flex items-center justify-between  pb-6">
            <span>Subtotal </span>
            <span>${subTotal}</span>
          </div>
          
          <div className="flex items-center justify-between border-b border-slate-500 pb-4">
            <span>Shipping </span>
            <span>+ $10</span>
          </div>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total </span>
            <span>${subTotal === 0 ? 0 : subTotal}</span>
          </div>
          <Link
            href={cartValues.length > 0 && token !== ''? "/checkout" : '/login'}
            className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal mt-24"
            onClick={cartValues.length > 0 ? handleSuccessClearCart : null}
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
