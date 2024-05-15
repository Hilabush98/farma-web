/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import { LogInQuery } from './userGql';
import { formatIconsMenu } from '../utils';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    console.log(children);
    const [routePermission, setRoutePermission] = useState([]);
    const [permissionTools, setPermissionTools] = useState([]);
    const [token, setToken] = useState();
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        console.log('refresh?');
        const permission = JSON.parse(localStorage.getItem('permissionsTools'));
        const routes = JSON.parse(localStorage.getItem('routePermission'));
        const tokenTemp = localStorage.getItem('token');
        if (permission && routes && tokenTemp) {
            setPermissionTools(permission);
            setRoutePermission(routes);
            setToken(tokenTemp);
            setMenuItems(formatIconsMenu(permission));
        }
    }, []);

    const logout = () => {};

    return (
        <AuthContext.Provider
            value={{
                menuItems,
                token,
                routePermission,
                permissionTools,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };
// Hook para consumir el contexto de inicio de sesión
