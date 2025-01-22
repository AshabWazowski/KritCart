import React from "react";
// import men from "@/public/assets/men.jpg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HorizontalCardComponent = ({ image, title, btnText, url }) => {
  return (
    <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100">
      <Image
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={men}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Men Apperal
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Shop for the latest trends and Stylish new collection in Men Apperals
        </p>

        <Link
          href="/men"
          className="inline-flex items-center px-2 py-2 gap-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Shop Now
          <ArrowRight/>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalCardComponent;
