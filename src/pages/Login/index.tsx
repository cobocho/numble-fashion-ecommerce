import * as Style from './index.style';
import Input from '@/common/input';
import Button from '@/common/Button/index.tsx';
import useAuth from '@/hooks/useAuth.ts';

const Login = () => {
  const { idChangeHandler, pwChangeHandler, login } = useAuth();

  return (
    <Style.Container>
      <Style.LoginForm onSubmit={login}>
        <Style.LoginText>로그인해주세요</Style.LoginText>
        <Input
          label="ID"
          fillWidth
          placeholder="ID를 입력해주세요"
          onChange={idChangeHandler}
        />
        <Input
          label="비밀번호"
          fillWidth
          placeholder="비밀번호를 입력해주세요"
          onChange={pwChangeHandler}
        />
        <Button type="submit">로그인</Button>
      </Style.LoginForm>
    </Style.Container>
  );
};

export default Login;
