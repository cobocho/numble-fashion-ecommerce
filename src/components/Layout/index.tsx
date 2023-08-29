import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Suspense } from 'react';
import Loading from '../Loading';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

const Container = styled.div`
  width: 1152px;
  height: 800px;
  margin: auto;

  @media (max-width: 1152px) {
    width: 100vw;
  }
`;

export default Layout;
