/* eslint-disable react/prop-types */
import { Button, Form, Input, theme, Card } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/userContext";
import { Layout } from "antd";
import { useState } from "react";

const { Header, Footer, Content } = Layout;

const Login = () => {
  const { login } = useContext(AuthContext);

  const [statusForm, setStatusForm] = useState({
    password: null,
    buttom: null,
  });

  const themeConfig = theme.useToken();
  const {
    token: { colorBgContainer },
  } = themeConfig;
  const onFinish = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: values.username,
        client_secret: values.password,
        scorpe: "Masivas",
      }),
    };
    const red = fetch(
      "https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(red);
    if (values.password === "12345") {
      login(values);
    } else {
      setStatusForm({ password: "error" });
    }
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
