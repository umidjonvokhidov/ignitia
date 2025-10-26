import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
};

export default ForgotPassword;
