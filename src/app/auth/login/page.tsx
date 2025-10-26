import LoginPage from '@/pages/LoginPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
