import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #cbcbcb;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  height: 50%;
`;

export const HeaderItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;
