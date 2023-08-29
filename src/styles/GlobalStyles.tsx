import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
