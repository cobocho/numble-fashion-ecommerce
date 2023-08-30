import useAuth from '@/hooks/useAuth';

const Logout = () => {
  const { logout } = useAuth();

  logout();

  return <></>;
};

export default Logout;
