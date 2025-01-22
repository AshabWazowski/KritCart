import mongoose from "mongoose";

const connectDB = async (MONGODB) =>{
    console.log("Inside Mongo");
    
    try{        
        await mongoose.connect(MONGODB);
        console.log("MongoDb is Connected");
    }catch(error){
        console.log('Error : ', error.message);

    }
}

export default connectDB;