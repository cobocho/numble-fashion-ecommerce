import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import queryRender from './utils/queryRender';
import UserPage from '@/pages/UserPage';
import userStore from '@/store/user';
import { user } from '@/mocks/dummy/user';

describe('메인페이지 테스트', () => {
  beforeEach(() => {
    queryRender(<UserPage />);
  });

  it('마이페이지에서는 유저의 닉네임을 확인 할 수 있다.', async () => {
    await waitFor(() => {
      const nickname = screen.getByText('넘블러');
      expect(nickname).toBeDefined();
    });
  });

  it('나의 마이페이지에서는 유저의 닉네임과 마일리지, 쿠폰 목록을 확인 할 수 있다.', async () => {
    userStore.setState({ user: user });

    await waitFor(() => {
      const nickname = screen.getByText('넘블러');
      const mileage = screen.getByText('1200');

      expect(nickname).toBeDefined();
      expect(mileage).toBeDefined();

      const coupons = screen.getAllByText('나의 쿠폰');
      expect(coupons).toHaveLength(3);
    });
  });
});
