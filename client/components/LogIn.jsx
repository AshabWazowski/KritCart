"use client"
import { loginValidate } from '@/lib/connection';
import { loggedInUser, userData } from '@/redux/slices/cartSlice';
import axios from 'axios';
import Link from 'next/link'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await loginValidate(formData);
      console.log(response);
      if(response.message){alert(response.message);}
      // Reset form after submission
      setFormData({ email: "", password: "" });      
      dispatch(loggedInUser(response.token));      
      dispatch(userData(response.userData));      
  };
  return (
    <div className='flex justify-center items-center py-[10%]'>
    <div className='w-[90%] h-[40%] flex flex-col justify-between items-center py-4 rounded-xl gap-6 bg-[#f6f6f6] tablet:w-[50%]'>
    <h3 className='text-black text-2xl font-bold'>Log In</h3>
    <div className='w-[100%]'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
        <input 
        type="text"
        name="email"
        placeholder="Enter your Email"
        className="w-[80%] border py-1 px-1 text-black "
        required
        value={formData.email}
        onChange={handleChange}
        />

        <input  type="password"
        name="password"
        placeholder="Enter your Password"
        className="w-[80%] border py-1 px-1 text-black"
        required
        value={formData.password}
        onChange={handleChange}
        />
        <div className='w-full flex justify-center items-center'>
    
        <button type='submit' className='bg-blue-700 px-10 py-2 rounded font-bold hover:bg-blue-600 text-white'>
        Submit
        </button>    
        </div>
        </form>
    </div> 
    <div className='w-full flex items-center justify-center'>
    <span className='text-black'>New User ? <Link href="/register">Register Here</Link></span>
    </div>
    </div>
      
    </div>
  )
}

export default LogIn
