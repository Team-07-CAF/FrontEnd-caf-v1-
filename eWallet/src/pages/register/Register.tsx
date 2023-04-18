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
          <Form.Item
            labelCol={{ span: 24 }}
            style={{ margin: "5px 0" }}
            name="nickname"
            rules={[{ required: true, message: 'Por favor, insira seu nome completo!', whitespace: true },]}
          >
            <div>
              <label style={{ color: '#ffffff' }}>Nome Completo:</label>
              <Input placeholder="Digite seu nome aqui." />
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            labelCol={{ span: 24 }}
            style={{ margin: "5px 0" }}
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
            <div>
              <label style={{ color: '#ffffff' }}>E-mail:</label>
              <Input placeholder='Ex: email@email.com' />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            style={{ margin: "5px 0" }}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Por favor, crie uma senha!',
              },
            ]}
            hasFeedback
          >
            <div>
              <label style={{ color: '#ffffff' }}>Senha:</label>
              <Input.Password placeholder='Ex: Abc@123' />
            </div>
          </Form.Item>

          <Form.Item
            name="confirm"
            labelCol={{ span: 24 }}
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
            <div>
              <label style={{ color: '#ffffff' }}>Confirme a Senha:</label>
              <Input.Password placeholder='Digite a senha novamente.' />
            </div>
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
              <Button style={StyleButton}>Confirme</Button>

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
            <div>
              <Checkbox />
              <ModalComponent
                modalTitle={'POLÍTICA DE PRIVACIDADE'}
                modalText={<Termo />}
                buttonStyle={{
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                  color: "#00ff00",
                }}
                titleButton={"Termo de Privacidade . . ."}
              >
                <div>
                <Termo />
                </div>
              </ModalComponent>
            </div>
          </Form.Item>

          <Form.Item>
            <Row justify='center' align='middle'>
              <Button style={StyleButton} type="primary" htmlType="submit">
                Registrar
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;