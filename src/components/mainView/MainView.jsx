/* eslint-disable react/prop-types */
import React from 'react';
import { useContext } from 'react';
import { Layout, Tooltip, theme } from 'antd';
const { Content } = Layout;
import { LateralMenu } from './index.js';
import { MainFooter, MainHeader } from '../index.js';
import {
    UserOutlined,
    SettingOutlined,
    FundOutlined,
    DatabaseOutlined,
    ShoppingCartOutlined,
    TruckOutlined,
    PullRequestOutlined,
    ToTopOutlined,
    VerticalAlignBottomOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { AuthContext } from '../../context/userContext';
const handleOnclickRedirect = (path) => {
    if (window.location.pathname !== path) {
        window.location.href = path;
    }
};
const itemsVar = [
    {
        key: 'Negocio-key',
        name: 'Negocio',
        label: 'Negocio',
        onClick: (e) => {
            console.log(e);
        },
        value: '1',
        icon: <FundOutlined />,
        children: [
            {
                key: 'Oretail-key',
                name: 'OracleReatil',
                label: <Tooltip title="Oracle Retail">Oracle Retail</Tooltip>,
                onClick: (e) => {
                    console.log(e);
                },
                value: '1.1',
                icon: <DatabaseOutlined />,
                children: [
                    {
                        key: 'IdVentasaRTLOG-key',
                        name: 'IngracionDeVentaRTLG',
                        label: (
                            <Tooltip
                                placement="right"
                                title="Integración de Ventas a RTLOG"
                            >
                                Integración de Ventas a RTLOG
                            </Tooltip>
                        ),
                        onClick: (e) => {
                            console.log(e);
                            console.log(window.location.pathname);
                            if (
                                window.location.pathname !==
                                '/Negocio/Oracle/Rtlog'
                            ) {
                                window.location.href = '/Negocio/Oracle/Rtlog';
                            }
                        },
                        value: '1.1.1',
                        icon: <PullRequestOutlined />,
                    },
                    {
                        key: 'CargaRemisionProv-key',
                        name: 'CargaRemisionProv',
                        label: (
                            <Tooltip title="Carga Remisiones Prov. Mayoristas a Reim Injector">
                                Carga Remisiones Prov. Mayoristas a Reim
                                Injector
                            </Tooltip>
                        ),
                        onClick: (e) => {
                            console.log(e);
                        },
                        value: '1.1.2',
                        icon: <ToTopOutlined />,
                    },
                    {
                        key: 'CargaPreciosStage-key',
                        name: 'CargaPreciosStage',
                        label: 'Carga de Precios a Stage',
                        onClick: (e) => {
                            console.log(e);
                        },
                        value: '1.1.3',
                        icon: <ToTopOutlined />,
                    },
                ],
            },
            {
                key: 'eComerce-key',
                name: 'eComerce',
                label: 'eComerce',
                onClick: (e) => {
                    console.log(e);
                },
                value: '1.2',
                icon: <ShoppingCartOutlined />,
                children: [
                    {
                        key: 'DescargaPedidos-key',
                        name: 'DescargaPedidos',
                        label: 'Descarga de Pedidos Digitales',
                        onClick: (e) => {
                            console.log(e);
                        },
                        value: '1.2.1',
                        icon: <VerticalAlignBottomOutlined />,
                    },
                    {
                        key: 'TiemposEstimadosLlegada-key',
                        name: 'TimposEstimadosLlegada',
                        label: 'Tiempos Estimados de Llegada',
                        onClick: (e) => {
                            console.log(e);
                        },
                        value: '1.2.2',
                        icon: <ClockCircleOutlined />,
                    },
                ],
            },
            {
                key: 'LogisticaDistribucion-key',
                name: 'LogisticaDistribucion',
                label: 'Logistica y Distribucion',
                onClick: (e) => {
                    console.log(e);
                },
                value: '1.3',
                icon: <TruckOutlined />,
            },
        ],
    },
    {
        key: 'RH-key',
        name: 'RH',
        label: 'Recursos Humanos',
        onClick: (e) => {
            console.log(e);
        },
        value: '2',
        icon: React.createElement(UserOutlined),
        children: [
            {
                key: 'BitacoraIntegracion-key',
                name: 'BitacoraIntegracion',
                label: 'Bitacora de Integración',
                onClick: (e) => {
                    console.log(e);
                },
                value: '2.1',
                icon: React.createElement(UserOutlined),
            },
            {
                key: 'AlmacenTempEMI-key',
                name: 'AlmacenTempEmi',
                label: 'Almacen Temporal EMI',
                onClick: (e) => {
                    console.log(e);
                },
                value: '2.2',
                icon: React.createElement(UserOutlined),
            },
            {
                key: 'AlmacenTemporalTimeBlock-key',
                name: 'AlmacenTemporalTimeBlock',
                label: 'Almacen Temporal TimeBlock',
                onClick: (e) => {
                    console.log(e);
                },
                value: '2.3',
                icon: React.createElement(UserOutlined),
            },
        ],
    },
    {
        key: 'Infraestructura-key',
        name: 'Infraestructura',
        label: 'InfraEstructura',
        onClick: (e) => {
            console.log(e);
        },
        value: '3',
        children: [
            {
                key: 'Email-key',
                name: 'Email',
                label: 'Email',

                onClick: (e) => {
                    console.log(e);
                },
                value: '3.1',
                icon: React.createElement(UserOutlined),
            },
            {
                key: 'Seguridad-key',
                name: 'Seguridad',
                label: 'Seguridad',
                onClick: (e) => {
                    console.log(e);
                },
                value: '3.2',
                icon: React.createElement(UserOutlined),
            },
            {
                key: 'Monitoreo-key',
                name: 'Monitoreo',
                label: 'Monitoreo',
                onClick: (e) => {
                    console.log(e);
                },
                value: '3.3',
                icon: React.createElement(UserOutlined),
            },
        ],
        icon: React.createElement(UserOutlined),
    },
    {
        key: 'Monitor-de-procesos-key',
        name: 'Monitor de procesos',
        label: 'Monitor de procesos',
        value: 4,
        icon: <SettingOutlined />,
    },
];

const MainView = ({ ContentComponent }) => {
    const { menuItems } = useContext(AuthContext);
    console.log(menuItems);
    const themeConfig = theme.useToken();
    const {
        token: { colorBgContainer },
    } = themeConfig;
    return (
        <Layout padding="-2px" margin="-1px">
            <LateralMenu
                items={menuItems}
                colorBgContainer={colorBgContainer}
            />
            <Layout>
                <MainHeader colorBgContainer={colorBgContainer} />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    {ContentComponent ? ContentComponent : <a>loading.....</a>}
                </Content>
                <MainFooter />
            </Layout>
        </Layout>
    );
};
export default MainView;
