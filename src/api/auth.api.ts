import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { API_PATH } from '@/constants/path';
import { Token } from '@/types/user';
import request from './core/request';

export const getToken = async (id: string, password: string) => {
  return await request(`${API_PATH.AUTH.TOKEN}?id=${id}&password=${password}`);
};

export const useGetToken = (id: string, password: string, options?: UseQueryOptions<Token>) => {
  return useQuery<Token>([], () => getToken(id, password), {
    enabled: false,
    suspense: false,
    cacheTime: 0,
    ...options,
  });
};
