import React from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Space, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const InvoiceCreation = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div>
      <Title level={2}>請求書作成</Title>
      <Form form={form} name="invoice_creation" onFinish={onFinish} autoComplete="off">
        <Form.Item name="client_name" label="顧客名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="invoice_date" label="請求日" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    rules={[{ required: true, message: '項目名を入力してください' }]}
                  >
                    <Input placeholder="項目名" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'amount']}
                    rules={[{ required: true, message: '金額を入力してください' }]}
                  >
                    <InputNumber placeholder="金額" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  項目を追加
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            請求書を作成
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InvoiceCreation;