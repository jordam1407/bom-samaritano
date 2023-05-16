import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import BS from '../assets/bom_samaritano_full_logo.png';

const root = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
};

export default function Landing() {
  const theme = useTheme();
  return (
    <Container sx={ root }>
      <Box
        component="img"
        sx={ {
          width: 1000,
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
          mx: 'auto',
        } }
        alt="O Bom Samaritano"
        src={ BS }
      />
      <Typography
        color="white"
        variant="h4"
        sx={ {
          width: 1000,
          [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '18px',
            lineHeight: '20px',
          },
          mx: 'auto',
        } }
      >
        Estamos construindo algo incrível, faça parte desta iniciativa!
      </Typography>
      <Typography
        color="white"
        variant="h6"
        sx={ {
          mt: 2,
          width: 1000,
          [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '14px',
            lineHeight: '22px',
          },
          mx: 'auto',
          fontStyle: 'italic',
        } }
      >
        “...&quot;Ame o seu próximo como a si mesmo&quot;“. Lucas 10:27
      </Typography>
    </Container>
  );
}
