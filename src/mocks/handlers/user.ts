import { rest } from 'msw';
import { User } from '../../types/user';
import { base } from '../utils/url';
import { API_PATH } from '../../constants/path';
import { user } from '../dummy/user';

export const userHandler = [
  rest.get<User>(base(API_PATH.USER.BY_ID), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user), ctx.delay(1000));
  }),
];
