import { useState } from "react";

// import { Link } from "react-router-dom"
import { HiOutlinePencil, HiOutlinePhoto } from "react-icons/hi2";
import { IoVideocamOutline, IoChatbubbleOutline, IoLinkOutline } from "react-icons/io5";
import { CiCamera, CiHeart } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";

import { jenna, smile, dan, david, edward, milly, daniel, elise, gaelle, nelly, stella, bobby, postImg1, postImg2, postImg3, postImg4, postImg5, postImg6, postImg7, bootstrap, bulma, rolf, mike, lana, album, trip } from '../assets'

const Home = () => {

  const [ isAlbumOpen, setIsAlbumOpen ] = useState(false)
  const [ isVideoOpen, setIsVideoOpen ] = useState(false)


  return (
    <section className="w-full flex flex-col gap-7 text-gray-500">
      {/* UPLOAD */}
      <div className="w-full h-[250px] bg-white dark:bg-customDark4 rounded-xl text-gray-500 border dark:border-gray-700 overflow-hidden">
        <div className=" w-full flex items-center justify-between ">
          <div className="flex items-center gap-2 text-[0.9rem] border-r dark:border-gray-700 py-3 px-16">
            <HiOutlinePencil />
            <p>Publish</p>
          </div>

          <div 
            className="flex items-center gap-2 text-[0.9rem] py-3 border-b dark:border-gray-700 dark:bg-customDark4 w-full px-16 cursor-pointer" 
            onClick={()=> setIsAlbumOpen(true)}>
            <HiOutlinePhoto/>
            <p>Albums</p>
          </div>

          <div 
            className="flex items-center gap-2 text-[0.9rem] py-3 px-10 border-b dark:border-gray-700 dark:bg-customDark4 w-full cursor-pointer"
            onClick={()=> setIsVideoOpen(true)}>
            <IoVideocamOutline />
            <p>Video</p>
          </div>
        </div>

        {/* post input */}
        <div className="w-full px-5 flex items-center gap-5 mt-10">
          <img src={jenna} alt="profile_pic" className="w-[45px] rounded-full"/>
          <input type="text" placeholder="write something about..." className="outline-none text-[0.85rem] dark:bg-customDark4"/>
        </div>

        <div className="w-full flex items-center gap-3 border-t dark:border-gray-700 p-3 mt-16 text-[0.9rem]">
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg dark:bg-customDark3 rounded-xl">
            <CiCamera className="text-[1.5rem]"/>
            <p>Media</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg dark:bg-customDark3 rounded-xl">
            <img src={smile} alt="smile" className="w-[20px] h-[20px]"/>
            <p>Activity</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-whiteBg dark:bg-customDark3 rounded-xl">
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* POSTS 1*/}
      <div className="w-full bg-white dark:bg-customDark4 dark:text-gray-300 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={dan} alt="dan" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">Dan Walker</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        Yesterday with <span className="font-medium dark:text-customBlue">@Karen Miller</span> and <span className="font-medium dark:text-customBlue">@Marvin </span>Stemperd at the <span className="font-medium dark:text-customBlue">#Rock'n'Rolla</span> concert in LA. Was totally fantastic! People were really excited about this one!
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
      <div className="w-full bg-white dark:text-gray-300 dark:bg-customDark4 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={edward} alt="edward" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">Edward Mayers</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        You all know how i love bootstrap, but i didn't have time to dig deeper into it. Therefore i found this very interesting video i wanted to share with you all. <span className="font-medium dark:text-customBlue">#bootsrap #webdesign</span>
        </p>
        
        {/* image */}
        <div className="w-full flex items-start gap-3 bg-whiteBg dark:bg-customDark2 p-3">
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
      <div className="w-full bg-white dark:text-gray-300 dark:bg-customDark4 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={elise} alt="elise" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">Elise Walker</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
        Thanks a lot to <span className="font-medium dark:text-customBlue">@Gaelle</span> and <span className="font-medium dark:text-customBlue">@Rolf</span> for this wonderful team lunch. The food was really tasty and we had some great laughs. Thanks to all the team, you're all awesome !
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
              <h1 className="text-[0.8rem] font-medium dark:text-white">Gaelle, Edward</h1>
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

      {/* POST 4 */}
      <div className="w-full bg-white dark:bg-customDark4 dark:text-gray-300 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={stella} alt="stella" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">Stella Bergmann</h1>
              <p className="text-[0.8rem]">july 16 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
          Hey friends ! Iam back and i wanted to share with you some awesome pictures we took during our trip to Santa Monica. We had wonderful holidays at the beach. Kisses to all !
        </p>
        
        {/* images */}
        <div className="flex items-center gap-2">
          <div className="flex-[1.5] flex flex-col gap-2">
            <img src={postImg3} alt="image-3" className="rounded-xl"/>
            <img src={postImg4} alt="image-4" className="rounded-xl "/>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img src={postImg5} alt="image-5" className="rounded-xl"/>
            <img src={postImg6} alt="image-6" className="rounded-xl"/>
            <img src={postImg7} alt="image-7" className="rounded-xl  object-cover"/>
          </div>
        </div>
        
        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2">
          <div className="flex items-center gap-[120px]">
            <div className="flex items-center gap-3 relative">
              <img src={rolf} alt="rolf" className="w-[35px] h-[35px] rounded-full"/>
              <img src={mike} alt="mike" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
              <img src={daniel} alt="daniel" className="w-[35px] h-[35px] rounded-full absolute left-[50px]"/>
              <img src={elise} alt="elise" className="w-[35px] h-[35px] rounded-full absolute left-[80px]"/>
              <img src={david} alt="david" className="w-[35px] h-[35px] rounded-full absolute left-[100px]"/>
            </div>

            <div className="flex flex-col gap=0">
              <h1 className="text-[0.8rem] font-medium dark:text-white">Gaelle, Rolf</h1>
              <p className="text-[0.8rem]">and 31 more liked this</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.9rem]">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[1.3rem]"/>
              <p>33</p>
            </div>

            <div className="flex items-center gap-1">
              <IoLinkOutline className="text-[1.3rem]"/>
              <p>1</p>
            </div>
            
            <div className="flex items-center gap-1">
              <IoChatbubbleOutline className="text-[1.2rem]"/>
              <p>9</p>
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

      {/* POSTS 5*/}
      <div className="w-full bg-white dark:bg-customDark4 dark:text-gray-300 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={david} alt="edward" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">David Kim</h1>
              <p className="text-[0.8rem]">August 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
          Just discovered this awesome CSS framework named #bulmaCss. It's based on flexbox, so easy to use and comes with so many mobile first modifiers. You can build anything from scratch easily with Bulma. <span className="font-medium dark:text-customBlue">#webdesign #bulmaio</span>
        </p>
        
        {/* image */}
        <div className="w-full flex items-start gap-3 bg-whiteBg dark:bg-customDark2 p-3">
          <img src={bulma} alt="bulma" className="rounded-xl h-[120px] w-[250px] object-cover"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-[1rem] font-medium">
              Bulma CSS Framework
            </h1>
            <p className="text-[0.85rem]">
              Bulma is a mobile first CSS framework built on top of Flexbox. It's awesome and so easy to use.
            </p>
            <p className="text-[0.75rem]">
              BULMA.IO
            </p>
          </div>
        </div>
        
        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2">
          <div className="flex items-center gap-[45px]">
            <div className="flex items-center gap-3 relative">
              <img src={lana} alt="lana" className="w-[35px] h-[35px] rounded-full"/>
              <img src={mike} alt="elsie" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
            </div>

            <div className="flex flex-col gap-0">
              <h1 className="text-[0.8rem] font-medium dark:text-white">lana, Mike</h1>
              <p className="text-[0.8rem]">and 1 more liked this</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.9rem]">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[1.3rem]"/>
              <p>11</p>
            </div>

            <div className="flex items-center gap-1">
              <IoLinkOutline className="text-[1.3rem]"/>
              <p>3</p>
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

      {/* POST 6 */}
      <div className="w-full bg-white dark:bg-customDark4 dark:text-gray-300 flex flex-col gap-5 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={bobby} alt="bobby" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-0 ">
              <h1 className="text-[0.85rem] font-medium dark:text-white">Bobby Brown</h1>
              <p className="text-[0.8rem]">july 26 2022, 01:03pm</p>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* article */}
        <p className="text-[0.9rem]">
          Today, when i was walking back home from my job, i figured that i should build the best social media template in ThemeForest. As soon as i got back, i started working on this fresh and new project. Any suggestions about where i could find some interesting resources for social media design?  <span className="font-medium dark:text-customBlue">#webdesign #socialmedia</span>
        </p>
        
        {/* INTERRACTIONS */}
        <div className="flex items-center w-full relative justify-between py-2 pt-4">
          <div className="flex items-center gap-[45px]">
            <div className="flex items-center gap-3 relative">
              <img src={daniel} alt="daniel" className="w-[35px] h-[35px] rounded-full"/>
              <img src={elise} alt="elsie" className="w-[35px] h-[35px] rounded-full absolute left-6"/>
            </div>

            <div className="flex flex-col gap-0">
              <h1 className="text-[0.8rem] font-medium dark:text-white">Daniel and Elise</h1>
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

      <button className="w-[150px] m-auto border my-[80px] py-2 bg-white dark:bg-customDark4 dark:text-gray-400 dark:border-none">Load More</button>

      {
        isAlbumOpen && (
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full z-50">
            {/* modal background to make the body less visible when the navbar is active */}
            <div className="absolute w-full h-full bg-black opacity-80 "></div>

            <div className="p-3 px-4 pb-5 w-[500px] text-[0.85rem] text-gray-500 bg-white dark:bg-customDark4 z-10 flex flex-col gap-3 rounded-xl items-center text-center">
              <div className="w-full flex items-center justify-between border-b dark:border-gray-700 py-2">
                <h1 className="font-medium dark:text-white">Add Photos</h1>
                <p className="cursor-pointer" onClick={()=> setIsAlbumOpen(false)}>X</p>
              </div>
              <img src={album} alt="album" className="w-[250px] object-contain"/>
              <h1 className="font-semibold text-[1rem] dark:text-white">
                Manage your photos
              </h1>
              <p className="max-w-[300px]">
                Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry
              </p>

              <button className="w-[150px] m-auto bg-customBlue text-white outline-none rounded-xl p-2">Next</button>
            </div>
          </div>
        )
      }

      {
        isVideoOpen && (
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full z-50">
            {/* modal background to make the body less visible when the navbar is active */}
            <div className="absolute w-full h-full bg-black opacity-80 "></div>

            <div className="p-3 px-5 pb-5 w-[500px] text-[0.85rem] text-gray-500 bg-white dark:bg-customDark4 z-10 flex flex-col gap-3 rounded-xl items-center text-center">
              <div className="w-full flex items-center justify-between border-b dark:border-gray-700 py-2">
                <h1 className="font-medium dark:text-white ">Add Photos</h1>
                <p className="cursor-pointer" onClick={()=> setIsVideoOpen(false)}>X</p>
              </div>
              <img src={trip} alt="album" className="w-[250px] object-contain"/>
              <h1 className="font-semibold text-[1rem] dark:text-white">
                Share live videos
              </h1>
              <p className="max-w-[300px]">
                Lorem ipsum sit dolor amet is a dummy text used by the typography industry and the web industry
              </p>

              <button className="w-[150px] m-auto bg-customBlue text-white outline-none rounded-xl p-2">Next</button>
            </div>
          </div>
        )
      }


    </section>
  )
}

export default Home