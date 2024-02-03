import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"

import Layout from '../Layout/Layout'

const currentUser = true;

const ProtctedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to='/login' />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: (
      <ProtctedRoute>
        <Layout />
      </ProtctedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      }
    ]
  }
])

const Routing = () => {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  )
}

export default Routing