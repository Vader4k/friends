import { Link } from "react-router-dom"
import { HiOutlinePencil, HiOutlinePhoto } from "react-icons/hi2";
import { IoVideocamOutline, IoChatbubbleOutline, IoLinkOutline } from "react-icons/io5";
import { CiCamera, CiHeart } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";

import { jenna, smile, dan, david, edward, milly, daniel, elise, gaelle, nelly, stella, bobby, postImg1, postImg2, postImg3, postImg4, postImg5, postImg6, postImg7 } from '../assets'

const Home = () => {
  return (
    <section className="w-full flex flex-col gap-5 text-gray-500">
      {/* UPLOAD */}
      <div className="w-full h-[250px] bg-white rounded-xl text-gray-500">
        <div className=" w-full flex items-center justify-between px-5">
          <div className="flex items-center gap-2 text-[0.9rem] border-r py-3 px-10">
            <HiOutlinePencil />
            <p>Publish</p>
          </div>

          <div className="flex items-center gap-2 text-[0.9rem] py-3 border-b w-full px-10">
            <HiOutlinePhoto />
            <p>Albums</p>
          </div>

          <div className="flex items-center gap-2 text-[0.9rem] py-3 px-10 border-b w-full">
            <IoVideocamOutline />
            <p>Video</p>
          </div>
        </div>

        {/* post input */}
        <div className="w-full px-5 flex items-center gap-5 mt-10">
          <img src={jenna} alt="profile_pic" className="w-[45px] rounded-full"/>
          <input type="text" placeholder="write something about..." className="outline-none text-[0.85rem]"/>
        </div>

        <div className="w-full flex items-center gap-3 border-t p-3 mt-16 text-[0.9rem]">
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg rounded-xl">
            <CiCamera className="text-[1.5rem]"/>
            <p>Media</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg rounded-xl">
            <img src={smile} alt="smile" className="w-[20px] h-[20px]"/>
            <p>Activity</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg rounded-xl">
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* POSTS */}
      <div className="w-full bg-white flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={dan} alt="dan" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium">Dan Walker</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        Yesterday with <span className="font-medium">@Karen Miller</span> and <span className="font-medium">@Marvin </span>Stemperd at the <span className="font-medium">#Rock'n'Rolla</span> concert in LA. Was totally fantastic! People were really excited about this one!
        </p>
        
        {/* image */}
        <img src={postImg1} alt="image-1" className="rounded-xl"/>

        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2">
          <div className="flex items-center gap-[90px]">
            <div className="flex items-center gap-3 relative">
              <img src={dan} alt="dan" className="w-[35px] h-[35px] rounded-full"/>
              <img src={david} alt="david" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
              <img src={edward} alt="ed" className="w-[35px] h-[35px] rounded-full absolute left-[50px]"/>
              <img src={milly} alt="milly" className="w-[35px] h-[35px] rounded-full absolute left-[73px]"/>
            </div>

            <div className="flex flex-col gap=0">
              <h1 className="text-[0.8rem] font-medium">Milly, David</h1>
              <p className="text-[0.8rem]">and 23 more liked this</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.9rem]">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[1.3rem]"/>
              <p>27</p>
            </div>

            <div className="flex items-center gap-1">
              <IoLinkOutline className="text-[1.3rem]"/>
              <p>9</p>
            </div>
            
            <div className="flex items-center gap-1">
              <IoChatbubbleOutline className="text-[1.2rem]"/>
              <p>3</p>
            </div>
          </div>

          {/* custom buttons */}
          <div className="flex items-center gap-2 absolute bottom-[55px] right-0">
            <div className="w-[45px] h-[45px] bg-customBlue rounded-full flex items-center justify-center text-white">
              <IoChatbubbleOutline className="text-[1.2rem]"/>
            </div>
            <div className="w-[45px] h-[45px] bg-customBlue rounded-full flex items-center justify-center text-white">
              <IoLinkOutline className="text-[1.2rem]"/>
            </div>
            <div className="peer w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center border text-red-500 hover:bg-red-500 hover:text-white ">
              <FaHeart/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home