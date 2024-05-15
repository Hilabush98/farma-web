import { getIcon } from './icons.jsx';
import { getTool } from './index.js';
import { MainView } from '../components/mainView/index.js';
import { Link } from 'react-router-dom';
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
const handleOnclickRedirect = (path) => {
    console.log(path);
    if (window.location.pathname !== path) {
        <li key={path}>
            <Link to={path}>Path</Link>
        </li>;
    }
};

const generateRoute = (routes, loader) => {
    console.log(routes);
    const newRoutes = routes?.map((tool) => {
        return {
            tool_id: tool.tool_id,
            path: tool.path,
            element: <MainView ContentComponent={getTool(tool.tool_id)} />,
            loader: () => loader(routes),
        };
    });
    return newRoutes;
};
const generateMenu = (array) => {
    const mainsTools = array.filter(
        ({ tool_father }) => Object.keys(tool_father).length === 0
    );
    const data = mainsTools.map((mainTool) => {
        return {
            tool_id: mainTool.tool_id,
            configuration: mainTool.tool.configuration,
            path: mainTool.tool.path,
            orderby: mainTool.tool.order_by,
            key: mainTool.tool.configuration.key,
            name: mainTool.tool.configuration.name,
            label: mainTool.tool.configuration.name,
            icon: mainTool.tool.configuration.icon,
            children: findChildren(array, mainTool.tool_id),
            onClick: mainTool.tool.configuration.click
                ? () => handleOnclickRedirect(mainTool.tool.path)
                : () => {},
        };
    });
    return data;
};
function findChildren(array, parentId) {
    const children = [];

    for (const item of array) {
        if (item.tool_father && item.tool_father.tool_id === parentId) {
            const child = {
                key: item.tool.configuration.key,
                icon: item.tool.configuration.icon,
                label: item.tool.configuration.name,
                name: item.tool.configuration.name,
                configuration: item.tool.configuration,
                orderby: item.tool.order_by,
                path: item.tool.path,
                tool_id: item.tool_id,
                onClick: item.tool.configuration.click
                    ? () => {
                          if (window.location.pathname !== item.tool.path) {
                              window.location.href = item.tool.path;
                          }
                      }
                    : () => {},
            };
            const grandchildren = findChildren(array, item.tool_id);
            if (grandchildren.length > 0) {
                child.children = grandchildren;
            }
            children.push(child);
        }
    }
    return children;
}
const formatterRoutePermission = (permissionRoutes) => {
    if (permissionRoutes.length > 1) {
        const permissionsFormatted = permissionRoutes
            .reduce((accumulator, currentValue) => {
                return currentValue?.Profile.concat(accumulator?.Profile);
            })
            .map((obj) => {
                return {
                    tool_id: obj.tool_id,
                    path: obj.tool.path,
                };
            });
        return removeDuplicates(permissionsFormatted, 'tool_id');
    } else {
        return permissionRoutes.Profile;
    }
};
const formatterToolsPermission = (permissionTools) => {
    if (permissionTools.length > 1) {
        const permissionsFormatted = permissionTools
            .reduce((accumulator, currentValue) => {
                return currentValue?.Profile.concat(accumulator?.Profile);
            })
            .map((obj) => {
                return {
                    tool_id: obj.tool_id,
                    tool: {
                        order_by: obj.tool.order_by,
                        configuration: obj.tool?.configuration,
                        path: obj.tool.path,
                    },
                    tool_father:
                        obj?.tool?.tool_father === null
                            ? {}
                            : {
                                  orderby: obj.tool?.tool_father?.order_by,
                                  tool_id: obj.tool?.tool_father?.tool_id,
                                  name: obj.tool?.tool_father?.name,
                                  configuration:
                                      obj.tool?.tool_father?.configuration,
                                  description:
                                      obj.tool?.tool_father?.description,
                              },
                };
            });

        return generateMenu(removeDuplicates(permissionsFormatted, 'tool_id'));
    } else {
        return permissionTools.Profile;
    }
};
const iconUtils = (array) => {
    const data = array.map((tool) => {
        if (tool.children) {
            return {
                ...tool,
                iconname: tool.icon,
                onClick: tool.configuration.click
                    ? () => handleOnclickRedirect(tool.path)
                    : () => {},
                icon: getIcon(tool.icon, {}, tool.icon + tool.key),
                children: iconUtils(tool.children),
            };
        } else {
            return {
                ...tool,
                iconname: tool.icon,
                onClick: tool.configuration.click
                    ? () => handleOnclickRedirect(tool.path)
                    : () => {},
                icon: getIcon(tool.icon, {}, tool.icon + tool.key),
            };
        }
    });
    return data;
};
const formatIconsMenu = (arrayTools) => {
    if (!arrayTools) {
        return [];
    }
    const data = arrayTools.map((tool) => {
        if (tool.children) {
            return {
                ...tool,
                iconname: tool.icon,
                onClick: tool.configuration.click
                    ? () => handleOnclickRedirect(tool.path)
                    : () => {},
                icon: getIcon(tool.icon, {}, tool.icon + tool.key),
                children: iconUtils(tool.children),
            };
        } else {
            return {
                ...tool,
                iconname: tool.icon,
                onClick: tool.configuration.click
                    ? () => handleOnclickRedirect(tool.path)
                    : () => {},
                icon: getIcon(tool.icon, {}, tool.icon + tool.key),
            };
        }
    });
    return data;
};

export {
    formatterToolsPermission,
    formatIconsMenu,
    generateRoute,
    formatterRoutePermission,
};
