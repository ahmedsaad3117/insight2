import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
  const router = useRouter();
  console.log('In Error Page');
  
  useEffect(() => {
    console.log('Redirecting to root page');
    
    router.push('/');
  }, []);

  return null;
};

export default ErrorPage;