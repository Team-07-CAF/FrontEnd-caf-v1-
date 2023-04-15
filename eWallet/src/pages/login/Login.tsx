import { Button, Col, Form, Input, Row, message } from 'antd';
import React from 'react';
import { useAuth } from '../../context/authProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { StyleButton, StyleForm, StyleRow } from './Style.Login';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(value: { email: string, password: string }) {
    try {
      await auth.authenticate(value.email, value.password);
      navigate('/profile');
    } catch (error) {
      message.error('Invalid E-mail or Password')
    }
  }

  return (
    <Row justify='center' align='middle' style={StyleRow}>
      <Col xs={24} sm={12} md={8} lg={5}>
        <Form
          name='basic'
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          style={StyleForm}
        >

          <h2 style={{ color: "#ffffff", textAlign: "center", marginTop: "1rem", fontSize: '1.5rem' }}>Login</h2>
          <Form.Item name='email'>
            <p style={{color: '#ffffff'}}>E-mail</p><Input placeholder="Input E-mail" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item name='password'>
            <p style={{color: '#ffffff'}}>Senha</p><Input.Password placeholder="Input Password" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24, style: { textAlign: "center" } }}>
            <Button type='primary' style={StyleButton} htmlType='submit'>
              Login
            </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>
  )
}

export default Login;
