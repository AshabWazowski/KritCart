import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardComponent = ({ image, title, btnText, url }) => {
    return (
      <div className=" flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 hover:shadow-lg hover:shadow-black duration-500">
        <Link href={`/category/${url}`}>
          <Image src={image} className="rounded-t-lg " />
        </Link>
        <div className=" p-1 text-center">
          <Link href={`/category/${url}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#121212] dark:text-white">
            {title}
            </h5>
          </Link>
          <Link
            href={`/category/${url}`}
            className="inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            {btnText}
          </Link>
        </div>
      </div>
    );

  
};

export default CardComponent;


