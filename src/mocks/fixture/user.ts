import { User } from '@/types/user';

export const user: User = {
  user_id: 'numbler',
  user_name: '홍길동',
  user_nickname: '넘블러',
  coupons: [
    {
      type: 'rate',
      title: '20% 할인 쿠폰',
      discountRate: 20,
    },
    {
      type: 'amount',
      title: '10,000원 할인 쿠폰',
      discountAmount: 10000,
    },
    {
      type: 'conditional_amount',
      title: '50000원 이상 구매 시, 15,000원 할인 쿠폰',
      minOrderAmount: 50000,
      discountAmount: 15000,
    },
  ],
  mileage: 1200,
  createdAt: '2023/07/21',
};

export const otherUser: User = {
  user_id: 'otherNumbler',
  user_name: '김길동',
  user_nickname: '익명',
  coupons: [
    {
      type: 'rate',
      title: '20% 할인 쿠폰',
      discountRate: 20,
    },
  ],
  mileage: 1200,
  createdAt: '2023/05/21',
};

export const allUsers = [user, otherUser];
