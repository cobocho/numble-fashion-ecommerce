import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
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
