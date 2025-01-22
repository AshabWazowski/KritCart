"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const ProductDetails = ({ params }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const paramsId = Math.floor(params.productId);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  console.log(data);


  return (
    <div className="flex px-[6%] py-[6%] items-center justify-center gap-10">
      {data?.map((itemDetail)=>{
        if(itemDetail.id === paramsId){
          return( 
            <>
            <div className="w-[60%] h-[70%]">
              <Image
                src={itemDetail.image}
                width={500}
                height={500}
                className=""
                alt="Product_Details"
              />
            </div>
  
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold text-2xl">{itemDetail.title}</h1>
              <div className="w-[100%] px-5">
                <h4 className="font-bold text-lg">Product Overview</h4>
                <p>
                  Upgrade your workspace with the UltraComfort Ergonomic Office
                  Chair, designed to deliver maximum comfort and support during
                  long work hours. With a sleek design and advanced ergonomic
                  features, this chair is perfect for home offices, corporate
                  settings, and everything in between.
                </p>
              </div>

              <div className="w-[100%] px-5">
              <h4 className="font-bold text-lg">Key Features</h4>
              <ul>
              <li>Ergonomic Design: Adjustable lumbar support, headrest, and armrests ensure optimal posture and reduce strain on your back, neck, and shoulders.</li>
              <li>Premium Material: Upholstered in breathable mesh fabric that promotes airflow, keeping you cool and comfortable throughout the day.</li>
              <li>Smooth Mobility: Equipped with 360° rotating wheels for easy movement on both carpets and hardwood floors.</li>
              <li>Tilt and Recline Mechanism: The backrest reclines up to 135° for relaxation and adjustable tilt tension, so you can find your ideal seating position.</li>
              </ul>
              </div>

              <div className="w-[100%] px-5">
              <h4 className="font-bold text-lg">Specification</h4>
              <ul>
              <li>Dimensions: 48" H x 25" W x 24" D</li>
              <li>Seat Height: Adjustable from 18" to 23"</li>
              <li>Weight Capacity: Up to 300 lbs.</li>
              <li>Material: Mesh fabric with a durable steel frame.</li>
              </ul>
              </div>

              <div className="w-[90%] px-5">
              <h4 className="font-bold text-lg">Customer Review</h4>
              <ul>
              <li>⭐️⭐️⭐️⭐️⭐️ "The UltraComfort chair has made a big difference in my workday. The lumbar support is a game-changer!" - Jane D.</li>
              <li>⭐️⭐️⭐️⭐️ "Love the reclining feature! Perfect for short breaks in between tasks." - Mike R.</li>
              </ul>
              </div>
            </div>
          </>
          )
        }
      })}
    </div>
  );
};

export default ProductDetails;
