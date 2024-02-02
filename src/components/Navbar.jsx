import { useState } from "react"
import { logoBold, jenna, bobby, dan, nelly, milly, elise, edward, david, daniel, stella } from '../assets'

import { CiHeart, CiChat1, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { IoPersonRemoveOutline, IoPersonAddOutline  } from "react-icons/io5";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { SlPicture } from "react-icons/sl";
import { GoTag } from "react-icons/go";


const Navbar = () => {

  const [ islikesOpen, setIsLikesOpen ] = useState(false)
  const [ isnotiOpen, setIsNotiOpen ] = useState(false)
  const [ ismessageOpen, setIsMessageOpen ] = useState(true)


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
      {/* notification */}
      <div>
        {
          isnotiOpen && (
            <div className="absolute flex flex-col gap-4 bottom-[-410px] left-[130px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
              <div className="flex justify-between border-b px-5 py-4">
                <p className="text-[0.8rem] capitalize text-gray-400 font-medium">Notifications</p>
                  <BsBell className="text-gray-400"/>
              </div>
              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b">
                <div className="flex items-start gap-5">
                  <img src={david} alt="david" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[150px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600">David KIm</span> commented on <span className="font-medium text-gray-600">your post</span></h1>
                    <p className="text-[0.65rem] text-gray-400">30 minutes ago</p>
                  </div>
                </div>
                <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b">
                <div className="flex items-start gap-5">
                  <img src={daniel} alt="daniel" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600">Daniel wellington</span> liked your <span className="font-medium text-gray-600">profile</span></h1>
                    <p className="text-[0.65rem] text-gray-400">43 minutes ago</p>
                  </div>
                </div>
                <CiHeart className=" text-gray-400 text-[1.5rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b">
                <div className="flex items-start gap-5">
                  <img src={stella} alt="stella" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600">Stella Bergmann</span> shared a <span className="font-medium text-gray-600">New Video</span> on your wall.</h1>
                    <p className="text-[0.65rem] text-gray-400">Yesterday</p>
                  </div>
                </div>
                <PiYoutubeLogoThin className=" text-gray-400 text-[1.2rem]"/>
              </div>

              <div className="flex items-start justify-between gap-3 w-full px-5 pb-2">
                <div className="flex items-start gap-5">
                  <img src={elise} alt="elsie" className="w-[35px] h-[35px] object-contain rounded-full" />
                  <div className="flex flex-col ">
                    <h1 className="max-w-[200px] text-[0.8rem] text-gray-400"><span className="font-medium text-gray-600">Elise Walker</span> shared an <span className="font-medium text-gray-600">Image</span> with you and 2 other people.</h1>
                    <p className="text-[0.65rem] text-gray-400">2 days ago</p>
                  </div>
                </div>
                <SlPicture className=" text-gray-400 text-[1.2rem]"/>
              </div>
              <button className="w-full capitalize text-[0.8rem] text-gray-400 bg-whiteBg py-2"> view all</button>
            </div>
          )
        }
      </div>
      {/* messages */}
        <div>
          {
            ismessageOpen && (
              <div className="absolute flex flex-col gap-4 bottom-[-430px] left-[200px] bg-white w-[350px] z-20 border shadow-md rounded-xl">
                <div className="flex justify-between border-b px-5 py-4">
                    <p className="text-[0.7rem] uppercase text-gray-400 font-medium">messages</p>
                    <p className="text-gray-400 text-[0.7rem]">INBOX</p>
                </div>
                <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b">
                  <div className="flex items-start gap-4">
                    <img src={elise} alt="elise" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[0.75rem] font-medium text-gray-600">Nelly Schwartz</h1>
                      <p className="max-w-[200px] text-[0.8rem] text-gray-400">I think we should meet near the Starbucks so we can get...</p>
                      <p className="text-[0.65rem] text-gray-400">Yesterday</p>
                    </div>
                  </div>
                  <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
                </div>

                <div className="flex items-start justify-between gap-3 w-full px-5 pb-2 border-b">
                  <div className="flex items-start gap-4">
                    <img src={edward} alt="edward" className="w-[35px] h-[35px] object-contain rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[0.75rem] font-medium text-gray-600">Edward Mayers</h1>
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
                      <h1 className="text-[0.75rem] font-medium text-gray-600">Dan Walker</h1>
                      <p className="max-w-[200px] text-[0.8rem] text-gray-400">Hey there, would it be possible to borrow your bicycle, i really need...</p>
                      <p className="text-[0.65rem] text-gray-400">jan 03 2020</p>
                    </div>
                  </div>
                  <CiChat1 className=" text-gray-400 text-[1.2rem]"/>
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