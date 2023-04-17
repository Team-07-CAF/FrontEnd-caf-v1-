import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';
import Termo from './Termo';
import { StyleButton, StyleForm, StyleRow } from './Style.Register';
import ModalComponent from '../../components/modal';

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row justify='center' align='middle' style={StyleRow}>
      <Col xs={24} sm={12} md={8} lg={5}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={StyleForm}
          scrollToFirstError
        >
          <h2 style={{ color: "#ffffff", textAlign: "center", fontSize: '1.5rem' }}>Cadastro</h2>
          ,
          <Form.Item
            name="nickname"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Por favor, insira seu nome completo!', whitespace: true }]}
          >
            <p style={{ color: "#ffffff" }}>Nome Completo:</p><Input placeholder='Digite seu nome aqui.' />
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
            <p style={{ color: "#ffffff" }}>E-mail:</p> <Input placeholder='Ex: email@email.com' />
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
            <p style={{ color: "#ffffff" }}>Senha:</p> <Input.Password placeholder='Ex: Abc@123' />
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
            <p style={{ color: "#ffffff" }}>Confirme sua Senha:</p><Input.Password placeholder='Digite a senha novamente.' />
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
                <Button style={StyleButton}>Confirme</Button>
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
            <Checkbox />

            <ModalComponent
              modalTitle={'POLÍTICA DE PRIVACIDADE'}
              modalText={<Termo />}
              buttonStyle={{
                background: "none",
                border: "none",
                boxShadow: "none",
                color: "#ff0000",
              }}
              titleButton={"Termo..."}
            >
              <Termo />
            </ModalComponent>
          </Form.Item>

          <Form.Item>
            <Button style={StyleButton} type="primary" htmlType="submit">
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;