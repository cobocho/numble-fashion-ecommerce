import { Token } from '../../types/user';

export const successToken: Token = {
  token: 'fake_token',
  success: true,
};

export const failedToken: Token = {
  token: '',
  success: false,
  deny_message: '존재하지 않는 계정입니다!',
};
