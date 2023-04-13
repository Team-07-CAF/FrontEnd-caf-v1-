import { Button, Col, Form, Input, Row, message } from 'antd'
import React from 'react'
import { useAuth } from '../../context/authProvider/useAuth'
import { Navigate, useNavigate } from 'react-router-dom';

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
    <Row
      justify='center'
      align='middle'
      style={{
        height: '100vh'
      }}
    >
      <Col span={12}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label='Email'
            name='email'
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>
  )
}

export default Login