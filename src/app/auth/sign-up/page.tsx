import SignUpPage from '@/pages/SignUpPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const SignUp = () => {
  return <SignUpPage />;
};

export default SignUp;
