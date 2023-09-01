import REGEXP from '@/constants/regexp';
import { CreateUserForm } from '@/types/auth';

const signUpValidator = ({ id, nickname, password, password_check }: CreateUserForm) => {
  const error: Partial<CreateUserForm> = {};

  if (!id) {
    error.id = 'ID를 입력해주세요!';
  } else if (!REGEXP.ID.test(id)) {
    error.id = '6자 이상 14자 이하의 영어 소문자와 숫자로 이루어진 ID을 입력해주세요!';
  }

  if (!password) {
    error.password = '비밀번호를 입력해주세요!';
  } else if (!REGEXP.PASSWORD.test(password)) {
    error.password = '8자 이상의 영어와 숫자, 특수문자가 포함된 비밀번호를 입력해주세요!';
  }

  if (!nickname) {
    error.nickname = '닉네임을 입력해주세요!';
  } else if (!REGEXP.NICKNAME.test(nickname)) {
    error.nickname = '2자 이상 8자 이하의 닉네임을 입력해주세요!';
  }

  if (!password_check) {
    error.password_check = '비밀번호를 다시 입력해주세요!!';
  } else if (password_check !== password) {
    error.password_check = '비밀번호가 다릅니다!';
  }

  return error;
};

export default signUpValidator;
