import useForm from '@/hooks/useForm';
import * as Style from './index.style';
import Input from '@/common/input';
import Button from '@/common/Button';
import { CreateUserForm } from '@/types/auth';
import signUpValidator from './signupValidator';
import { createUser } from '@/api/auth.api';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/path';

const SignUp = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm<CreateUserForm>({
    init: {
      id: '',
      nickname: '',
      password: '',
      password_check: '',
    },
    onSubmit: async () => {
      try {
        const result = await createUser(values);
        alert(result.message);
        navigate(ROUTE_PATH.BASE);
      } catch (err) {
        alert(err);
      }
    },
    validate: signUpValidator,
  });

  return (
    <Style.Container>
      <Style.SignUpForm onSubmit={handleSubmit}>
        안녕
        <Input
          type="id"
          label="ID"
          name="id"
          fillWidth
          onChange={handleChange}
        />
        <p>{errors.id}</p>
        <Input
          type="text"
          label="닉네임"
          name="nickname"
          fillWidth
          onChange={handleChange}
        />
        <p>{errors.nickname}</p>
        <Input
          type="password"
          label="비밀번호"
          name="password"
          fillWidth
          onChange={handleChange}
        />
        <p>{errors.password}</p>
        <Input
          type="password"
          label="비밀번호 확인"
          name="password_check"
          fillWidth
          onChange={handleChange}
        />
        <p>{errors.password_check}</p>
        <Button type="submit">회원가입</Button>
      </Style.SignUpForm>
    </Style.Container>
  );
};

export default SignUp;
