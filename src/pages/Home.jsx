import { Link } from "react-router-dom"
import { HiOutlinePencil, HiOutlinePhoto } from "react-icons/hi2";
import { IoVideocamOutline, IoChatbubbleOutline, IoLinkOutline } from "react-icons/io5";
import { CiCamera, CiHeart } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";

import { jenna, smile, dan, david, edward, milly, daniel, elise, gaelle, nelly, stella, bobby, postImg1, postImg2, postImg3, postImg4, postImg5, postImg6, postImg7, bootstrap } from '../assets'

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

      {/* POSTS 1*/}
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

      {/* POSTS 2*/}
      <div className="w-full bg-white flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={edward} alt="edward" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium">Edward Mayers</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        You all know how i love bootstrap, but i didn't have time to dig deeper into it. Therefore i found this very interesting video i wanted to share with you all. <span className="font-medium">#bootsrap #webdesign</span>
        </p>
        
        {/* image */}
        <div className="w-full flex items-start gap-3 bg-whiteBg p-3">
          <img src={bootstrap} alt="bootstrap" className="rounded-xl h-[120px] w-[250px] object-cover"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-[1rem] font-medium">
              What's new in Bootstrap 4 ?
            </h1>
            <p className="text-[0.85rem]">
              Before I create the new Bootstrap 4 crash course I want to go over some of the changes from Bootstrap 3.
            </p>
            <p className="text-[0.75rem]">
              YOUTUBE.COM
            </p>
          </div>
        </div>
        
        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2">
          <div className="flex items-center gap-[45px]">
            <div className="flex items-center gap-3 relative">
              <img src={daniel} alt="daniel" className="w-[35px] h-[35px] rounded-full"/>
              <img src={elise} alt="elsie" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
            </div>

            <div className="flex flex-col gap-0">
              <h1 className="text-[0.8rem] font-medium">Daniel, Elise</h1>
              <p className="text-[0.8rem]"> liked this</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.9rem]">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[1.3rem]"/>
              <p>2</p>
            </div>

            <div className="flex items-center gap-1">
              <IoLinkOutline className="text-[1.3rem]"/>
              <p>0</p>
            </div>
            
            <div className="flex items-center gap-1">
              <IoChatbubbleOutline className="text-[1.2rem]"/>
              <p>2</p>
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

      {/* POSTS 3*/}
      <div className="w-full bg-white flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={elise} alt="elise" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium">Elise Walker</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        Thanks a lot to <span className="font-medium">@Gaelle</span> and <span className="font-medium">@Rolf</span> for this wonderful team lunch. The food was really tasty and we had some great laughs. Thanks to all the team, you're all awesome !
        </p>
        
        {/* image */}
        <img src={postImg2} alt="image-2" className="rounded-xl"/>

        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2">
          <div className="flex items-center gap-[70px]">
            <div className="flex items-center gap-3 relative">
              <img src={gaelle} alt="gaelle" className="w-[35px] h-[35px] rounded-full"/>
              <img src={edward} alt="edward" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
              <img src={nelly} alt="nelly" className="w-[35px] h-[35px] rounded-full absolute left-[50px]"/>
            </div>

            <div className="flex flex-col gap=0">
              <h1 className="text-[0.8rem] font-medium">Gaelle, Edward</h1>
              <p className="text-[0.8rem]">and 1 more liked this</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.9rem]">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[1.3rem]"/>
              <p>3</p>
            </div>

            <div className="flex items-center gap-1">
              <IoLinkOutline className="text-[1.3rem]"/>
              <p>0</p>
            </div>
            
            <div className="flex items-center gap-1">
              <IoChatbubbleOutline className="text-[1.2rem]"/>
              <p>5</p>
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