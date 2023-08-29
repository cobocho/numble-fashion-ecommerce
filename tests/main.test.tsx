import Main from '../src/pages/Main';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../src/components/Loading';

describe('메인페이지 테스트', () => {
  beforeEach(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
        },
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    );
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
