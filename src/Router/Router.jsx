
import Favorites from "../components/Favorites/Favorites";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PhoneDetail from "../components/Phones/PhoneDetail";

import  Root  from "./Root";
import { createBrowserRouter,} from "react-router-dom";

  


  const mainLayout = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          // loader:()=>fetch(`phones.json`)
        },
        {
          path:"phones/:id",
          element:<PhoneDetail></PhoneDetail>,
          loader:()=>fetch(`phones.json`)
          
        },
        {
          path:"/favorite",
          element:<Favorites></Favorites>,
          
        },
        {
          path:"/login",
          element:<Login></Login>,
          
        }
      ]
    },
  ]);



export default mainLayout;