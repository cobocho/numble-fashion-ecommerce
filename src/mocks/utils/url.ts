import { API_PATH } from '@/constants/path';

export const base = (path: string) => {
  return `${API_PATH.BASE}${path}`;
};
