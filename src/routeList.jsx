/* eslint-disable react/prop-types */

import { LoginMenu } from './components';
import { MainView } from './components/mainView';
import { redirect } from 'react-router-dom';
import { RTLOGS } from './modules/Negocio/OracleRetail/index.js';
import { generateRoute } from './utils/index.js';

const loaderRedirect = (permissionTools) => {
    if (permissionTools?.length === 0) {
        return redirect('/login');
    } else {
        return null;
    }
};
const loaderLogin = (permissionTools) => {
    if (permissionTools?.length > 0) {
        return redirect('/');
    } else {
        return null;
    }
};
const createRoutes = (permissionTools) => {
    const formatterPermission = permissionTools;
    console.log(permissionTools);
    const routes = [
        {
            path: '/',
            element: <MainView ContentComponent={null} />,
        },
        {
            path: '/Login',
            element: <LoginMenu />,
        },
        {
            path: '/Negocio/OracleRetail/RTLOG',
            element: <MainView ContentComponent={<RTLOGS />} />,
        },
    ];
    console.log(routes);
    return routes;
};
export default createRoutes;
