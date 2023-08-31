import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '@/components/Header';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const queryRender = (element: JSX.Element) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Header />
        <Suspense fallback={<Loading />}>{element}</Suspense>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

export default queryRender;
