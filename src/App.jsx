import Routing from "./Routes/Routing"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Routing />
    }
  ])

  return (
    <RouterProvider router={router}>
      <Routing />
    </RouterProvider>
  )
}

export default App