import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#0000003b',
    },
    secondary: {
      main: '#0000000d',
      dark: '#0000003b',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '3.75rem',
      fontWeight: '500',
      '@media (max-width:460px)': {
        fontSize: '2.5rem',
      },
    },
  },
});

export default theme;
