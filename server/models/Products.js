// The data has already been saved in the database 
import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    prodId:{
        type: Number,
    },
    title:{
        type:String,
        required: true,
    },
    image:{
        type: String,
        required:true,
    },
    qty:{
        type: Number,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    category:{
        type: String,
    },
    rating: {
      count: { type: Number, default: 0 }, // Total number of ratings
      rate: { type: Number, min: 0, max: 5, default: 0 } // Average rating out of 5
   }

})

const Products = mongoose.model('products', productScheme);

export default Products;