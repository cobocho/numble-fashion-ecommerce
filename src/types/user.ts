import { CouponCategory } from './coupon';

export interface User {
  user_id: string;
  user_name: string;
  user_nickname: string;
  coupons: CouponCategory[];
  mileage: number;
  createdAt: string;
}

export interface Token {
  token: string;
  success: boolean;
  user?: User;
  deny_message?: string;
}
