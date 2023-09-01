import { rest } from 'msw';
import { API_PATH } from '@/constants/path';
import { Token } from '@/types/user';
import { base } from '../utils/url';
import { successToken, failedToken } from '../fixture/auth';
import { CreateUserForm } from '@/types/auth';
import { allUsers } from '../fixture/user';

const authHandlers = [
  rest.get<Token>(base(API_PATH.AUTH.TOKEN), (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    const password = req.url.searchParams.get('password');

    const existUser = id === 'test' && password === 'test';

    return res(ctx.status(200), ctx.json(existUser ? successToken : failedToken), ctx.delay(500));
  }),

  rest.post(base(API_PATH.AUTH.SIGNUP), (req, res, ctx) => {
    const { id } = req.body as CreateUserForm;
    const existId = allUsers.find((user) => user.user_id === id);
    if (existId) {
      return res(
        ctx.status(400),
        ctx.json({
          message: '이미 존재하는 아이디입니다!',
        }),
        ctx.delay(500)
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: '가입에 성공하였습니다!',
      }),
      ctx.delay(500)
    );
  }),
];

export default authHandlers;
