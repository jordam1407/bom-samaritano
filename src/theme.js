import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';
import '@fontsource/playfair-display';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B55E2',
    },
    secondary: {
      main: '#F5F5F5',
    },
    textColor: {
      grey_500: '#ACAFB5',
      dark_500: '#101317',
    },
  },
  typography: {
    fontFamily: 'Playfair Display',
    h1: {
      fontSize: '80px',
      lineHeight: '100px',
    },
    h2: {
      fontSize: '60px',
      lineHeight: '75px',
    },
    h3: {
      fontSize: '40px',
      lineHeight: '50px',
    },
    h4: {
      fontSize: '28px',
      lineHeight: '38px',
    },
    h5: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    h6: {
      fontSize: '20px',
      lineHeight: '25px',
    },
    h7: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      lineHeight: '20px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      lineHeight: '22px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '15px',
    },
    label: {
      fontSize: '11px',
      lineHeight: '14px',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
