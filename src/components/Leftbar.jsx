import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoSun } from "react-icons/go";
import { CiLocationOn, CiBookmark } from "react-icons/ci";
import { FiCloudLightning } from "react-icons/fi";
import { IoRainyOutline, IoEyeOutline } from "react-icons/io5";

import { pizza, droid, nuclear, movies, slicer, milly, hanzo } from '../assets'

const Leftbar = () => {
  return (
    <section className="flex-1 flex flex-col gap-6">
      {/* WEATHER */}
      <div className="flex relative flex-col w-[full] bg-customBlue h-[450px] rounded-xl bg-bg-img-1 bg-cover bg-center bg-no-repeat p-3 text-white">
        <div className="absolute w-[50px] h-[50px] flex items-center justify-center hover:bg-blue-600 hover:rounded-full transition-all right-0">
          <HiOutlineDotsVertical className="text-[1.2rem] text-white"/>
        </div>
        <div className="flex flex-col items-center gap-2 text-center mt-12">
          <p className="text-[3rem] font-medium">71</p>
          <p><GoSun className="text-[3rem]"/></p>
          <p className="text-[1.3rem]">Sunny</p>
          <div className="flex items-center gap-6 text-[0.9rem]">
            <p>Real Feel: 78</p>
            <p>Rain Chance: 5%</p>
          </div>
          <div className="p-3 w-full h-max flex items-start justify-between blure">
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>MON</p>
              <GoSun />
              <p>69</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>TUE</p>
              <FiCloudLightning />
              <p>74</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>WED</p>
              <FiCloudLightning />
              <p>73</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>THU</p>
              <GoSun />
              <p>68</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>FRI</p>
              <FiCloudLightning />
              <p>55</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>SAT</p>
              <IoRainyOutline />
              <p>58</p>
            </div>
            <div className="flex flex-col gap-1 text-center items-center text-[0.85rem]">
              <p>SUN</p>
              <GoSun />
              <p>64</p>
            </div>
          </div>
          <div className="mt-2 text-[1.2rem]">
            Saturday, 3rd 2024
          </div>
          <p className="flex items-center text-[0.9rem] gap-2"> <CiLocationOn /> Los Angekes, CA</p>
        </div>
      </div>

      {/* RECOMMENDED PAGES */}
      <div className="flex flex-col w-[full] bg-white h-[450px] rounded-xl py-3">
        <div className="p-3 flex items-center justify-between text-gray-500 text-[0.9rem] border-b">
          <h1>Recommended Pages</h1>
          <HiOutlineDotsVertical />
        </div>
        <div className="w-full flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src={pizza} alt="pizza" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Fast Pizza</h1>
              <p className="text-[0.8rem] text-gray-500">Pizza & Fast Food</p>
            </div>
          </div>
          <div>
            <CiBookmark className="text-[1.2rem]"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src={droid} alt="droid" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Lonely Droid</h1>
              <p className="text-[0.8rem] text-gray-500">Technology</p>
            </div>
          </div>
          <div>
            <CiBookmark className="text-[1.2rem]"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src={movies} alt="meta_movies" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Meta Movies</h1>
              <p className="text-[0.8rem] text-gray-500">Movies / Entertainment</p>
            </div>
          </div>
          <div>
            <CiBookmark className="text-[1.2rem]"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <img src={nuclear} alt="nuclearjs" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Nuclearjs</h1>
              <p className="text-[0.8rem] text-gray-500">Technology</p>
            </div>
          </div>
          <div>
            <CiBookmark className="text-[1.2rem]"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img src={slicer} alt="slicer" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Slicer</h1>
              <p className="text-[0.8rem] text-gray-500">web / Design</p>
            </div>
          </div>
          <div>
            <CiBookmark className="text-[1.2rem]"/>
          </div>
        </div>
      </div>

      {/* ADS */}
      <div className="w-full p-3 rounded-xl bg-white relative">
        <p className="text-[0.7rem] text-gray-500 absolute top-0 right-3">ADS VIA NINJA</p>
      </div>

      {/* ACTIVITIES */}
      <div className="w-full flex flex-col gap-3 bg-white rounded-xl py-3">
        <div className="p-3 flex items-center justify-between text-gray-500 text-[0.9rem] border-b">
          <h1>Latest activity</h1>
          <HiOutlineDotsVertical />
        </div>

        <div className="w-full flex justify-between items-center px-4 pb-3 border-b">
          <div className="flex items-center gap-3">
            <img src={hanzo} alt="hanzo" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Css Ninja</h1>
              <p className="text-[0.8rem] text-gray-500">3 hours ago</p>
            </div>
          </div>
          <div>
            <IoEyeOutline className="text-[1.2rem] text-gray-500"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center px-4 pb-3 border-b">
          <div className="flex items-center gap-3">
            <img src={milly} alt="milly" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Milly Augustine</h1>
              <p className="text-[0.8rem] text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div>
            <IoEyeOutline className="text-[1.2rem] text-gray-500"/>
          </div>
        </div>

        <div className="w-full flex justify-between items-center px-4 pb-3">
          <div className="flex items-center gap-3">
            <img src={nuclear} alt="nuclear" className="w-[40px] rounded-full"/>
            <div className="flex flex-col gap-1">
              <h1 className="text-[0.85rem] font-medium">Nuclearjs</h1>
              <p className="text-[0.8rem] text-gray-500">yesterday</p>
            </div>
          </div>
          <div>
            <IoEyeOutline className="text-[1.2rem] text-gray-500"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leftbar