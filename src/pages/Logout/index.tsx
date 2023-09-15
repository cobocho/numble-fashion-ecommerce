import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return <></>;
};

export default Logout;
