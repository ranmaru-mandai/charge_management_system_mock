import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import InvoiceCreationModal from '../components/InvoiceCreationModal';

const { Title } = Typography;

const InvoiceCreation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = (values) => {
    console.log('Received values of form:', values);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Title level={2}>請求書作成</Title>
      <Button type="primary" onClick={showModal}>
        請求書を作成
      </Button>
      <InvoiceCreationModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </div>
  );
};

export default InvoiceCreation;