import styled from '@emotion/styled';

export const Container = styled.input<{ fillWidth: boolean }>`
  width: ${({ fillWidth }) => (fillWidth ? '100%' : '200px')};
  height: 50px;
  border-radius: 12px;
`;

export const Label = styled.label<{ fillWidth: boolean }>`
  width: ${({ fillWidth }) => (fillWidth ? '100%' : '200px')};
`;
