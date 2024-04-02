import PropTypes from "prop-types";
import { Menu, Layout } from "antd";
const { Sider } = Layout;

const LateralMenu = ({ items, colorBgContainer }) => {
  console.log(colorBgContainer);
  console.log(items);
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        style={{
          backgroundColor: colorBgContainer,
          height: "100vh",
        }}
      >
        <div style={{ height: "80px", color: "white" }}>Farma logo</div>
        <Menu
          style={{ minWidth: 0, flex: "auto" }}
          theme={colorBgContainer ? "light" : "dark"}
          mode="inline"
          multiple
          forceSubMenuRender
          selectedKeys="IdVentasaRTLOG-key"
          defaultOpenKeys={["Negocio-key", "Oretail-key", "IdVentasaRTLOG-key"]}
          defaultSelectedKeys={["10"]}
          items={items}
        ></Menu>
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
      key: "0",
      name: "",
    },
  ],
  colorBgContainer: "light",
};
export default LateralMenu;
