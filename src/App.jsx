/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginMenu, Layaout } from "./routeList";
import { AuthContext } from "./context/userContext";
import { useContext } from "react";

const App = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user?.isLogged ? <Layaout /> : <LoginMenu />}
        />
        <Route
          path="/Login"
          element={user?.isLogged ? <Layaout /> : <LoginMenu />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
