import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Footer from "./components/Footer"; // new footer component

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/><Footer/></> // added footer to home page
    },
    {
      path:'/about',
      element:<><Navbar/><About/><Footer/></> // added footer to about page
    },
    {
      path:'/contact',
      element:<><Navbar/><Contact/><Footer/></> // added footer to contact page
    },
    {
      path:'/signup',
      element:<><Signup/><Footer/></> // added footer to signup page
    },
    {
      path:'/login',
      element:<><Login/><Footer/></> // added footer to login page
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
