import { Box, styled } from '@mui/material';
import React from 'react';
import { KeyBoardCard } from './KeyBoardCard';

export default function HangmnaKeyboard({ keys, onKeyPressed }) {
  return (
    <Container>
      {keys.map((el) => (
        <KeyBoardCard
          key={el.key}
          letter={el.key}
          handleKeyPress={onKeyPressed}
          color={el?.color}
          lock={el?.lock || false}
        />
      ))}
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(9, 1fr)`,
  gridGap: theme.spacing(1),
  width: 'fit-content',
  marginInline: 'auto',
  '& > *': {
    fontSize: '1.5rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem !important',
    },
  },
  [theme.breakpoints.down('md')]: {
    gridGap: theme.spacing(0.75),
  },
}));
