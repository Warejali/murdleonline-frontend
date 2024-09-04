const { styled, Box } = require('@mui/material');

export const LettersGridCont = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridGap: theme.spacing(2),

  '& .letterCard': {
    height: 57,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.25, 1.25),
      height: 57,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
      height: 45,
      width: 45,
    },
  },

  [theme.breakpoints.down('md')]: {
    gridGap: theme.spacing(1),
  },
}));

export const GameContainer = styled(Box)(() => ({
  flexDirection: 'column',
  marginInline: 'auto',
  width: '100%',
  maxWidth: 500,
  gap: '2rem',
  // marginBlock: '1rem',
  // [theme.breakpoints.down('sm')]: {

  // },
}));
