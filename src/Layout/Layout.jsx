import { Outlet } from "react-router-dom"

import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
        <div className="flex">
          <Leftbar/>
          <div>
            <Outlet />
          </div>
          <Rightbar />
        </div>
    </div>
  )
}

export default Layout