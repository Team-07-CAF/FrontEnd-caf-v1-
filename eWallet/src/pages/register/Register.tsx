import { Button, Checkbox, Col, Form, Input, Row, Modal } from 'antd';
import React from 'react';
import Termo from './Termo';
import { StyleForm, StyleRow } from './Style.Register';
import { Footer } from '../../components/Footer/Footer';
import MainHeader from '../../components/Header/Header';

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };


  return (
    <div>
      <MainHeader />
    <Row justify='center' align='middle' style={StyleRow}>
      <Col xs={24} sm={12} md={8} lg={5}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={StyleForm}
          scrollToFirstError
        >
          <Form.Item
            name="nickname"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Por favor, insira seu nome completo!', whitespace: true }]}
          >
            <Input placeholder='Digite seu nome aqui.' />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Por favor, insira um e-mail válido!',
              },
              {
                required: true,
                message: 'Por favor, insira seu e-mail.',
              },
            ]}
          >
            <Input placeholder='Ex: email@email.com' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor, crie uma senha!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder='Ex: Abc@123' />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor, confirme sua senha!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('As duas senhas que você digitou não correspondem!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder='Digite a senha novamente.' />
          </Form.Item>

          <Form.Item>
            <Row gutter={24}>
              <Col span={13}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{ required: true, message: 'Por favor, insira o captcha que você obteve!' }]}
                >
                  <Input placeholder='Captcha' />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Button>Confirme</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('Você deve aceitar os termos.'),
              },
            ]}
          >
            <Checkbox>
              <Modal
                title="POLÍTICA DE PRIVACIDADE"
                okText="Aceito"
                cancelText="Não aceito"
              >
                <Termo />
              </Modal>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    <Footer />
    </div>
  );
};

export default Register;