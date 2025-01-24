"use client";
import { loggedInUser, userData } from "@/redux/slices/cartSlice";
import {
  CircleUser,
  Heart,
  Home,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  Search,
  ShoppingCart,
  User2,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [ismobileNavbarOpen, setIsmobileNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.cartReducer.token);
  const user = useSelector((state) => state.cartReducer.user);
  const cartValue = useSelector((state) => state.cartReducer.cartValue);
  const wishlist = useSelector((state)=> state.cartReducer.wishlist);
  const handleSearchClick = () => {
    alert("Clicked");
  };

  const handleSidebar = () => {
    setIsmobileNavbarOpen(!ismobileNavbarOpen);
  };

  const handleSidebarClose = () => {
    setIsmobileNavbarOpen(false);
    console.log("Clicked");
  };
  const handleLogout = () => {
    dispatch(loggedInUser(""));
    dispatch(userData({}));
    setIsmobileNavbarOpen(false);
  };

  // const handleWishlistItem = () =>{

  // }
  return (
    <div className="px-[6%] py-2 flex justify-between items-center">
      <h2 className="text-2xl cursor-pointer">
        <Link href="/">KritCart</Link>
      </h2>

      <div className="w-[40%] h-full hidden tablet:flex justify-between items-center bg-[#f2f2f2] border border-white mt-2 rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none w-[85%] px-2 py-2 focus:outline-none"
        />
        <div className="px-2">
          <Search onClick={handleSearchClick} />
        </div>
      </div>

      {/* FOR LOGGED IN USERS */}

      {/* When the sidebar is not opened */}
      {token && (
        <Fragment>
          <div className="hidden tablet:flex items-center justify-center gap-8">
            <Link
              href="/"
              className="link flex items-center justify-center gap-1"
            >
              <Home />
            </Link>


            <Link href="/">
              <User2 />
            </Link>

            <span className="relative">
              <Link href="/cart">
                <span className="absolute right-1 bottom-4">
                  {cartValue.length}
                </span>
                <ShoppingCart />
              </Link>
            </span>

            <Link href="/login">
              <LogOutIcon onClick={handleLogout} />
            </Link>
          </div>
          <div className="cursor-pointer tablet:hidden">
            <MenuIcon onClick={handleSidebar} />
          </div>
        </Fragment>
      )}
      {/* When the sidebar is opened */}
      {token && ismobileNavbarOpen && (
        <Fragment>
          <div className="flex justify-between items-center flex-col bg-[#f4f4f4] w-[280px] h-full fixed top-0 right-0 z-50 tablet:hidden">
            <div className="w-full flex justify-start py-3 px-4">
              <X onClick={handleSidebarClose} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <Link
                href="/"
                className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                onClick={handleSidebarClose}
              >
                <Home />
                HOME
              </Link>

              <Link
                href="/"
                className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                onClick={handleSidebarClose}
              >
                <User2 />
                {user.firstName} {user.lastName}
              </Link>

              <span className="relative w-full">
                <Link
                  href="/cart"
                  className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                  onClick={handleSidebarClose}
                >
                  <span className="absolute left-4 bottom-4">
                    {cartValue.length}
                  </span>
                  <ShoppingCart />
                  YOUR CART
                </Link>
              </span>

              <Link
                href="/login"
                className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                onClick={handleLogout}
              >
                <LogOutIcon />
                LOGOUT
              </Link>
            </div>
            <div className="m-4 flex justify-between items-center bg-[#f2f2f2] border border-black mt-2 rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none w-[85%] px-2 py-2 focus:outline-none"
              />
              <div className="px-2">
                <Search onClick={handleSearchClick} />
              </div>
            </div>
          </div>
        </Fragment>
      )}

      {!token && (
        <Fragment>
          <div className="hidden tablet:flex items-center justify-center gap-10 ">
            <Link
              href="/"
              className="link flex items-center justify-center gap-1 hover:bg-slate-300 p-[5px] rounded-lg duration-500"
            >
              <Home />
            </Link>
            <Link
              href="/login"
              className="link flex items-center justify-center gap-1 hover:bg-slate-300 p-[5px] rounded-lg duration-500"
            >
              <CircleUser />
            </Link>
            <span className="relative hover:bg-slate-300 p-[5px] rounded-lg duration-500">
              <Link href="/cart">
                <span className="absolute right-3 bottom-4">
                  {cartValue.length}
                </span>
                <ShoppingCart />
              </Link>
            </span>
          </div>
          <div className="cursor-pointer tablet:hidden">
            <MenuIcon onClick={handleSidebar} />
          </div>
        </Fragment>
      )}
      {!token && ismobileNavbarOpen && (
        <Fragment>
          <div className="flex justify-between items-center flex-col bg-[#f4f4f4] w-[280px] h-full fixed top-0 right-0 z-50 tablet:hidden">
            <div className="w-full flex justify-start py-3 px-4">
              <X onClick={handleSidebarClose} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <Link
                href="/"
                className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                onClick={handleSidebarClose}
              >
                <HomeIcon />
                Home
              </Link>
              <Link
                href="/login"
                className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                onClick={handleSidebarClose}
              >
                <CircleUser />
                Login
              </Link>
              <span className="relative w-full">
                <Link
                  href="/cart"
                  className="flex justify-start items-center gap-2 text-xl w-full py-1 px-2 hover:bg-slate-300 duration-500"
                  onClick={handleSidebarClose}
                >
                  <span className="absolute left-4 bottom-4">
                    {cartValue.length}
                  </span>
                  <ShoppingCart />
                  YOUR CART
                </Link>
              </span>
            </div>
            <div className="m-4 flex justify-between items-center bg-[#f2f2f2] border border-black mt-2 rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none w-[85%] px-2 py-2 focus:outline-none"
              />
              <div className="px-2">
                <Search onClick={handleSearchClick} />
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Navbar;
