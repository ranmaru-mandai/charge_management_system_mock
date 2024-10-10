import React from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Typography, Tag } from 'antd';

const { Title } = Typography;

const DocumentDetails = () => {
  const { id } = useParams();

  // この部分は実際にはAPIからデータを取得する処理に置き換えます
  const documentData = {
    type: '請求書',
    number: 'INV-001',
    clientName: '株式会社A',
    date: '2023-05-01',
    amount: '¥100,000',
    status: '未払い',
    items: [
      { name: '商品A', quantity: 2, unitPrice: '¥25,000', total: '¥50,000' },
      { name: '商品B', quantity: 1, unitPrice: '¥50,000', total: '¥50,000' },
    ],
  };

  return (
    <div>
      <Title level={2}>書類詳細</Title>
      <Descriptions bordered>
        <Descriptions.Item label="種類">
          <Tag color={documentData.type === '請求書' ? 'blue' : 'green'}>
            {documentData.type}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="番号">{documentData.number}</Descriptions.Item>
        <Descriptions.Item label="顧客名">{documentData.clientName}</Descriptions.Item>
        <Descriptions.Item label="日付">{documentData.date}</Descriptions.Item>
        <Descriptions.Item label="金額">{documentData.amount}</Descriptions.Item>
        <Descriptions.Item label="状態">
          <Tag color={documentData.status === '支払済' ? 'green' : 'red'}>
            {documentData.status}
          </Tag>
        </Descriptions.Item>
      </Descriptions>
      <Title level={3} style={{ marginTop: '20px' }}>明細</Title>
      <Descriptions bordered>
        {documentData.items.map((item, index) => (
          <React.Fragment key={index}>
            <Descriptions.Item label="商品名">{item.name}</Descriptions.Item>
            <Descriptions.Item label="数量">{item.quantity}</Descriptions.Item>
            <Descriptions.Item label="単価">{item.unitPrice}</Descriptions.Item>
            <Descriptions.Item label="小計">{item.total}</Descriptions.Item>
          </React.Fragment>
        ))}
      </Descriptions>
    </div>
  );
};

export default DocumentDetails;