/* eslint-disable react/prop-types */
import { Button, Form, Input, theme, Card, Layout } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../context/userContext';
import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { getProfilesByEmployee, LogInQuery } from './LoginQueries';
import {
    formatterToolsPermission,
    formatterRoutePermission,
} from '../../utils/index.js';

const { Header, Footer, Content } = Layout;

const Login = () => {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (token) {
            getAllTools();
        }
    }, []);

    const [getAllTools] = useLazyQuery(getProfilesByEmployee, {
        fetchPolicy: 'cache-first',
        context: {
            authorization: `Bearer ${token}`,
        },
        onCompleted: ({ Tools }) => {
            console.log(formatterToolsPermission(Tools));
            localStorage.setItem(
                'permissionsTools',
                JSON.stringify(formatterToolsPermission(Tools))
            );
            localStorage.setItem(
                'routePermission',
                JSON.stringify(formatterRoutePermission(Tools))
            );

            //  window.location = '/';
        },
    });
    const [logInFetch] = useLazyQuery(LogInQuery, {
        fetchPolicy: 'no-cache',
        onCompleted: async ({ ResponseLogin }) => {
            const { access_token, error, refresh_token, expires_in } =
                ResponseLogin;
            if (!error) {
                localStorage.setItem('token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                localStorage.setItem('expires_in', JSON.stringify(expires_in));
                location.reload();
            } else {
                setStatusForm({ password: 'error' });
            }
        },
        onError: (error) => {
            // agregar notstack y errores de notistack
            console.error(error);
        },
    });
    const themeConfig = theme.useToken();
    const {
        token: { colorBgContainer },
    } = themeConfig;

    const [statusForm, setStatusForm] = useState({
        password: null,
        buttom: null,
    });

    const onFinish = async ({ username, password }) => {
        await logInFetch({
            variables: {
                credentials: {
                    user: username,
                    pass: password,
                },
            },
        });
    };
    return (
        <Layout>
            <Header
                style={{
                    backgroundColor: colorBgContainer,
                    height: '10vh',
                    textAlign: 'center',
                }}
            >
                Cabecera
            </Header>
            <Content
                style={{
                    backgroundColor: colorBgContainer,
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card style={{ width: 400, padding: '80px 0 10px 0' }}>
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
                                    message: 'Please input your username!',
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
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol>
                            <Button
                                size="large"
                                style={{ width: '100%', marginTop: '20px' }}
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
                    height: '10vh',
                    textAlign: 'center',
                }}
            >
                Derechos reservados FAH
            </Footer>
        </Layout>
    );
};

export default Login;
