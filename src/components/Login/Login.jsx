/* eslint-disable react/prop-types */
import { Button, Form, Input, theme, Card } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import { Layout } from "antd";
import { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const getAllToolsgql = gql``;

const { Header, Footer, Content } = Layout;

const Login = () => {
  const [getAllTools] = useLazyQuery(getAllToolsgql, {
    fetchPolicy: "cache-first",
    onCompleted: () => {
      console.log("Terminó");
      // window.location = "/";
    },
  });
  const themeConfig = theme.useToken();
  const {
    token: { colorBgContainer },
  } = themeConfig;

  const { login, user } = useContext(AuthContext);

  const [statusForm, setStatusForm] = useState({
    password: null,
    buttom: null,
  });
  useEffect(() => {
    console.log("se eejecuta esto");
    if (user?.isLogged) window.location = "/";
  }, []);

  const onFinish = async (values) => {
    const res = await login(values);
    if (res) {
      const { data } = await getAllTools();
      console.log(data);
    } else {
      setStatusForm({ password: "error" });
    }
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
            onFinishFailed={() => {}}
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
              validateStatus={statusForm.password}
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
                loading={false}
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
