import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { DollarOutlined, FileOutlined } from '@ant-design/icons';

const Dashboard = () => {
  return (
    <div>
      <h1>ダッシュボード</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="未払い請求書"
              value={5}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="支払済み請求書"
              value={10}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="見積書"
              value={3}
              prefix={<FileOutlined />}
            />
          </Card>
        </Col>
      </Row>
      {/* ここに最近の請求書、見積書、納品書のリストを追加 */}
    </div>
  );
};

export default Dashboard;