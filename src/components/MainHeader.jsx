import { Layout } from "antd";
import PropTypes from "prop-types";
import { Breadcrumb, Avatar, Col, Row, Popover, Typography } from "antd";
import { HomeOutlined, UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { UserSetting } from "./UserSetting";
const { Header } = Layout;
const MainHeader = ({ colorBgContainer }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col span={20}>
          <Breadcrumb
            style={{ fontSize: "20px", margin: "17px 0 10px 10px" }}
            items={[
              {
                href: "/",
                title: <HomeOutlined style={{ fontSize: "23px" }} />,
              },
              {
                title: (
                  <>
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />
        </Col>
        <Col
          span={4}
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserSetting />
        </Col>
      </Row>
    </Header>
  );
};

MainHeader.propTypes = {
  colorBgContainer: PropTypes.any.isRequired,
};
MainHeader.defaultProps = {
  colorBgContainer: "light",
};
export default MainHeader;
