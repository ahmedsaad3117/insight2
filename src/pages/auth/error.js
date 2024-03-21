// import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
  // const router = useRouter();

  useEffect(() => {
    console.log('Inside Error Page');
    // router.push('/dashboard');
  }, []);

  return <h1>Error Page</h1>;
};

export default ErrorPage;