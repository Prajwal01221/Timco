import './App.css'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './Pages/Services';
import Navbar from './Components/Navbar';
import './Css/display.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children : [
        {
          path : "services",
          element : <Services/>
        },
      ]
    },
  ]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

const Root = () => {
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
