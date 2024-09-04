import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Container
      maxWidth='lg'
      sx={{
        backgroundColor: 'background.neutral',
        padding: '1rem',
      }}
    >
      <Box width='fit-content' margin='0 auto'>
        <Typography variant='subtitle2' color='textSecondary'>
          @ 2023 - Murdle
        </Typography>
      </Box>
    </Container>
  );
}
