import { rest } from 'msw';
import { Product } from '@/types/product';
import { API_PATH } from '@/constants/path';
import { products } from '../fixture/product';
import { base } from '../utils/url';

const productHandlers = [
  rest.get<Product[]>(base(API_PATH.PRODUCTS.ALL), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products), ctx.delay(500));
  }),

  rest.get<Product>(base(API_PATH.PRODUCTS.BY_ID), (req, res, ctx) => {
    const { id } = req.params;

    const product = products.find(({ product_no }) => String(product_no) === id);

    if (!product) {
      return res(ctx.status(404), ctx.json({ message: '존재하지 않는 상품입니다!' }), ctx.delay(500));
    }

    return res(ctx.status(200), ctx.json(product), ctx.delay(500));
  }),
];

export default productHandlers;
