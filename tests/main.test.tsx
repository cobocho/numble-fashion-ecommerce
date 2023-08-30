import Main from '@/pages/Main';
import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import queryRender from './queryRender';

describe('메인페이지 테스트', () => {
  beforeEach(() => {
    queryRender(<Main />);
  });

  it('상품이 정상적으로 로딩되고 표시된다.', async () => {
    const loading = screen.getByText('LOADING...');
    expect(loading).toBeDefined();

    const articleElements = await waitFor(() => screen.getAllByRole('article'));
    expect(articleElements).toHaveLength(20);
  });
});
