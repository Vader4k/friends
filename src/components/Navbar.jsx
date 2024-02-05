import { useState, useEffect } from "react"
import { logoBold, jenna, bobby, dan, nelly, milly, elise, edward, david, daniel, stella, pizza, slicer } from '../assets'

import { CiHeart, CiChat1, CiSearch, CiFilter, CiSettings } from "react-icons/ci";
import { FiHelpCircle, FiShoppingCart } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { IoPersonRemoveOutline, IoPersonAddOutline, IoSunnyOutline  } from "react-icons/io5";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { SlPicture } from "react-icons/sl";
import { GoTag } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";


import { explorePage, cartPage } from "../constants";

const Navbar = () => {

  const [ islikesOpen, setIsLikesOpen ] = useState(false)
  const [ isnotiOpen, setIsNotiOpen ] = useState(false)
  const [ ismessageOpen, setIsMessageOpen ] = useState(false)
  const [ isexploreOpen, setIsExploreOpen ] = useState(false)
  const [ iscartOpen, setIsCartOpen ] = useState(false)
  const [ isprofileOpen, setIsProfileOpen ] = useState(false)

  // come back for dark mode
  const [theme, setTheme] = useState(null);
  const [toggle, settoggle] = useState(true);

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  },[theme])

  const handleThemeSwitched = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }


  return (
    <nav className="dark:bg-customDark1 dark:border-none dark:text-white w-full h-[60px] flex items-center justify-between border-b px-3 bg-white relative ">
      <div className="w-full flex items-center gap-8">
        <div>
          <img 
            src={logoBold} 
            alt="friends_logo" 
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="flex items-center gap-3 text-[1.2rem] text-gray-400">
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md text-gray-500 hover:text-white hover:bg-red-500 transition-all">
              <CiHeart onClick={()=> setIsLikesOpen((prev) => (!prev))}/>
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-customBlue hover:text-white transition-all">
              <BsBell onClick={()=> setIsNotiOpen((prev) => (!prev))}/>
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] bg-customBlue rounded-md text-white relative transition-all">
              <HiOutlineEnvelope onClick={()=> setIsMessageOpen((prev) => (!prev))}/>
              <div className="absolute p-[5px] rounded-full bg-green-300 top-[-7px] right-[-5px] z-10 border-2 border-white transition-all"/>
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-blue-500 hover:text-white transition-all">
              <CiChat1 />
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md hover:bg-blue-500 hover:text-white transition-all">
              <TbGridDots onClick={()=> setIsExploreOpen((prev) => (!prev))}/>
            </div>
          </div>

      </div>

      <div className="w-full flex items-center justify-end gap-8">
        <div className="relative">
          <input type="text" placeholder="Search" className="w-[300px] py-2 pl-10 outline-none bg-whiteBg rounded-3xl text-[0.85rem] dark:bg-customDark2"/>
            <CiSearch className="absolute top-3 left-3 text-gray-600"/>
        </div>
        <div className="relative flex items-center justify-center h-[40px] w-fit">
          <FiShoppingCart onClick={()=> setIsCartOpen((prev) => (!prev))}/>
          <div className="absolute p-[4px] rounded-full bg-customBlue top-1 right-[-8px] z-10 border-2 border-white transition-all"/>
        </div>
        <img src={jenna} alt="profile_photo" className="w-[40px] h-[40px] rounded-full object-contain" onClick={()=> setIsProfileOpen((prev) => (!prev))}/>
      </div>

      {/* Friend REQUEST */}
      <div>
        {
          islikesOpen && (
            <div className="dark:bg-customDark1 dark:border-none dark:text-gray-500 absolute flex flex-col gap-4 bottom-[-560px] left-[90px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
              <div className="flex justify-between border-b px-5 py-4 dark:border-gray-700">
                <p className="text-[0.8rem] capitalize text-gray-400 font-medium">Friend request</p>
                <CiSearch/>
              </div>
              <div className="flex items-start justify-between w-full px-3 py-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <img src={bobby} alt="bobby" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium dark:text-customBlue">Bobby Brown</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">Najeel verwick is a common friend</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between w-full px-3 py-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <img src={dan} alt="dan" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium dark:text-customBlue">Dan Walker</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">you have 4 common friends</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <img src={nelly} alt="nelly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font- dark:text-customBlue">Nelly Schwartz</span>. Check her <span className="font-medium dark:text-customBlue">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>

              <div className="flex items-start justify-between w-full px-3 py-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <img src={milly} alt="milly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="uppercase text-[0.7rem] font-medium dark:text-customBlue">Milly Augustine</h1>
                    <p className="max-w-[180px] text-[0.8rem] text-gray-400">you have 8 common friends</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[0.9rem]">
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl ">
                    <IoPersonAddOutline />
                  </div>
                  <div className="flex items-center justify-center h-[35px] w-[35px] bg-whiteBg dark:bg-customDark2 rounded-xl">
                    <IoPersonRemoveOutline />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <img src={elise} alt="elise" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font-medium dark:text-customBlue">Elise Walker</span>. Check her <span className="font-medium dark:text-customBlue">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-3 py-2">
                <div className="flex items-start gap-3">
                  <img src={edward} alt="nelly" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <p className="max-w-[250px] text-[0.8rem] text-gray-400">you are now friends with <span className="font-medium dark:text-customBlue">Edward Mayers</span>. Check his <span className="font-medium dark:text-customBlue">Profile</span></p>
                  </div>
                </div>
                <GoTag className=" text-gray-400"/>
              </div>
              <button className="dark:bg-customDark1 w-full uppercase text-[0.7rem] text-gray-400 bg-whiteBg py-2"> view all</button>
            </div>
          )
        }
      </div>
      {/* notification */}
      <div>
        {
          isnotiOpen && (
            <div className="dark:bg-customDark1 dark:border-none dark:text-gray-500 absolute flex flex-col gap-4 bottom-[-410px] left-[130px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
              <div className="flex justify-between border-b px-5 py-4 dark:border-gray-700">
                <p className="text-[0.8rem] capitalize text-gray-400 font-medium">Notifications</p>
                  <BsBell className="text-gray-400"/>
              </div>
              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-5">
                  <img src={david} alt="david" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[150px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600 dark:text-customBlue">David KIm</span> commented on <span className="font-medium text-gray-600 dark:text-customBlue">your post</span></h1>
                    <p className="text-[0.65rem] text-gray-400">30 minutes ago</p>
                  </div>
                </div>
                <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-5">
                  <img src={daniel} alt="daniel" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600 dark:text-customBlue">Daniel wellington</span> liked your <span className="font-medium text-gray-600 dark:text-customBlue">profile</span></h1>
                    <p className="text-[0.65rem] text-gray-400">43 minutes ago</p>
                  </div>
                </div>
                <CiHeart className=" text-gray-400 text-[1.5rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b dark:border-gray-700">
                <div className="flex items-start gap-5">
                  <img src={stella} alt="stella" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600 dark:text-customBlue">Stella Bergmann</span> shared a <span className="font-medium text-gray-600 dark:text-customBlue">New Video</span> on your wall.</h1>
                    <p className="text-[0.65rem] text-gray-400">Yesterday</p>
                  </div>
                </div>
                <PiYoutubeLogoThin className=" text-gray-400 text-[1.2rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2">
                <div className="flex items-start gap-5">
                  <img src={elise} alt="elsie" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600 dark:text-customBlue">Elise Walker</span> shared an <span className="font-medium text-gray-600 dark:text-customBlue">Image</span> with you and 2 other people.</h1>
                    <p className="text-[0.65rem] text-gray-400">2 days ago</p>
                  </div>
                </div>
                <SlPicture className=" text-gray-400 text-[1.2rem]"/>
              </div>
              <button className="dark:bg-customDark1 w-full text-[0.7rem] text-gray-400 bg-whiteBg py-2 uppercase"> view all</button>
            </div>
          )
        }
      </div>
      {/* messages */}
        <div>
          {
            ismessageOpen && (
              <div className="dark:bg-customDark1 dark:text-gray-500 dark:border-none absolute flex flex-col gap-4 bottom-[-430px] left-[200px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
                <div className="flex justify-between border-b px-5 py-4 dark:border-gray-700">
                    <p className="text-[0.7rem] uppercase text-gray-400 font-medium">messages</p>
                    <p className="text-gray-400 text-[0.7rem]">INBOX</p>
                </div>
                <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <img src={elise} alt="elise" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[0.75rem] font-medium text-gray-600 dark:text-customBlue">Nelly Schwartz</h1>
                      <p className="max-w-[200px] text-[0.8rem] text-gray-400">I think we should meet near the Starbucks so we can get...</p>
                      <p className="text-[0.65rem] text-gray-400">Yesterday</p>
                    </div>
                  </div>
                  <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
                </div>

                <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <img src={edward} alt="edward" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[0.75rem] font-medium text-gray-600 dark:text-customBlue">Edward Mayers</h1>
                      <p className="max-w-[200px] text-[0.8rem] text-gray-400">That was a real pleasure seeing you last time we really should...</p>
                      <p className="text-[0.65rem] text-gray-400">Last week</p>
                    </div>
                  </div>
                  <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
                </div>

                <div className="flex items-start justify-between gap-3 w-full px-5 pb-2">
                  <div className="flex items-start gap-4">
                    <img src={dan} alt="dan" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[0.75rem] font-medium text-gray-600 dark:text-customBlue">Dan Walker</h1>
                      <p className="max-w-[200px] text-[0.8rem] text-gray-400">Hey there, would it be possible to borrow your bicycle, i really need...</p>
                      <p className="text-[0.65rem] text-gray-400">jan 03 2020</p>
                    </div>
                  </div>
                  <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
                </div>
                <button className="w-full capitalize text-[0.8rem] text-gray-400 bg-whiteBg py-2 dark:bg-customDark1"> clear all</button>
              </div>
            )
          }
          
        </div>
      {/* EXPLORE PAGE */}
      <div>
        {
          isexploreOpen && (
            <div className="dark:text-gray-400 dark:bg-customDark3 w-full h-[100vh] bg-white z-30 absolute left-0 top-[60px] flex">
              <div className="w-full max-w-[900px] mx-auto py-6">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-semibold text-[1.2rem] dark:text-white">Explore</h1>
                  <div className="relative">
                    <input type="text" placeholder="Filter" className="text-[0.8rem] h-[40px] w-[250px] px-4 outline-none border rounded-[50px] dark:bg-customDark2 dark:border-none"/>
                    <CiFilter className="text-[1.2rem] text-gray-500 absolute right-3 top-[10px]"/>
                  </div>
                </div>
                <div className="flex justify-between px-16 py-10 w-full flex-wrap gap-x-[6rem] gap-y-[3rem] items-center ">
                  {
                    explorePage.map((item) => (
                      <div  key={item.id}>
                        <div className="flex flex-col text-center gap-2">
                          <img src={item.img} alt={item.tag} className="w-[65px]"/>
                          <p className="text-[0.85rem] font-medium">{item.tag}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>

      {/* CART PAGE */}
      <div>
        {
          iscartOpen && (
            <div className="dark:bg-customDark1 dark:border-customDark2 absolute flex flex-col gap-4 bottom-[-450px] right-[80px] bg-white w-[300px] z-20 border shadow-md rounded-xl p-5">
              <div className="flex items-center justify-between text-gray-400 p-2 border-b dark:border-gray-700">
                <button className="text-[0.75rem] outline-none rounded-2xl border p-2 dark:border-blue-500 dark:text-blue-500">View Cart</button>
                <div className="text-[0.9rem]">Total: <span className="text-gray-600 text-[1rem] dark:text-white">$193.00</span></div>
              </div>
              <div className="flex flex-col gap-3 p-2">
                {
                  cartPage.map((item) => (
                    <div key={item.id} className="flex gap-4 py-2 border-b dark:border-gray-700">
                      <div>
                        <img src={item.img} alt={item.name} className="w-[60px]"/>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[0.9rem] font-medium dark:text-white">{item.name}</h1>
                        <div className="flex items-center gap-3 text-[0.85rem] text-gray-400">
                          <p>{item.price}</p>
                          <p>Qty: {item.qty}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
                <button className="bg-customBlue text-white p-2">chechout</button>
              </div>
            </div>
          )
        }
      </div>

      {/* PROFILE CONTROL */}
        <div>
          {
            isprofileOpen && (
              <div>
                <div className="dark:bg-customDark1 dark:border-none absolute flex flex-col gap-4 bottom-[-470px] right-[20px] bg-white w-[300px] z-20 border shadow-md rounded-xl">
                  <div className="w-full p-5  flex items-center border-b dark:border-gray-700 justify-between">
                    <h1 className="uppercase font-bold text-[0.7rem] text-gray-500 dark:text-white">jenna davis</h1>
                    <div onClick={()=> settoggle((prev) => (!prev))}>
                      {
                        toggle ? <FaRegMoon className="text-white" onClick={handleThemeSwitched}/> : <IoSunnyOutline className="text-yellow-500" onClick={handleThemeSwitched}/>
                      }
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-5 pb-5">
                    <div className="flex items-center justify-between border-b dark:border-gray-700 py-3">
                      <div className="flex gap-5 items-center">
                        <img src={jenna} alt="profile_pic" className="w-[35px] rounded-full"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Jenna Davis</h1>
                          <p>Main account</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="flex gap-5 items-center">
                        <img src={pizza} alt="profile_pic" className="w-[35px] rounded-full"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Fast Pizza</h1>
                          <p>Company page</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-5 border-b dark:border-gray-700">
                      <div className="flex gap-5 items-center">
                        <img src={slicer} alt="profile_pic" className="w-[35px] rounded-full"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Slicer</h1>
                          <p>Company page</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="flex gap-5 items-center">
                        <CiSettings className="text-[1.5rem] text-gray-500"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Settinge</h1>
                          <p>Access widget settings</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="flex gap-5 items-center">
                        <FiHelpCircle className="text-[1.5rem] text-gray-500"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Help</h1>
                          <p>Contact our support</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="flex gap-5 items-center">
                        <RiLogoutCircleRLine className="text-[1.5rem] text-gray-500"/>
                        <div className="flex flex-col gap-1 text-[0.75rem] text-gray-500">
                          <h1 className="font-medium dark:text-white">Log out</h1>
                          <p>Log out from your account</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar