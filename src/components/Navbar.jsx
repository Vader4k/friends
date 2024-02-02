import { useState } from "react"
import { logoBold, jenna, bobby, dan, nelly, milly, elise, edward  } from '../assets'

import { CiHeart, CiChat1, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { IoPersonRemoveOutline, IoPersonAddOutline  } from "react-icons/io5";
import { GoTag } from "react-icons/go";


const Navbar = () => {

  const [ islikesOpen, setIsLikesOpen ] = useState(true)



  return (
    <nav className="w-full h-[60px] flex items-center justify-between border-b px-3 bg-white relative">
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
      <div>
        {
          islikesOpen && (
            <div className="absolute flex flex-col gap-4 bottom-[-560px] left-[90px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
              <div className="flex justify-between border-b px-5 py-4">
                <p className="text-[0.8rem] capitalize text-gray-400 font-medium">Friend request</p>
                <CiSearch/>
              </div>
              <div className="flex items-start justify-between w-full px-3 py-2 border-b">
                <div className="flex items-start gap-3">
                  <img src={bobby} alt="bobby" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium">Bobby Brown</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">Najeel verwick is a common friend</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between w-full px-3 py-2 border-b">
                <div className="flex items-start gap-3">
                  <img src={dan} alt="dan" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium">Dan Walker</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">you have 4 common friends</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2 border-b">
                <div className="flex items-start gap-3">
                  <img src={nelly} alt="nelly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font-medium">Nelly Schwartz</span>. Check her <span className="font-medium">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>

              <div className="flex items-start justify-between w-full px-3 py-2 border-b">
                <div className="flex items-start gap-3">
                  <img src={milly} alt="milly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium">Milly Augustine</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">you have 8 common friends</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2 border-b">
                <div className="flex items-start gap-3">
                  <img src={elise} alt="elise" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font-medium">Elise Walker</span>. Check her <span className="font-medium">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2">
                <div className="flex items-start gap-3">
                  <img src={edward} alt="nelly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font-medium">Edward Mayers</span>. Check his <span className="font-medium">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>
              <button className="w-full capitalize text-[0.8rem] text-gray-400 bg-whiteBg py-2"> view all</button>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar