import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    font-size: 16px;
  }

  html {
    font-family: 'Dosis', sans-serif;
  }

  /* This is for responsive typografy */
  @media (min-width: 400px) and (max-width: 1200px){
    :root {
      font-size: calc( 16px + (21 - 16) * ( (100vw - 400px) / ( 1200 - 400) ));
    }
  }
  @media (min-width: 1200px){
    :root {
      font-size: 21px;
    }
  }
`;

export default GlobalStyles;