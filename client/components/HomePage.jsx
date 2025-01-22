import ProductList from "@/components/ProductList";
import { getData } from "@/lib/getData";
import {demoProducts} from "./constant"
import { useRouter } from "next/navigation";
import {productsDemo} from "@/components/constant";



const HomePage = async () => { 

  // const products = ( await getData("https://fakestoreapi.com/products")) ?? [];
// console.log(products);

  return (
    <div className="px-8 mt-8">           
        <div className="bg-black dark:bg-slate-700 p-4">
         <ProductList products={productsDemo} />
        </div>
      
    </div>
  );
};
export default HomePage;
