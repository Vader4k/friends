import { Link } from "react-router-dom"
import { HiOutlinePencil, HiOutlinePhoto  } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

import { jenna, smile} from '../assets'

const Home = () => {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Post */}
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
    </section>
  )
}

export default Home