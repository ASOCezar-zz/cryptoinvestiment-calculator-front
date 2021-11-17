import { createTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const materialUITheme = createTheme({
  palette: {
    primary: {
      main: '#0DBC0D',
      contrastText: '#fffff',
    },
    secondary: {
      main: '#1F1E5A',
    },
    neutral: {
      light: '#D5D5D5',
      main: '#B7B2B3',
      dark: '#424242',
      contrastText: '#fffff',
    },
  },
  typography: {
    fontSize: 20,
    button: {
      fontWeight: 'bolder',
    },
  },
});
