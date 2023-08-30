import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetToken } from '@/api/auth.api.ts';
import userStore from '@/store/user.ts';
import { ROUTE_PATH } from '@/constants/path.ts';

const useAuth = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data, refetch, isFetching } = useGetToken(id, password);
  const { setUser, clearUser } = userStore();

  const navigate = useNavigate();

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  const logout = () => {
    clearUser();
    navigate(ROUTE_PATH.BASE);
  };

  useEffect(() => {
    if (isFetching || !data) return;

    if (data.success) {
      localStorage.setItem('token', data.token);
      setUser(data.user!);
      navigate(ROUTE_PATH.BASE);
    }

    if (!data.success) {
      alert(data.deny_message);
    }
  }, [isFetching]);

  return {
    idChangeHandler,
    pwChangeHandler,
    login,
    logout,
  };
};

export default useAuth;
