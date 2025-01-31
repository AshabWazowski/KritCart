import React from "react";
// import collection from "@/public/assets/collection.png";
import Image from "next/image";

const TopCollection = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex justify-center items-center mt-8 mb-8">
        <h1 className="text-2xl font-semibold tablet:text-[4rem]">
          Latest Collection
        </h1>
      </div>

      <div className="relative w-full px-4 mt-8 overflow-x-hidden tablet:mt-8">
        <Image src={""} alt="new" className="w-full rounded-3xl" />
        <div className="absolute top-0 w-full min-h-full flex justify-center items-center flex-col gap-2">
        <h1 className="text-3xl text-white font-semibold tablet:text-[4rem]">Shop for Latest Collection</h1>
        <p className="text-white font-semibold tablet:text-3xl p-2">
          For Men and Women
        </p>
        <button className="inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Shop Now
      </button>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
{/*
    <h1 className="absolute top-[30%] left-[20%] text-[130%] text-white font-bold tablet:left-[30%] tablet:text-[4rem]">
          Shop for Latest Collection
        </h1>
        <p className="absolute top-[45%] left-[40%] text-white font-semibold tablet:left-[45%] tablet:text-3xl tablet:p-0 tablet:m-0">
          For Men and Women
        </p>
        <button className="absolute top-[60%] left-[45%] inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 tablet:left-[50%]">
          Shop Now
        </button>
    
    */}