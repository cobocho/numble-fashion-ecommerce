import { rest } from 'msw';
import { product } from '../../types/product';
import { products } from '../dummy/product';

const productHandlers = [
  rest.get<product>('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];

export default productHandlers;
