import { Typography } from '@mui/material';
import React from 'react';

export default function Logo({ title, ...other }) {
  return (
    <Typography
      variant='h4'
      noWrap
      component='a'
      href='/'
      align='center'
      sx={{
        letterSpacing: '.1rem',
        color: 'inherit',
        textDecoration: 'none',
        ...other,
      }}
    >
      {title}
    </Typography>
  );
}
