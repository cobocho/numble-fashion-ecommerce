import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({ col }: { col?: number }) => (col ? col : 4)}, 1fr);
  grid-gap: 20px;
  width: 100%;
`;

export const NoProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
`;
