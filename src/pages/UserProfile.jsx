import React, { useState } from 'react';
import { Form, Input, Button, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import EditModal from '../components/EditModal';

const { Title } = Typography;

const UserProfile = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editData, setEditData] = useState({});

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const showModal = () => {
    setEditData(form.getFieldsValue());
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalSave = (values) => {
    form.setFieldsValue(values);
    setIsModalVisible(false);
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
          <Button onClick={showModal} style={{ marginLeft: '10px' }}>
            編集
          </Button>
        </Form.Item>
      </Form>
      <EditModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onSave={handleModalSave}
        initialData={editData}
      />
    </div>
  );
};

export default UserProfile;