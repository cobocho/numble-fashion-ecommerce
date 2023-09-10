import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { API_PATH } from '@/constants/path';
import { QUERY_KEY } from '@/constants/queryKey';
import { Product } from '@/types/product';
import request from './core/request';

export const getAllProducts = async (): Promise<Product[]> => {
  return await request(API_PATH.PRODUCTS.ALL);
};

export const getProductById = async (id: string): Promise<Product> => {
  return await request(API_PATH.PRODUCTS.BY_ID.replace(':id', id));
};

export const useGetAllProducts = (options?: UseQueryOptions<Product[]>) => {
  return useQuery<Product[]>([QUERY_KEY.PRODUCT.ALL_PRODUCTS], getAllProducts, {
    ...options,
  });
};

export const useGetProductById = (id: string, options?: UseQueryOptions<Product>) => {
  return useQuery<Product>([QUERY_KEY.PRODUCT.ID_PRODUCT], () => getProductById(id), { ...options });
};
