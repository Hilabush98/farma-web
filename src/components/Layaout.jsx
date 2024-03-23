import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "Negocio-key",
    name: "Negocio",
    label: "Negocio",
    onClick: (e) => {
      console.log(e);
    },
    value: "1",
    icon: React.createElement(UserOutlined),
    children: [
      {
        key: "Oretail-key",
        name: "OracleReatil",
        label: "Oracle Retail",
        onClick: (e) => {
          console.log(e);
        },
        value: "1.1",
        children: [
          {
            key: "IdVentasaRTLOG-key",
            name: "IngracionDeVentaRTLG",
            label: "Integración de Ventas a RTLOG",
            onClick: (e) => {
              console.log(e);
            },
            value: "1.1.1",
            icon: React.createElement(UserOutlined),
          },
          {
            key: "CargaRemisionProv-key",
            name: "CargaRemisionProv",
            label: "Carga Remisiones Prov. Mayoristas a Reim Injector",
            onClick: (e) => {
              console.log(e);
            },
            value: "1.1.2",
            icon: React.createElement(UserOutlined),
          },
          {
            key: "CargaPreciosStage-key",
            name: "CargaPreciosStage",
            label: "Carga de Precios a Stage",
            onClick: (e) => {
              console.log(e);
            },
            value: "1.1.3",
            icon: React.createElement(UserOutlined),
          },
        ],
      },
      {
        key: "eComerce-key",
        name: "eComerce",
        label: "eComerce",
        onClick: (e) => {
          console.log(e);
        },
        value: "1.2",
        icon: React.createElement(UserOutlined),
        children: [
          {
            key: "DescargaPedidos-key",
            name: "DescargaPedidos",
            label: "Descarga de Pedidos Digitales",
            onClick: (e) => {
              console.log(e);
            },
            value: "1.2.1",
            icon: React.createElement(UserOutlined),
          },
          {
            key: "TiemposEstimadosLlegada-key",
            name: "TimposEstimadosLlegada",
            label: "Tiempos Estimados de Llegada",
            onClick: (e) => {
              console.log(e);
            },
            value: "1.2.2",
            icon: React.createElement(UserOutlined),
          },
        ],
      },
      {
        key: "LogisticaDistribucion-key",
        name: "LogisticaDistribucion",
        label: "Logistica y Distribucion",
        onClick: (e) => {
          console.log(e);
        },
        value: "1.3",
        icon: React.createElement(UserOutlined),
      },
    ],
  },
  {
    key: "RH-key",
    name: "RH",
    label: "Recursos Humanos",
    onClick: (e) => {
      console.log(e);
    },
    value: "2",
    icon: React.createElement(UserOutlined),
    children: [
      {
        key: "BitacoraIntegracion-key",
        name: "BitacoraIntegracion",
        label: "Bitacora de Integración",
        onClick: (e) => {
          console.log(e);
        },
        value: "2.1",
        icon: React.createElement(UserOutlined),
      },
      {
        key: "AlmacenTempEMI-key",
        name: "AlmacenTempEmi",
        label: "Almacen Temporal EMI",
        onClick: (e) => {
          console.log(e);
        },
        value: "2.2",
        icon: React.createElement(UserOutlined),
      },
      {
        key: "AlmacenTemporalTimeBlock-key",
        name: "AlmacenTemporalTimeBlock",
        label: "Almacen Temporal TimeBlock",
        onClick: (e) => {
          console.log(e);
        },
        value: "2.3",
        icon: React.createElement(UserOutlined),
      },
    ],
  },
  {
    key: "Infraestructura-key",
    name: "Infraestructura",
    label: "InfraEstructura",
    onClick: (e) => {
      console.log(e);
    },
    value: "3",
    children: [
      {
        key: "Email-key",
        name: "Email",
        label: "Email",
        onClick: (e) => {
          console.log(e);
        },
        value: "3.1",
        icon: React.createElement(UserOutlined),
      },
      {
        key: "Seguridad-key",
        name: "Seguridad",
        label: "Seguridad",
        onClick: (e) => {
          console.log(e);
        },
        value: "3.2",
        icon: React.createElement(UserOutlined),
      },
      {
        key: "Monitoreo-key",
        name: "Monitoreo",
        label: "Monitoreo",
        onClick: (e) => {
          console.log(e);
        },
        value: "3.3",
        icon: React.createElement(UserOutlined),
      },
    ],
    icon: React.createElement(UserOutlined),
  },
];

export const Layaout = () => {
  const themeConfig = theme.useToken();
  const {
    token: { colorBgContainer },
  } = themeConfig;
  console.log(colorBgContainer);
  return (
    <Layout padding="-2px" margin="-1px">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        style={{
          backgroundColor: colorBgContainer,
          height: "100vh",
        }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ height: "80px", color: "white" }}>Farma logo</div>
        <Menu
          // style={{ minWidth: "400px" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["10"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        ></Content>
        <Footer
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
