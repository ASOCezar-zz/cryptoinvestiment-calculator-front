import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Open sans', sans-serif;
  }

  ul, ol {
    margin-block: ${({ theme }) => theme.font.spacings.medium};
    padding: ${({ theme }) => theme.font.spacings.medium};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
