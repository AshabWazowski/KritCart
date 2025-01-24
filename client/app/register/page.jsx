"use client"
import { registerValidate } from "@/lib/connection";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     await registerValidate(formData);
       setFormData({ firstName: "",lastName:'', email: "", password: "" });      
      //  Navigating to Login
        router.push("/login");     
  };
  return (
    <div className="flex justify-center items-center py-[10%]">
      <div className="w-[90%] h-[50%] flex flex-col justify-between items-center px-2 py-2 rounded gap-6 bg-[#f6f6f6] tablet:w-[50%]">
        <h3 className="text-black text-2xl font-bold">Registration</h3>
        <div className="w-[100%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              className="w-[80%] border py-1 px-1 text-black"
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
              className="w-[80%] border py-1 px-1 text-black"
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="w-[80%] border py-1 px-1 text-black"
              value={formData.email}
          onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="w-[80%] border py-1 px-1 text-black"
              value={formData.password}
          onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="w-full flex flex-col justify-center items-center gap-8 py-6">
              <button
                type="submit"
                className="bg-blue-700 px-10 py-2 rounded font-bold hover:bg-blue-600 text-white"
              >
               Submit
              </button>
            </div>
          </form>
        </div>
        <div className='w-full flex items-center justify-center'>
    <span className='text-black'>Already an Existing User ? <Link href="/">Login Here</Link></span>
    </div>
      </div>
    </div>
  );
};

export default Registration;
