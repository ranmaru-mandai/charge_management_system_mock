import React from 'react';
import { Form, Input, Button, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;

const UserProfile = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div>
      <Title level={2}>ユーザープロフィール</Title>
      <Form form={form} name="user_profile" onFinish={onFinish} layout="vertical">
        <Form.Item name="company_name" label="会社名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="representative" label="代表者名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="住所" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="電話番号" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="メールアドレス" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="logo" label="会社ロゴ">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>クリックしてアップロード</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserProfile;