import { CiGift } from "react-icons/ci";
import { FiBriefcase } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { dan, bobby, elise, nelly, lana, gaelle, mike, rolf } from '../assets'

const Rightbar = () => {
  return (
    <section className="flex-1 flex flex-col gap-6">
      {/* STORIES */}
      <div className="flex flex-col justify-between items-center w-full py-2 rounded-xl bg-white dark:bg-customDark4">
        <div className="flex items-center justify-between p-4 w-full border-b dark:border-gray-700">
          <h1 className="text-gray-500 text-[0.85rem] dark:text-white">Stories</h1>
          <div>
            <HiOutlineDotsVertical className="text-gray-500"/>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 p-4 border-b dark:border-gray-700">
          <div className="w-[40px] h-[40px] rounded-full border-dashed border-gray-500 dark:border-white border hover:border-blue-500 hover:border-solid" />
          <div className="flex flex-col gap-1">
            <h1 className="text-[0.85rem] font-medium text-gray-600 dark:text-white">Add a new story</h1>
            <p className="text-[0.8rem] text-gray-500">Share an image, a video or some text</p>
          </div>
      </div>

      <div className="w-full flex items-center gap-3 p-4 border-b dark:border-gray-700">
        <img src={dan} alt="dan" className="w-[50px] rounded-full p-1 border border-gray-500"/>
        <div className="flex flex-col gap-1">
          <h1 className="text-[0.85rem] font-medium text-gray-600 dark:text-white">Dan Walker</h1>
          <p className="text-[0.8rem] text-gray-500">1 hour ago</p>
        </div>
      </div>

      <div className="w-full flex items-center gap-3 p-4 border-b dark:border-gray-700">
        <img src={bobby} alt="bobby" className="w-[50px] rounded-full p-1 border border-gray-500"/>
        <div className="flex flex-col gap-1">
          <h1 className="text-[0.85rem] font-medium text-gray-600 dark:text-white">Bobby Brown</h1>
          <p className="text-[0.8rem] text-gray-500">3 days ago</p>
        </div>
      </div>

      <div className="w-full flex items-center gap-3 p-4">
        <img src={elise} alt="elise" className="w-[50px] rounded-full p-1 border border-gray-500"/>
        <div className="flex flex-col gap-1">
          <h1 className="text-[0.85rem] font-medium text-gray-600 dark:text-white">Elsie Walker</h1>
          <p className="text-[0.8rem] text-gray-500">Last week</p>
        </div>
      </div>
      </div>

      {/* BIRTHDAY */}
      <div className="flex flex-col w-[full] bg-customGreen h-[350px] rounded-xl bg-bg-img-2 bg-cover bg-center bg-no-repeat p-5 text-white">
        <div className="w-full flex items-center justify-between ">
          <CiGift className="text-[1.7rem]"/>
          <HiOutlineDotsVertical className="text-[1.4rem]"/>
        </div>
        <div className="flex flex-col gap-2 items-center text-center mt-10">
          <img src={dan} alt="dan" className="w-[50px] rounded-full"/>
          <h1 className="font-medium text-[1rem]">Dan turns 31 today!</h1>
          <p className="text-[0.85rem]">send him your best wishes by leaving something on his wall.</p>
          <button className="outline-none px-3 py-2 mt-4 border-white border rounded-md text-[0.85rem]">write message</button>
        </div>
      </div>

      {/* SUGGESTED FRIENDS */}
      <div className="flex flex-col justify-between items-center w-full py-2 rounded-xl bg-white dark:bg-customDark4">
        <div className="flex items-center justify-between p-4 w-full border-b dark:border-gray-700">
            <h1 className="text-gray-500 text-[0.85rem] dark:text-white">Suggested Friends</h1>
            <div>
              <HiOutlineDotsVertical className="text-gray-500"/>
            </div>
          </div>

          <div className="w-full flex justify-between items-center p-4 border-b dark:border-gray-700 text-gray-500">
            <div className="flex items-center gap-3">
              <img src={nelly} alt="nelly" className="w-[40px] rounded-full"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-[0.85rem] font-medium dark:text-white">Nelly Schwartz</h1>
                <p className="text-[0.8rem] text-gray-500">Melbourne</p>
              </div>
            </div>
            <div>
              <IoPersonAddOutline className="text-[1.2rem]"/>
            </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b dark:border-gray-700 text-gray-500">
            <div className="flex items-center gap-3">
              <img src={lana} alt="lana" className="w-[40px] rounded-full"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-[0.85rem] font-medium dark:text-white">Lana Henrikssen</h1>
                <p className="text-[0.8rem] text-gray-500">Helsinki</p>
              </div>
            </div>
            <div>
              <IoPersonAddOutline className="text-[1.2rem]"/>
            </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b dark:border-gray-700 text-gray-500">
            <div className="flex items-center gap-3">
              <img src={gaelle} alt="gaelle" className="w-[40px] rounded-full"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-[0.85rem] font-medium dark:text-white">Gaelle Morris</h1>
                <p className="text-[0.8rem] text-gray-500">Lyon</p>
              </div>
            </div>
            <div>
              <IoPersonAddOutline className="text-[1.2rem]"/>
            </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b dark:border-gray-700 text-gray-500">
            <div className="flex items-center gap-3">
              <img src={mike} alt="mike" className="w-[40px] rounded-full"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-[0.85rem] font-medium dark:text-white">Mike Lasalle</h1>
                <p className="text-[0.8rem] text-gray-500">Toronto</p>
              </div>
            </div>
            <div>
              <IoPersonAddOutline className="text-[1.2rem]"/>
            </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 text-gray-500">
            <div className="flex items-center gap-3">
              <img src={rolf} alt="rolf" className="w-[40px] rounded-full"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-[0.85rem] font-medium dark:text-white">Rolf Krupp</h1>
                <p className="text-[0.8rem] text-gray-500">Berlin</p>
              </div>
            </div>
            <div>
              <IoPersonAddOutline className="text-[1.2rem]"/>
            </div>
        </div>
      </div>

      {/* JOB */}
      <div className="flex flex-col w-[full] bg-customBlue h-[300px] rounded-xl bg-bg-img-3 bg-cover bg-center bg-no-repeat p-5 text-white">
        <div className="w-full flex items-center justify-between ">
          <FiBriefcase className="text-[1.7rem]"/>
          <HiOutlineDotsVertical className="text-[1.4rem]"/>
        </div>
        <div className="flex flex-col gap-2 items-center text-center mt-10">
          <img src={nelly} alt="nelly" className="w-[50px] rounded-full"/>
          <h1 className="font-medium text-[1rem]">Nelly has a new job!</h1>
          <p className="text-[0.85rem]">send her message congratulating her for getting this job.</p>
          <button className="outline-none px-3 py-2 mt-4 border-white border rounded-md text-[0.85rem]">write message</button>
        </div>
      </div>
    </section>
  )
}

export default Rightbar