import styled from '@emotion/styled';
import { ButtonSizes } from '.';

export const Container = styled.button<{ size: ButtonSizes }>`
  width: ${({ size }) => {
    switch (size) {
      case 'full':
        return '100%';
      case 'sm':
        return '100px';
      case 'md':
        return '300px';
      case 'lg':
        return '500px';
    }
  }};
  height: 50px;
  border-radius: 12px;
`;
