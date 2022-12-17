import { createGlobalStyle, css, withTheme } from 'styled-components';
import "./../sass/main.scss"
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //light-mode
    --light-bg: #fff;
    --light-bg-soft: #F5F5F5;
    --light-bg-blue: #F0FBFF;
    --light-text: #000;
    --light-label-bg: #2C3137;
    --light-label-text: #fff;
    --light-btn-bg: #206ADA;
    --light-btn-text:#fff;

    //dark-mode
    --dark-bg: #2C3137;
    --dark-bg-soft: #3E444D;
    --dark-bg-blue: #333C44;
    --dark-text: #fff;
    --dark-label-bg: #E7EAED;
    --dark-label-text: #1E1F23;
    --dark-btn-bg: #206ADA;
    --dark-btn-text:#fff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }: GlobalThemeProps) => theme.bg};
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;

export default withTheme(globalStyle);