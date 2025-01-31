import Data from "../models/Data.js";
import User from "../models/User.js";
import { Products } from "../productConstant/product.js";
// Adding the data to database

// Sorting function
const sortData = (filteredProduct, sortBy, order) =>{
    filteredProduct.sort((a , b)=>{
        if(sortBy === "price"){
            return order === "asc" ? a.price - b.price : b.price - a.price;
        }
        else if(sortBy === "title"){
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if(order === "asc"){
                return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
            }else{
                return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
            }
        }
        return 0
    })
    return filteredProduct;
}


export const category = async (req, res) =>{
    const {categoryName} = req.params;
   try{
    const filteredData = Products.filter((item)=> item.category === categoryName); 
     res.json(filteredData);
   }catch(error){
        return res.status(400).json({message:error.message})
   }
}

// Fetching all the data based on the User ID
export const getSortedData = async (req, res)=>{
    // send Id in the route:{"./:userId/data"}
    const {categoryName, sortField, sortOrder} = req.params;
    console.log(categoryName, sortField, sortOrder);
    
    try{
        const filteredData = await Products.filter((item)=> item.category === categoryName) //Filtered from the const data not the Database
        console.log("Filtered", filteredData);
        
        const sortedData = sortData(filteredData, sortField, sortOrder);
        console.log("Sorted", sortedData);
        
        res.status(200).json(sortedData);                        
    }catch(error){
        res.status(401).json({message: error.message});
    }
}

export const getWishlistData = async (req, res) =>{
    const {productId , userId} = req.body;

    const user = await User.findById({_id:userId});
    const existingWishlistItem = user.wishlist.find(productId);

    if(existingWishlistItem){
        
    }


}


export const allProductData = async (req, res) =>{
    try{
       res.status(200).json(Products);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}