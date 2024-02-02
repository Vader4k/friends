import { useState } from "react"
import { logoBold } from '../assets'

import { CiHeart, CiChat1, CiSearch } from "react-icons/ci";
import { FiBell, FiShoppingCart } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between py-8 px-4">
        <div>
          <div>
            <img src={logoBold} alt="friends_logo" />
          </div>
          <div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar