import * as Style from './index.style';
import Input from '../../common/input';
import Button from '../../common/Button/index.tsx';
import useLogin from './useLogin.ts';

const Login = () => {
  const { idChangeHandler, pwChangeHandler, login } = useLogin();

  return (
    <Style.Container>
      <Style.LoginForm onSubmit={login}>
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
