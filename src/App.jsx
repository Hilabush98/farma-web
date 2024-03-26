/* eslint-disable react/prop-types */
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { LoginMenu, MainView } from "./routeList";
import { AuthContext } from "./context/userContext";
import { useContext } from "react";

const App = () => {
  const { user,loaderRedirect } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainView />,
      loader:loaderRedirect
      
    },
    {
      path: "/Login",
      element: <LoginMenu />,
    },
  ]);
  console.log(user);
  return (
    <RouterProvider router={router} />
  );
};
export default App;
