import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  FundTwoTone,
  HddTwoTone,
  IdcardTwoTone,
  SettingOutlined,
} from "@ant-design/icons";

const getIcon = (iconName, iconStyle, keyName) => {
  switch (iconName) {
    case "HomeOutlined":
      return <HomeOutlined style={iconStyle} key={keyName} />;

    case "UserOutlined":
      return <UserOutlined style={iconStyle} key={keyName} />;

    case "AppstoreOutlined":
      return <AppstoreOutlined style={iconStyle} key={keyName} />;

    case "FundTwoTone":
      return <FundTwoTone style={iconStyle} key={keyName} />;

    case "HddTwoTone":
      return <HddTwoTone style={iconStyle} key={keyName} />;

    case "IdcardTwoTone":
      return <IdcardTwoTone style={iconStyle} key={keyName} />;

    case "SettingOutlined":
      return <SettingOutlined style={iconStyle} key={keyName} />;

    default:
      <AppstoreOutlined style={iconStyle} key={keyName} />;
      break;
  }
};
export { getIcon };
