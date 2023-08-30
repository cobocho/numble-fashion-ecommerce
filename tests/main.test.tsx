import Main from '../src/pages/Main';
import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import queryRender from './QueryRender';

describe('메인페이지 테스트', () => {
  beforeEach(() => {
    queryRender(<Main />);
  });

  it('상품이 정상적으로 로딩되고 표시된다.', async () => {
    const loading = screen.getByText('LOADING...');
    expect(loading).toBeDefined();

    await waitFor(
      () => {
        const articleElements = screen.getAllByRole('article');
        expect(articleElements).toHaveLength(20);
      },
      { timeout: 2000 }
    );
  });
});
