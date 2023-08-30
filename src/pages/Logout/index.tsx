import useAuth from '../Login/useAuth';

const Logout = () => {
  const { logout } = useAuth();

  logout();

  return <></>;
};

export default Logout;
