import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetToken } from '../../api/auth.api';
import * as Style from './index.style';
import Input from '../../common/input';
import Button from '../../common/Button/index.tsx';
import { ROUTE_PATH } from '../../constants/path.ts';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data, refetch, isRefetching, isFetching } = useGetToken(id, password);
  const navigate = useNavigate();

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);

  const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    if (isFetching || !data) return;

    if (data.success) {
      localStorage.setItem('token', data.token);
      navigate(ROUTE_PATH.BASE);
    }

    if (!data.success) {
      alert(data.deny_message);
    }
  }, [isRefetching, data]);

  return (
    <Style.Container>
      <Style.LoginForm onSubmit={submitHandler}>
        <Style.LoginText>로그인해주세요</Style.LoginText>
        <Input
          label="ID"
          fillWidth
          onChange={idChangeHandler}
        />
        <Input
          label="비밀번호"
          fillWidth
          onChange={pwChangeHandler}
        />
        <Button type="submit">로그인</Button>
      </Style.LoginForm>
    </Style.Container>
  );
};

export default Login;
