/* eslint-disable react/prop-types */
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/userContext";
import { useContext } from "react";
import createRoutes from "./routeList.jsx";

const App = () => {
  const { user,loaderRedirect } = useContext(AuthContext);
  const routes= createRoutes(loaderRedirect)
  const router = createBrowserRouter(routes);
  console.log(user);
  return (
    <RouterProvider router={router} />
  );
};
export default App;
