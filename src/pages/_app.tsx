import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import { GlobalStyles } from '../styles/global-styles';
import { materialUITheme } from '../styles/materialUITheme';
import { theme } from '../styles/theme';
import { AuthProvider } from '../contexts/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MaterialThemeProvider theme={materialUITheme}>
        <AuthProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </AuthProvider>
      </MaterialThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
