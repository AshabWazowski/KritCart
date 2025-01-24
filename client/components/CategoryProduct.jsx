"use client";
import FilterFacet from "@/sharedComponent/FilterFacet";
import React, { useState } from "react";
import Product from "./Product";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CategoryProduct = ({ product }) => {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");

  const handleDropdownChange = (event) => {
    const filter = event.target.value;
    setFilterValue(filter);
    // router.push(`/category/${filter}`);
  };
  return (
    <div className="w-full px-[6%] PY-[3%]">
      <div className="flex flex-col tablet:flex-row gap-4 px-[6%] py-[3%]">
        <FilterFacet />
        <div className="w-full rounded-xl bg-[#f4f4f4] grid grid-cols-1 p-2 tablet:grid-cols-3">
          {product.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
