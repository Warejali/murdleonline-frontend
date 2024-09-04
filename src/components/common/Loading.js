import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Box
      sx={{
        margin: 'auto',
        position: 'absolute',
        inset: 0,
        minWidth: 'fit-content',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant='h2' color='error.main' component='span' sx={{fontFamily: 'Nosifer, cursive',}}>
          Murdle
        </Typography>
      </Box>
    </Box>
  );
}
