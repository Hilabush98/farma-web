/* eslint-disable react/prop-types */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/userContext';
import { useContext, useState } from 'react';
import createRoutes from './routeList.jsx';

const App = () => {
    const [routePermission, setRoutePermission] = useState(
        JSON.parse(localStorage.getItem('routePermission'))
    );
    const routes = createRoutes(routePermission);
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};
export default App;
