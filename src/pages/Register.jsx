import { useState } from "react";

import { CiFaceSmile, CiFlag1 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoLock } from "react-icons/go";''

import { logoBold, type1, type2, type3 } from '../assets'

const Register = () => {

  const [ tab, setTab ] = useState("welcome")

  return (
    <div className="h-[100vh] w-[100vw] bg-whiteBg">
      <nav className="w-full h-[60px] flex items-center justify-center bg-white">
        <img src={logoBold} alt="logo" className="h-[50px] w-[50px]"/>
      </nav>

      <div className=" my-8 flex items-center justify-center gap-20 text-[1.2rem] text-gray-400">
        <div className={`${tab === "welcome" || tab === "yourself" || tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <CiFaceSmile />
        </div>
        <div className={`${tab === "yourself" || tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <IoPersonOutline/>
        </div>
        <div className={`${tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <HiOutlinePhoto />
        </div>
        <div className={`${tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <GoLock />
        </div>
        <div className={`${tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <CiFlag1/>
        </div>
      </div>

      <div className="mt-36">
        {
          tab === "welcome" && (            
            <div className="flex flex-col items-center justify-center gap-10 w-full">
              <h1 className="text-[1.2rem] font-medium text-gray-600">welcome, select an account type</h1>
              <div className="flex items-center justify-center gap-7 w-full">
                <div className="flex items-center flex-col justify-center gap-7">
                  <div className="relative p-8 bg-white rounded-md w-[320px] object-contain h-[400px] bg-car-img bg-no-repeat object-center">
                    <img src={type1} alt="car" className="absolute w-full right-1 top-[-35px] z-10"/>

                    <div className="mt-56 text-center">
                      <h1 className="font-medium text-[1.2rem] text-gray-600">Company</h1>
                      <p className="py-2 text-[0.9rem]">Create a company account to be able to do some awesome things.</p>
                    </div>

                    <button 
                      className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                      onClick={()=> setTab("yourself")}
                    >
                      continue
                    </button>
                  </div>
                </div>

                <div className="flex items-center flex-col justify-center gap-7">
                  <div className="relative p-8 bg-white rounded-md w-[320px] object-contain h-[400px] bg-bg-img-4 bg-no-repeat object-center">
                    <img src={type2} alt="car" className="absolute w-full right-1 top-[-35px] z-10"/>

                    <div className="mt-56 text-center">
                      <h1 className="font-medium text-[1.2rem] text-gray-600">Public Person</h1>
                      <p className="py-2 text-[0.9rem]">Create a public account to be able to do some awesome things..</p>
                    </div>

                    <button 
                      className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                      onClick={()=> setTab("yourself")}
                    >
                      continue
                    </button>
                  </div>
                </div>

                <div className="flex items-center flex-col justify-center gap-7">
                  <div className="relative p-8 bg-white rounded-md w-[320px] object-contain h-[400px] bg-bg-img-5 bg-no-repeat object-center">
                    <img src={type3} alt="car" className="absolute w-full right-1 top-[-35px] z-10"/>

                    <div className="mt-56 text-center">
                      <h1 className="font-medium text-[1.2rem] text-gray-600">Personal</h1>
                      <p className="py-2 text-[0.9rem]">Create a personal account to be able to do some awesome things.</p>
                    </div>

                    <button 
                      className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                      onClick={()=> setTab("yourself")}
                    >
                      continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          )
        }
      </div>
    </div>
  )
}

export default Register