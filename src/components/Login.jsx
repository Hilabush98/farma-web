/* eslint-disable react/prop-types */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, theme, Card } from "antd";
import { Layout, Flex } from "antd";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

const Login = ({ setuserConfiguration }) => {
  const themeConfig = theme.useToken();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = themeConfig;
  const onFinish = (values) => {
    const 
    console.log("Received values of form: ", values);
    setuserConfiguration((e) => {
      return { ...e, user:values.user };
    });
    // setuserConfiguration({ ...values });
  };
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: colorBgContainer,
          height: "10vh",
          textAlign: "center",
        }}
      >
        Cabecera
      </Header>
      <Content
        style={{
          backgroundColor: colorBgContainer,
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: 400, padding: "80px 0 10px 0" }}>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={({ values }) => {
              localStorage.setItem("User", `${values.username}`);
              localStorage.setItem();
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol>
              <Button
                size="large"
                style={{ width: "100%", marginTop: "20px" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
      <Footer
        style={{
          backgroundColor: colorBgContainer,
          height: "10vh",
          textAlign: "center",
        }}
      >
        Derechos reservados FAH
      </Footer>
    </Layout>
  );
};

export default Login;
