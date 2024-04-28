import { useState } from "react";
import { CardComponent } from "../index.js";
import { Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./styleSetting.css";

const UserSetting = (user) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const hide = () => {
    setOpen(false);
  };
  return (
    <Popover
      padding={0}
      placement="bottom"
      trigger="click"
      open={open}
      overlayStyle={{ padding: 0 }}
      onOpenChange={handleOpenChange}
      content={
        <>
          <CardComponent
            typeCard={"userSettings"}
            userName={"Acxell Gonzalez"}
            depto={"Arquitectura TI"}
          />
        </>
      }
    >
      <Avatar size={45} icon={<UserOutlined />} style={{ cursor: "pointer" }} />
    </Popover>
  );
};
export default UserSetting;
