import axios from "axios";

// Login
export const loginValidate = async (formData) =>{

    const res = await axios.post("http://localhost:4554/auth/login", formData);
    return res.data;          
}

// Registration 
export const registerValidate = async (formData) =>{
    try{
        await axios.post("http://localhost:4554/auth/register", formData);

    }catch(err){
        console.log("Register Error: ",err);
        
    }
          
}