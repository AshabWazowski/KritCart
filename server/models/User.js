import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        min: 4, 
        max: 50,
    },
    lastName:{
        type:String,
        required: true,
        min: 4, 
        max: 50,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:20,
    },
    history:{
        type: Array,
        default:[],
    },
    wishlist:{
        type: Array,
        default:[],
    },
    cart:{
        type: Array,
        default:[],
    },
})

const User = mongoose.model('user', UserSchema);

export default User;