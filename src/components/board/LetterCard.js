import { Box, styled, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function getColor(status, pos) {
  return status === 'absent'
    ? 'grey'
    : status === 'correct'
    ? 'green'
    : status === 'present'
    ? 'red'
    : 'greySilver';
}

export default function LetterCard({ letter, status, pos = 1 }) {
  let color = getColor(status, pos) || 'greySilver';

  return (
    <LetterCardBox className='letterCard' backcolor={color}>
      <Typography
        variant='h4'
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {letter || ''}
      </Typography>
    </LetterCardBox>
  );
}

const LetterCardBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backcolor',
})(({ backcolor, theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: 10,
  border: '1px solid',
  borderBottom: '4px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.custom[backcolor].light,
  borderColor: theme.custom[backcolor].dark,
  width: 57,
  height: 57,
  color:
    backcolor === 'greySilver' && theme.palette.mode === 'light'
      ? '#000'
      : '#fff',
}));
