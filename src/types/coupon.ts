interface Coupon {
  type: 'rate' | 'amount' | 'conditional_amount';
  title: string;
}

export interface RateCoupon extends Coupon {
  type: 'rate';
  discountRate: number;
}

export interface AmountCoupon extends Coupon {
  type: 'amount';
  discountAmount: number;
}

export interface ConditionalAmountCoupon extends Coupon {
  type: 'conditional_amount';
  minOrderAmount: number;
  discountAmount: number;
}

export type CouponCategory = RateCoupon | AmountCoupon | ConditionalAmountCoupon;
