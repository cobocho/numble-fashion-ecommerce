import { rest } from 'msw';
import { API_PATH } from '@/constants/path';
import { Token } from '@/types/user';
import { base } from '../utils/url';
import { successToken, failedToken } from '../dummy/auth';

const authHandlers = [
  rest.get<Token>(base(API_PATH.AUTH.TOKEN), (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    const password = req.url.searchParams.get('password');

    const existUser = id === 'test' && password === 'test';

    return res(ctx.status(200), ctx.json(existUser ? successToken : failedToken), ctx.delay(500));
  }),
];

export default authHandlers;
