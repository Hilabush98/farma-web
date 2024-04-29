/* eslint-disable react/prop-types */

import { LoginMenu } from "./components";
import { MainView } from "./components/mainView";
import { RTLOGS } from "./modules/Negocio/OracleRetail";

const createRoutes = (loaderRedirect) => {
  const routes = [
    {
      path: "/",
      element: <MainView ContentComponent={null} />,
      loader: loaderRedirect,
    },
    {
      path: "/Negocio/Oracle/Rtlog",
      element: <MainView ContentComponent={<RTLOGS />} />,
      loader: loaderRedirect,
    },
    {
      path: "/Login",
      element: <LoginMenu />,
    },
  ];

  return routes;
};
export default createRoutes;
