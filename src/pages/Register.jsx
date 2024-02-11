import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { CiFaceSmile, CiFlag1 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoLock } from "react-icons/go"; ''

import { logoBold, type1, type2, type3, avatar, mailbox } from '../assets'
import { AuthContext } from "../context/authContext";

const Register = () => {
  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    loginUser()
    navigate('/')

  }

  const [tab, setTab] = useState("welcome")

  return (
    <div className="h-[100vh] w-[100vw] bg-whiteBg">
      <nav className="w-full h-[60px] flex items-center justify-center bg-white">
        <img src={logoBold} alt="logo" className="h-[50px] w-[50px]" />
      </nav>

      <div className=" my-8 flex justify-between mx-auto sm:max-w-[400px] max-w-[300px] px-3  text-[1.2rem] text-gray-400 ">
        <div className={`${tab === "welcome" || tab === "yourself" || tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <CiFaceSmile />
        </div>
        <div className={`${tab === "yourself" || tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <IoPersonOutline />
        </div>
        <div className={`${tab === "profilePic" || tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <HiOutlinePhoto />
        </div>
        <div className={`${tab === "password" || tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <GoLock />
        </div>
        <div className={`${tab === "done" ? 'border border-blue-500 text-blue-500' : ''} w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer`}>
          <CiFlag1 />
        </div>
      </div>

      <div className="sm:mt-36 mt-20">
        {
          tab === "welcome" && (
            <div className="w-full container px-3 mx-auto">
              <h1 className=" text-center text-[1.2rem] font-medium text-gray-600 mb-10">welcome, select an account type</h1>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-10 sm:gap-3 border mx-auto justify-between max-w-[1100px] w-full">
                {/* block */}
                <div className=" w-full min-h-[400px] flex flex-col justify-between  px-8 pb-8 pt-0 bg-white rounded-md  border">
                  <div className="relative bg-car-img bg-no-repeat bg-cover max-h-[200px] h-[1000px]">
                    <img src={type1} alt="car" className="absolute w-full h-full sm:top-[-30px]  bottom-0 z-10" />
                  </div>

                  <div>
                    <div className=" text-center">
                      <h1 className="font-medium text-[1.2rem] text-gray-600">Company</h1>
                      <p className="py-2 text-[0.9rem]">Create a company account to be able to do some awesome things.</p>
                    </div>

                    <button
                      className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                      onClick={() => setTab("yourself")}
                    >
                      continue
                    </button>
                  </div>

                </div>

                {/* block */}
                <div className=" w-full min-h-[400px] flex flex-col justify-between  px-8 pb-8 pt-0 bg-white rounded-md border">
                  <div className="relative bg-no-repeat bg-cover max-h-[200px] h-[1000px] bg-bg-img-4">
                    <img src={type2} alt="car" className="absolute w-full h-full sm:top-[-30px]  bottom-0 z-10" />
                  </div>
                  <div className=" text-center">
                    <h1 className="font-medium text-[1.2rem] text-gray-600">Public Person</h1>
                    <p className="py-2 text-[0.9rem]">Create a public account to be able to do some awesome things..</p>
                  </div>

                  <button
                    className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                    onClick={() => setTab("yourself")}
                  >
                    continue
                  </button>
                </div>

                {/* block */}
                <div className="w-full min-h-[400px] flex flex-col justify-between  px-8 pb-8 pt-0 bg-white rounded-md border">
                  <div className="bg-no-repeat bg-bg-img-5 relative bg-cover max-h-[200px] h-[1000px]">
                    <img src={type3} alt="car" className="absolute w-full h-full sm:top-[-30px]  bottom-0 z-10" />
                  </div>

                  <div className=" text-center">
                    <h1 className="font-medium text-[1.2rem] text-gray-600">Personal</h1>
                    <p className="py-2 text-[0.9rem]">Create a personal account to be able to do some awesome things.</p>
                  </div>

                  <button
                    className="text-[0.85rem] text-gray-500 w-full border p-2 hover:text-white hover:bg-blue-400 rounded-xl"
                    onClick={() => setTab("yourself")}
                  >
                    continue
                  </button>
                </div>

              </div>
            </div>
          )
        }

        {
          tab === "yourself" && (
            <div className="gap-5 w-full px-3">
              <h1 className="text-[1.3rem] text-center font-medium text-gray-600 mb-4">Tell us more about you.</h1>

              <div className="max-w-[500px] mx-auto">
                <form className="flex flex-col gap-5 bg-white rounded-xl p-8  border ">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      required
                      className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                    <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5 ">First name</p>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      required
                      className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                    <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5">Last name</p>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                    <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5">email</p>
                  </div>
                </form>
                <div className="flex gap-3 w-fit ml-auto mt-4">
                  <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("welcome")}>Back</button>
                  <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("profilePic")}>Next</button>
                </div>
              </div>

            </div>  
          )
        }

        {
          tab === "profilePic" && (
            <div className="w-full px-3">
              <h1 className="text-[1.3rem] font-medium text-gray-600 mb-5 text-center">Upload a profile picture.</h1>
              <div className="mx-auto max-w-[500px]">
                <div className="bg-white rounded-xl p-8  border flex flex-col items-center justify-center gap-6">
                  <div className="flex items-center justify-center h-[120px] w-[120px] rounded-full border relative">
                    <img src={avatar} alt="avatar" className="rounded-full h-[100px] w-[100px]" />
                    <div className="absolute top-0 right-0 h-[40px] w-[40px] rounded-full bg-gray-300 flex items-center justify-center border-[4px] border-white">
                      <p className="text-white text-[1.2rem]">+</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-[0.85rem] text-center">Only images with a size lower than 3MB are allowed.</p>
                </div>

                <div className="flex gap-3 w-fit ml-auto mt-4">
                  <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("yourself")}>Back</button>
                  <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("password")}>Next</button>
                </div>
              </div>
            </div>
          )
        }

        {
          tab === "password" && (
            <div className=" w-full px-3">
              <h1 className="text-[1.3rem] font-medium text-gray-600 text-center mb-5">Secure your account.</h1>
              <div className="mx-auto max-w-[500px]">
                <div className="bg-white rounded-xl p-8  border">
                  <form className="flex flex-col gap-5">
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Choose a password"
                        required
                        className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                      <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5 ">Password</p>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Repeat your password"
                        required
                        className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                      <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5">Repeat password</p>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                        required
                        className="px-5 pt-8 pb-3 border rounded-md w-full text-[0.8rem] outline-none" />

                      <p className="uppercase text-[0.7rem] font-medium text-gray-600 absolute top-2 left-5">Phone number</p>
                    </div>
                  </form>
                </div>
              <div className="flex gap-4 ml-auto w-fit mt-4">
                <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("profilePic")}>Back</button>
                <button className="py-2 px-6 text-[0.75rem] border bg-white rounded-xl hover:text-white hover:bg-blue-400" onClick={() => setTab("done")}>Next</button>
              </div>
              </div>

            </div>
          )
        }

        {
          tab === "done" && (
            <div className=" w-full px-3">
              <h1 className="text-[1.3rem] font-medium text-gray-600 text-center mb-5">You're all set. Ready ?</h1>

              <div className="bg-white rounded-xl p-8 max-w-[500px] mx-auto border flex flex-col text-center gap-0">
                <img src={mailbox} alt="mailbox" className="max-w-[130px] h-[130px] mx-auto" />
                <h1 className="font-medium text-[1rem] mt-2">Congratz, you successfully created your account.</h1>
                <p className="text-gray-500 text-[0.85rem] text-center max-w-[350px] mx-auto">We just sent you a confirmation email. PLease confirm your account within 24 hours.</p>
                <button
                  className="my-5 border border-blue-300 text-blue-400 hover:bg-blue-400 hover:text-white w-full mx-auto rounded-md max-w-[300px] p-2 text-[0.8rem]"
                  onClick={(e) => handleLogin(e)}
                >Let Me In</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Register