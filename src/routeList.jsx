/* eslint-disable react/prop-types */

import { LoginMenu } from "./components";
import {MainView} from "./components/mainView"

console.log(LoginMenu)
const createRoutes=(loaderRedirect)=>{
const routes=[
    {
      path: "/",
      element: <MainView ContentComponent={null} />,
      loader:loaderRedirect
      
    },
    {
      path: "/Negocio/Oracle/Rtlog",
      element: <MainView ContentComponent={null} />,
      loader:loaderRedirect
    },
    {
      path: "/Login",
      element: <LoginMenu />,
    },
  ]

    return routes;
}
export default createRoutes;