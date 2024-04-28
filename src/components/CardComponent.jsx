/* eslint-disable react/prop-types */
import { Card, Statistic, Typography } from "antd";
const { Text } = Typography;
import { Button, Switch } from "antd";

import { SunOutlined, MoonOutlined } from "@ant-design/icons";
const CardComponent = (props) => {
  {
    switch (props.typeCard) {
      case "statistic":
        return (
          <>
            <Card bordered={false} onClick={props.onClickCard}>
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
              <Switch
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
                defaultChecked
                style={{
                  alignItems: "center",
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
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
      default:
        return null;
    }
  }
};
export default CardComponent;
