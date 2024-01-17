import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,

    h1: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    }
  },
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000'
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#000'
    }
  }
});

export default theme;