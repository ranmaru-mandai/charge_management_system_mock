import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import InvoiceCreation from './pages/InvoiceCreation';
import EstimateCreation from './pages/EstimateCreation';
import DocumentList from './pages/DocumentList';
import DocumentDetails from './pages/DocumentDetails';
import UserProfile from './pages/UserProfile';

const { Content } = Layout;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/create-invoice" element={<InvoiceCreation />} />
                <Route path="/create-estimate" element={<EstimateCreation />} />
                <Route path="/documents" element={<DocumentList />} />
                <Route path="/documents/:id" element={<DocumentDetails />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;