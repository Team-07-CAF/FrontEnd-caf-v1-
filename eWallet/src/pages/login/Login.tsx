import { Button, Col, Form, Input, Row, message } from 'antd';
import React from 'react';
import { useAuth } from '../../context/authProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { SteyModal, StyleButton, StyleForm, StyleRow, } from './Style.Login';
import { UserOutlined } from '@ant-design/icons';
import ModalComponent from '../../components/modal';

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
      <Col span={5}>
        <Form
          name='basic'
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          style={StyleForm}
        >

          <h2 style={{ color: '#ffffff', textAlign: 'center' }}>Login</h2>
          <Form.Item name='email'>
            <p style={{ color: '#ffffff' }}>
              E-mail
            </p> <Input placeholder="input E-mail" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item name='password'>
            <p style={{ color: '#ffffff' }}>
              Password
            </p> <Input.Password placeholder="input password" />
          </Form.Item>

          <Form.Item>
            <ModalComponent 
            modalTitle={''} 
            modalText={undefined}  
            modalStyle={{}}
            buttonStyle={SteyModal}  
            titleButton={'Esqueceu  senha? Clique Aqui' }        
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 10 }}>
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
