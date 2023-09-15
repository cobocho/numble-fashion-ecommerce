import VALIDATION from '@/constants/validation';
import { CreateUserForm } from '@/types/auth';

const signUpValidator = ({ id, nickname, password, password_check }: CreateUserForm) => {
  const error: Partial<CreateUserForm> = {};

  if (!id) {
    error.id = 'ID를 입력해주세요!';
  } else if (!VALIDATION.ID.REGEXP.test(id)) {
    error.id = VALIDATION.ID.MESSAGE;
  }

  if (!password) {
    error.password = '비밀번호를 입력해주세요!';
  } else if (!VALIDATION.PASSWORD.REGEXP.test(password)) {
    error.password = VALIDATION.PASSWORD.MESSAGE;
  }

  if (!nickname) {
    error.nickname = '닉네임을 입력해주세요!';
  } else if (!VALIDATION.NICKNAME.REGEXP.test(nickname)) {
    error.nickname = VALIDATION.NICKNAME.MESSAGE;
  }

  if (!password_check) {
    error.password_check = '비밀번호를 다시 입력해주세요!';
  } else if (password_check !== password) {
    error.password_check = '비밀번호가 다릅니다!';
  }

  return error;
};

export default signUpValidator;
