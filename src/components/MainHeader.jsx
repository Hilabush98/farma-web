import { Layout } from "antd";
import PropTypes from "prop-types";

const { Header } = Layout;
const MainHeader = ({ colorBgContainer }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  );
};

MainHeader.propTypes = {
  colorBgContainer: PropTypes.any.isRequired,
};
MainHeader.defaultProps = {
  colorBgContainer: "light",
};
export default MainHeader;
