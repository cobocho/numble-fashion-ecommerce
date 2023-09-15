import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}

  a {
    color: black;
    text-decoration: none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
