import { useContext } from 'react'
import { jenna, logoWhite } from '../assets'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

import { IoPersonOutline } from "react-icons/io5";
import { GoLock } from "react-icons/go";

const Login = () => {

  const navigate = useNavigate()

  const { loginUser } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    loginUser()
    navigate('/')

  }
  return (
    <div className='relative w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='flex-1 bg-customBlue2 h-full flex items-center justify-center'>
        <h1 className='text-[3.5rem] font-black text-whiteBg text'> Join an <br />Exciting Social <br />Experience.</h1>
      </div>
      <div className='dark:bg-customDark2 flex-1 flex flex-col gap-5 items-center justify-center h-full'>
        <div className='border rounded-full flex items-center justify-center h-[120px] w-[120px]'>
          <img src={jenna} className='w-[100px] h-[100px] rounded-full object-contain' alt='profile_pic'/>
        </div>
        <form className='flex flex-col gap-3'>
          <div className='relative'>
            <input type="text" placeholder='jennadavis@gmail.com' className='outline-none rounded-xl w-[350px] py-2 px-10 border text-[0.9rem]'/>
            <IoPersonOutline className='absolute top-3 left-3 text-gray-500'/>
          </div>
          <div className='relative'>
            <input type="password" placeholder='*****' className='outline-none py-2 px-10 w-[350px] border rounded-xl text-[0.9rem]'/>
              <GoLock className='absolute top-3 left-3 text-gray-500'/>
          </div>
          <button className='bg-customBlue p-3 rounded-3xl text-white' onClick={(e)=>handleLogin(e)}>Login</button>

          <p className='text-center my-4 text-[0.85rem] text-gray-400 cursor-pointer'>
            <Link to='/register'>
              Forgot Password?
            </Link>
          </p>
        </form>
      </div>

      <div className='absolute left-[%] h-[100px] w-[100px] rounded-full bg-customBlue2 flex items-center justify-center border-[6px] border-white'>
        <img 
          src={logoWhite} 
          alt="logo" 
          className='w-[50px] h-[50px] rotate-45'/>
      </div>
    </div>
  )
}

export default Login