import { Button, styled } from '@mui/material';
import React from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';

export const KeyBoardCard = ({
  letter,
  handleKeyPress,
  color,
  lock = false,
}) => {
  return (
    <React.Fragment>
      {letter !== 'DEL' ? (
        <ButtonExt
          variant='contained'
          name={letter}
          backcolor={color}
          onClick={handleKeyPress}
          disabled={lock}
          className={letter === 'ENTER' && 'enter'}
        >
          {letter}
        </ButtonExt>
      ) : (
        <ButtonExt
          variant='contained'
          name={letter}
          backcolor={color}
          onClick={handleKeyPress}
          disabled={lock}
          endIcon={<BackspaceIcon />}
        />
      )}
    </React.Fragment>
  );
};

const ButtonExt = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'backcolor',
})(({ backcolor, theme }) => ({
  padding: theme.spacing(0.5, 1),
  border: '2px solid',
  minWidth: 'unset',
  boxShadow: 'none',
  backgroundColor: `${theme.custom[backcolor].light} !important`,
  borderColor: `${theme.custom[backcolor].dark} !important`,
  '&:hover': { backgroundColor: theme.custom[backcolor].dark },
  color:
    backcolor === 'greySilver' && theme.palette.mode === 'light'
      ? '#000'
      : '#fff',

  '& > *': {
    margin: '0 !important',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.25, 0.75),
    border: '1px solid',
    fontSize: 12,
    '& svg': {
      width: 13,
      height: 13,
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0.4),
    border: '1px solid',
    fontSize: 12,
  },
}));
