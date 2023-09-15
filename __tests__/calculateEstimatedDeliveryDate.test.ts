import calculateEstimatedDeliveryDate from '@/pages/Product/calculateEstimatedDeliveryDate';
import { vi } from 'vitest';

const DEFAULT_DATE = new Date('2023-09-10');

describe('예상 배송기간 함수 테스트', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(DEFAULT_DATE);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('배송일 가록이 [2, 2, 2]일 경우 오늘로부터 2일 추가된 값이 반환된다.', () => {
    const times = [2, 2, 2];
    const result = calculateEstimatedDeliveryDate(times);

    expect(result).toEqual({
      averageTime: 2,
      year: 2023,
      month: 9,
      day: 12,
    });
  });

  it('배송일 가록이 [4, 4, 2]일 경우 오늘로부터 3.333의 올림값인 4일 추가된 값이 반환된다.', () => {
    const times = [4, 4, 2];
    const result = calculateEstimatedDeliveryDate(times);

    expect(result).toEqual({
      averageTime: 4,
      year: 2023,
      month: 9,
      day: 14,
    });
  });

  it('배송일 가록이 []일 경우 오늘로부터 기본값인 2일 추가된 값이 반환된다.', () => {
    const times: number[] = [];
    const result = calculateEstimatedDeliveryDate(times);

    expect(result).toEqual({
      averageTime: 2,
      year: 2023,
      month: 9,
      day: 12,
    });
  });
});
