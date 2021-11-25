import { createTheme } from '@material-ui/core';

export const materialUITheme = createTheme({
  palette: {
    primary: {
      main: '#0DBC0D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1F1E5A',
    },
    error: {
      main: '#C9100C',
    },
    neutral: {
      light: '#546E7A',
      main: '#B7B2B3',
      dark: '#424242',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 20,
    button: {
      fontWeight: 'bolder',
    },
  },
});
