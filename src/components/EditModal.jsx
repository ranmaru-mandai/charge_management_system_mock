import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const EditModal = ({ visible, onCancel, onSave, initialData }) => {
  const [form] = Form.useForm();
  const [isEdited, setIsEdited] = useState(false);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave(values);
      setIsEdited(false);
    });
  };

  const handleCancel = () => {
    if (isEdited) {
      Modal.confirm({
        title: '変更を破棄しますか？',
        content: '編集内容が保存されていません。本当に閉じますか？',
        onOk: () => {
          onCancel();
          setIsEdited(false);
        },
      });
    } else {
      onCancel();
    }
  };

  return (
    <Modal
      title="編集"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          キャンセル
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          保存
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialData}
        onValuesChange={() => setIsEdited(true)}
      >
        <Form.Item
          name="name"
          label="名前"
          rules={[{ required: true, message: '名前を入力してください' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="メールアドレス"
          rules={[
            { required: true, message: 'メールアドレスを入力してください' },
            { type: 'email', message: '有効なメールアドレスを入力してください' },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;