import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Layout, Popover } from "antd";
import { CardComponent } from "../index.js";
import { getIcon } from "../../utils/icons.jsx";
const { Sider } = Layout;

const LateralMenu = ({ items, colorBgContainer }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onClickCard = (e) => {
    setOpen(false);

    console.log("log", e);
  };

  return (
    <>
      <Sider
        collapsible
        onCollapse={(collapsed) => {
          console.log("El Sider se ha colapsado:", collapsed);
        }}
        width={250}
        style={{
          backgroundColor: colorBgContainer,
          height: "100vh",
        }}
      >
        <Popover
          placement="bottom"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
          content={
            <>
              <CardComponent
                typeCard={"mainApps"}
                cardApps={[
                  {
                    appName: "Negocio",
                    icon: "FundTwoTone",
                    onClick: (e) => {
                      onClickCard(e);
                    },
                  },
                  {
                    appName: "Recursos Humanos",
                    icon: "HddTwoTone",
                    onClick: (e) => {
                      onClickCard(e);
                    },
                  },
                  {
                    appName: "Infraestructura",
                    icon: "IdcardTwoTone",
                    onClick: (e) => {
                      onClickCard(e);
                    },
                  },
                  {
                    appName: "Monitor de Procesos",
                    icon: "IdcardTwoTone",
                    onClick: (e) => {
                      onClickCard(e);
                    },
                  },
                ]}
              />
            </>
          }
        >
          <div
            style={{
              height: "80px",
              cursor: "pointer",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {getIcon("AppstoreOutlined", {
              fontSize: "40px",
              marginTop: "15px",
              color: "gray",
            })}
          </div>
        </Popover>

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
