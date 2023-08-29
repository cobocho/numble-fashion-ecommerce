import { useQuery } from '@tanstack/react-query';
import { API_PATH } from '../constants/path';
import request from './request';
import { QUERY_KEY } from '../constants/queryKet';
import { Product } from '../types/product';

export const getAllProducts = async () => {
  return await request(API_PATH.PRODUCTS.ALL);
};

export const useGetAllProducts = () => {
  return useQuery<Product[] | Error>([QUERY_KEY.PRODUCT.ALL_PRODUCTS], getAllProducts);
};
