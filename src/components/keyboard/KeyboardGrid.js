import { Box, styled } from '@mui/material';
import React from 'react';
import { KeyBoardCard } from './KeyBoardCard';

export default function KeyboardGrid({ keys, onKeyPressed, type = 'normal' }) {
  return (
    <Container type={type}>
      {keys.map((el) => (
        <KeyBoardCard
          key={el?.key}
          letter={el?.key}
          handleKeyPress={onKeyPressed}
          color={el?.color || 'greySilver'}
          lock={false}
        />
      ))}
    </Container>
  );
}

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type',
})(({ type, theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${type === 'normal' ? 10 : 9}, 1fr)`,
  gridTemplateRows: 'repeat(3, 1fr)',
  gridGap: theme.spacing(1),
  width: 'fit-content',
  marginInline: 'auto',

  [theme.breakpoints.down('md')]: {
    gridGap: theme.spacing(0.75),
  },

  '& > .enter': {
    gridArea: '3/8/4/11',
  },
}));
