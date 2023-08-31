import { rest } from 'msw';
import { User } from '@/types/user';
import { API_PATH } from '@/constants/path';
import { base } from '../utils/url';
import { otherUser, user } from '../dummy/user';

const userHandler = [
  rest.get<User>(base(API_PATH.USER.BY_ID), (req, res, ctx) => {
    const { id } = req.params;

    if (id === 'numbler') {
      return res(ctx.status(200), ctx.json(user), ctx.delay(500));
    }

    if (id === 'otherNumbler') {
      return res(ctx.status(200), ctx.json(otherUser), ctx.delay(500));
    }

    return res(ctx.status(404), ctx.json({ message: '존재하지 않는 유저입니다.' }), ctx.delay(500));
  }),
];

export default userHandler;
