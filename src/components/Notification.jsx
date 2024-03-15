import PropTypes from "prop-types";
import { notification } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const hashMapIcons = {};
hashMapIcons["error"] = <CloseCircleOutlined style={{ color: "#BD1E09" }} />;
hashMapIcons["success"] = <CheckCircleOutlined style={{ color: "#2BC715" }} />;
hashMapIcons["info"] = <InfoCircleOutlined style={{ color: "#338DFF" }} />;
hashMapIcons["warning"] = (
  <ExclamationCircleOutlined style={{ color: "#FF9633" }} />
);
export const openNotification = ({ description, tittle, type, placement }) => {
  notification[type]({
    message: `${tittle}`,
    description,
    placement,
    icon: hashMapIcons[type],
  });
};

openNotification.propTypes = {
  description: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
openNotification.defaultProps = {
  description: "Default text",
  tittle: "Default Notification",
  type: "info",
};
