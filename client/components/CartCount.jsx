import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartCount() {
  const cartValue = useSelector((state) => state.cartReducer.cartValue);
  console.log(cartValue.length);

  return (
    <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
      <h2>Products</h2>
      <Link
        className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
        href="/cart"
      >
        View Cart ({cartValue.length})
      </Link>
    </div>
  );
}

export default CartCount;
