import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { API_PATH } from '@/constants/path';
import { Token } from '@/types/user';
import request from './core/request';
import { CreateUserForm } from '@/types/auth';

export const getToken = async (id: string, password: string): Promise<Token> => {
  return await request(`${API_PATH.AUTH.TOKEN}?id=${id}&password=${password}`);
};

export const createUser = async (userData: CreateUserForm, options?: RequestInit) => {
  return await request(API_PATH.AUTH.SIGNUP, {
    method: 'POST',
    body: JSON.stringify(userData),
    ...options,
  });
};

export const useGetToken = (id: string, password: string, options?: UseQueryOptions<Token>) => {
  return useQuery<Token>([], () => getToken(id, password), {
    enabled: false,
    suspense: false,
    cacheTime: 0,
    ...options,
  });
};

export const useCreateUser = (userData: CreateUserForm | null = null, options?: UseMutationOptions<CreateUserForm>) => {
  return useMutation<CreateUserForm>(() => createUser(userData!), options);
};
