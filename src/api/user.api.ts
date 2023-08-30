import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { API_PATH } from '@/constants/path';
import { QUERY_KEY } from '@/constants/queryKey';
import { User } from '@/types/user';
import request from './core/request';

export const getUserById = async (id: string) => {
  return await request(API_PATH.USER.BY_ID.replace(':id', id));
};

export const useGetUserById = (id: string, options?: UseQueryOptions<User>) => {
  return useQuery<User>([QUERY_KEY.USER.SINGLE, id], () => getUserById(id), {
    ...options,
  });
};
