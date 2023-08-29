export interface User {
  user_id: string;
  user_name: string;
  user_nickname: string;
  coupons: object[];
  mileage: number;
  createdAt: string;
}

export interface Token {
  token: string;
  success: boolean;
  deny_message?: string;
}
