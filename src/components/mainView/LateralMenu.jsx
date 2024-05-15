/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import PropTypes, { element } from 'prop-types';
import { Menu, Layout, Popover } from 'antd';
import { CardComponent } from '../index.js';
import { Link } from 'react-router-dom';
import { getIcon } from '../../utils/icons.jsx';

//import { useContext } from 'react';
//import { AuthContext } from '../../context/userContext';

const { Sider } = Layout;

const LateralMenu = ({ items, colorBgContainer }) => {
    //  const { menuItems } = useContext(AuthContext);
    const menuItems = [];
    const newMenuitems = menuItems.map((tool, index) => {
        console.log(tool);
        return {
            key: `${tool.name + index}`,
            value: tool.tool_id,
            appName: tool.name,
            icon: tool.iconname,
            onClick: (e) => onClickCard(e),
        };
    });
    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const onClickCard = (e) => {
        setOpen(false);

        console.log('log', e);
    };

    const generateMenu = (menuItems) => {
        return menuItems.map((element, index) =>
            element.children ? (
                <>
                    {console.log(element.name + index, element.label)}
                    <Menu.SubMenu
                        title={element.label}
                        key={element.name + index}
                        eventKey={element.label + index}
                        icon={getIcon(element.iconname, {}, element.key)}
                    >
                        {generateMenu(element.children)}
                    </Menu.SubMenu>
                </>
            ) : (
                <Menu.Item
                    eventKey={element.key + element.label}
                    key={element.key + element.label}
                    icon={getIcon(element.iconname, {}, element.key)}
                >
                    <Link to={element.path}>{element.label}</Link>
                </Menu.Item>
            )
        );
    };
    return (
        <>
            <Sider
                collapsible
                width={250}
                style={{
                    backgroundColor: colorBgContainer,
                    height: '100vh',
                }}
            >
                <Popover
                    placement="bottom"
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <div
                        style={{
                            height: '80px',
                            cursor: 'pointer',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {getIcon('AppstoreOutlined', {
                            fontSize: '40px',
                            marginTop: '15px',
                            color: 'gray',
                        })}
                    </div>
                </Popover>

                <Menu
                    style={{ minWidth: 0, flex: 'auto' }}
                    theme={colorBgContainer ? 'light' : 'dark'}
                    mode="inline"
                    multiple
                    key={'Menu-Key'}
                    forceSubMenuRender
                    selectedKeys="IdVentasaRTLOG-key"
                    defaultSelectedKeys={['10']}
                >
                    {generateMenu(items)}
                </Menu>
            </Sider>
        </>
    );
};

LateralMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    colorBgContainer: PropTypes.any.isRequired,
};
LateralMenu.defaultProps = {
    items: [
        {
            key: '0',
            name: '',
        },
    ],
    colorBgContainer: 'light',
};
export default LateralMenu;
