import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const DocumentList = () => {
  const columns = [
    {
      title: '種類',
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        let color = text === '請求書' ? 'geekblue' : text === '見積書' ? 'green' : 'volcano';
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: '番号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '顧客名',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: '日付',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '金額',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '状態',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <Tag color={status === '支払済' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'アクション',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/documents/${record.id}`}>詳細</Link>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      id: '1',
      type: '請求書',
      number: 'INV-001',
      clientName: '株式会社A',
      date: '2023-05-01',
      amount: '¥100,000',
      status: '未払い',
    },
    {
      key: '2',
      id: '2',
      type: '見積書',
      number: 'EST-001',
      clientName: '株式会社B',
      date: '2023-05-02',
      amount: '¥150,000',
      status: '承認待ち',
    },
    // さらにデータを追加...
  ];

  return (
    <div>
      <Title level={2}>書類一覧</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default DocumentList;