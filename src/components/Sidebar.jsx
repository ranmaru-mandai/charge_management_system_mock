import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  FileAddOutlined,
  FileTextOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">ダッシュボード</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileAddOutlined />}>
          <Link to="/create-invoice">請求書作成</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileAddOutlined />}>
          <Link to="/create-estimate">見積書作成</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<FileTextOutlined />}>
          <Link to="/documents">書類一覧</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/profile">ユーザープロフィール</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;