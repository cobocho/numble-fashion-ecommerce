import { rest } from 'msw';
import { Product } from '../../types/product';
import { products } from '../dummy/product';
import { API_PATH } from '../../constants/path';
import { base } from '../utils/url';

const productHandlers = [
  rest.get<Product[]>(base(API_PATH.PRODUCTS.ALL), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products), ctx.delay(1000));
  }),
];

export default productHandlers;
