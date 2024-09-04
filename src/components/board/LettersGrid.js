import { useTheme } from '@emotion/react';
import { Box, styled } from '@mui/material';
import React from 'react';
import LetterCard from './LetterCard';

export default function LettersGrid() {
  const theme = useTheme();

  return (
    <Container>
      <LetterCard
        letter='C'
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        letter='L'
        bgColor={theme.custom.red.light}
        brColor={theme.custom.red.dark}
        textColor='#fff'
      />
      <LetterCard
        letter='O'
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        letter='N'
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        letter='E'
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      {/* 2nd Row */}
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      {/* 3rd Row */}
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      {/* 4th Row */}
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      {/* 5th Row */}
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      {/* 6th Row */}
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
      <LetterCard
        bgColor={theme.custom.greySilver.light}
        brColor={theme.custom.greySilver.dark}
      />
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridGap: theme.spacing(2),

  '& .letterCard': {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.25, 1.25),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },

  [theme.breakpoints.down('md')]: {
    gridGap: theme.spacing(1),
  },
}));
