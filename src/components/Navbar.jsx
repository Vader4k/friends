import { useState } from "react"
import { logoBold, jenna } from '../assets'

import { CiHeart, CiChat1, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="w-full h-[60px] flex items-center justify-between border-b px-3 bg-white">
      <div className="w-full flex items-center gap-8">
        <div>
          <img 
            src={logoBold} 
            alt="friends_logo" 
            className="w-[40px] h-[40px]"
          />
        </div>
        <div className="flex items-center gap-3 text-[1.2rem] text-gray-400">
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md text-gray-500 hover:text-white hover:bg-red-500 transition-all">
              <CiHeart />
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-customBlue hover:text-white transition-all">
              <BsBell />
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] bg-customBlue rounded-md text-white relative transition-all">
              <HiOutlineEnvelope />
              <div className="absolute p-[5px] rounded-full bg-green-300 top-[-7px] right-[-5px] z-10 border-2 border-white transition-all"/>
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-blue-500 hover:text-white transition-all">
              <CiChat1 />
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-blue-500 hover:text-white transition-all">
              <TbGridDots />
            </div>
          </div>

      </div>

      <div className="w-full flex items-center justify-end gap-8">
        <div className="relative">
          <input type="text" placeholder="Search" className="w-[300px] py-2 pl-10 outline-none bg-whiteBg rounded-3xl text-[0.85rem]"/>
            <CiSearch className="absolute top-3 left-3 text-gray-600"/>
        </div>
        <div className="relative flex items-center justify-center h-[40px] w-fit">
          <FiShoppingCart />
          <div className="absolute p-[4px] rounded-full bg-customBlue top-1 right-[-8px] z-10 border-2 border-white transition-all"/>
        </div>
        <img src={jenna} alt="profile_photo" className="w-[40px] h-[40px] rounded-full object-contain" />
      </div>

      {/* likes */}
      
    </nav>
  )
}

export default Navbar