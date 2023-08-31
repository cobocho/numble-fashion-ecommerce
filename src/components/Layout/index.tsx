import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import ErrorBoundary from '../ErrorBoundary';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1152px;
  height: 800px;
  padding-top: 100px;
  margin: auto;

  @media (max-width: 1152px) {
    width: 100vw;
  }
`;

export default Layout;
