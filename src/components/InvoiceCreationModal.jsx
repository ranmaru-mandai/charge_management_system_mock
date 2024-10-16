import React, { useState } from 'react';
import { Modal, Form, Input, DatePicker, InputNumber, Button } from 'antd';

const InvoiceCreationModal = ({ visible, onCancel, onSave }) => {
  const [form] = Form.useForm();
  const [isEdited, setIsEdited] = useState(false);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave(values);
      form.resetFields();
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
          form.resetFields();
          setIsEdited(false);
        },
        onCancel: () => {
          // モーダルを閉じないでそのまま
        },
      });
    } else {
      onCancel();
    }
  };

  return (
    <Modal
      title="請求書作成"
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          キャンセル
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          作成
        </Button>,
      ]}
    >
      <Form 
        form={form} 
        layout="vertical"
        onValuesChange={() => setIsEdited(true)}
      >
        <Form.Item
          name="clientName"
          label="顧客名"
          rules={[{ required: true, message: '顧客名を入力してください' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="invoiceDate"
          label="請求日"
          rules={[{ required: true, message: '請求日を選択してください' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="amount"
          label="金額"
          rules={[{ required: true, message: '金額を入力してください' }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InvoiceCreationModal;