/* eslint-disable react/prop-types */
import { Card, Statistic, Typography } from "antd";
const { Text } = Typography;
import { Button, Switch } from "antd";
import { getIcon } from "../utils";

import { SunOutlined, MoonOutlined } from "@ant-design/icons";
const CardComponent = (props) => {
  const iconStyle = {
    textAlign: "center",
    fontSize: "45px",
    margin: "10px 10px 0 10px",
  };
  const divStyle = {
    textAlign: "center",
    flexBasis: "33.33%",
    padding: "0",
    width: "75px",
    flexGrow: 1,
    cursor: "pointer",
  };
  {
    switch (props.typeCard) {
      case "statistic":
        return (
          <>
            <Card bordered={true} onClick={props.onClickCard}>
              <Statistic
                title={props.tittle}
                value={props.value}
                precision={2}
                valueStyle={props.style}
                prefix={props.prefix}
                suffix={props.suffix}
              />
            </Card>
          </>
        );
      case "userSettings":
        return (
          <>
            <Card
              actions={[
                <Switch
                  key={"Theme"}
                  checkedChildren={<SunOutlined />}
                  unCheckedChildren={<MoonOutlined />}
                  defaultChecked
                  style={{
                    alignItems: "center",

                    width: "80%",
                  }}
                />,
                <Switch
                  key={"Theme"}
                  checkedChildren={"ES"}
                  unCheckedChildren={"EN"}
                  defaultChecked
                  style={{
                    alignItems: "center",

                    width: "80%",
                  }}
                />,
              ]}
              title={
                <>
                  <div style={{ whiteSpace: "normal", alignItems: "center" }}>
                    <Typography
                      style={{
                        display: "block",
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      {props.userName}
                    </Typography>
                    <Text
                      type="secondary"
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        display: "block",
                        position: "relative",
                        marginTop: "2px",
                        width: "200px",
                      }}
                    >
                      {props.depto}
                    </Text>
                  </div>
                </>
              }
            >
              <Button
                size="small"
                type="primary"
                loading={false}
                style={{
                  width: "100%",
                  height: "30px",
                  marginBottom: "10px",
                }}
              >
                Refresh Token
              </Button>
              <Button
                size="small"
                style={{ width: "100%", height: "30px" }}
                danger
              >
                Logout
              </Button>
            </Card>
          </>
        );
      case "mainApps":
        return (
          <>
            <Card
              key={"KEY ASD"}
              styles={{
                body: {
                  padding: "8px",
                  display: "inline-flex",
                },
              }}
            >
              {props.cardApps.map((menuOption) => (
                <Card.Grid
                  style={divStyle}
                  onClick={menuOption.onClick}
                  key={`key-${menuOption.appName}-cardGrid`}
                >
                  {getIcon(
                    menuOption.icon,
                    iconStyle,
                    `key-${menuOption.appName}-icon`
                  )}
                  <Typography key={`key-${menuOption.appName}-Typography`}>
                    {menuOption.appName}
                  </Typography>
                </Card.Grid>
              ))}
            </Card>
          </>
        );
      default:
        return null;
    }
  }
};
export default CardComponent;
