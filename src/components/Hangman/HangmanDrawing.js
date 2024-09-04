/* eslint-disable react/jsx-pascal-case */
import { Avatar, Box, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
const BODY_PARTS = [
  <>
    <div key='head' className='head'>
      <div className='eyes leftEye' />
      <div className='eyes rightEye' />
      <div className='mouth mouthhappy' />
    </div>
  </>,
  <div key='body' className='body' />,
  <div key='arnsRght' className='arms armsRght' />,
  <div key='armslft' className='arms armsLft' />,
  <>
    <div key='legRght' className='legs legRght' />
    <div key='leflft' className='legs legLft' />
  </>,
];

const END_BODY_PARTS = [
  <div key='head' className='head'>
    <div className='dieEye dieEyeRght'>{String.fromCharCode(215)}</div>
    <div className='dieEye dieEyeLft'>{String.fromCharCode(215)}</div>
    <div className='mouth mouthSad' />
  </div>,
  <div key='body' className='body' />,
  <div key='arnsRght' className='arms armsRght' />,
  <div key='armslft' className='arms armsLft' />,
  <>
    <div key='legRght' className='legs legRght' />
    <div key='leflft' className='legs legLft' />
  </>,
];

export function HangmanDrawing({ numberOfGuesses, endGame }) {
  return (
    <Wrapper>
      <div className='guessLeft'>
        {Array.from({ length: 5 - numberOfGuesses }, (_, i) => (
          <FavoriteIcon key={i} fontSize='small' color='error' />
        ))}
      </div>

      <div className='hangr' />
      <div className='hangrHoldr' />
      <div className='stVert' />
      <div className='baseSt' />
      <div className='object'>
        {!endGame ? (
          <div className='main'>{BODY_PARTS.slice(0, numberOfGuesses)}</div>
        ) : (
          <div className='main'>{END_BODY_PARTS.slice(0, numberOfGuesses)}</div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 390,
  height: 440,
  paddingBlock: '1rem',

  [theme.breakpoints.down('lg')]: {
    width: 340,
    height: 370,
  },

  [theme.breakpoints.down('md')]: {
    width: 290,
    height: 320,
  },
  [theme.breakpoints.down('sm')]: {
    width: 160,
    height: 210,
  },

  '& > *': {
    '&:not(.object):not(.guessLeft)': {
      backgroundColor: theme.palette.text.primary,
    },
    position: 'absolute',
    borderRadius: 10,
  },
  '& .guessLeft': {
    bottom: 30,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',

    [theme.breakpoints.down('sm')]: {
      '& *': {
        fontSize: '0.95rem !important',
      },
    },
  },
  '& .hangr': {
    width: 8,
    height: 70,
    top: 0,
    right: '21%',
    [theme.breakpoints.down('lg')]: {
      height: 50,
    },
    [theme.breakpoints.down('md')]: {
      height: 35,
      right: '19%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 33,
      right: '13%',
    },
  },
  '& .hangrHoldr': {
    width: 240,
    height: 8,
    top: 0,
    right: '20%',
    [theme.breakpoints.down('lg')]: {
      width: 210,
    },
    [theme.breakpoints.down('md')]: {
      width: 175,
    },
    [theme.breakpoints.down('sm')]: {
      width: 110,
      right: '13%',
    },
  },
  '& .stVert': {
    width: 8,
    height: '100%',
    top: 0,
    left: '25%',
  },
  '& .baseSt': {
    width: '50%',
    height: 8,
    left: '10%',
    bottom: 0,
  },

  '& .object': {
    position: 'absolute',
    top: 65,
    right: '5%',
    [theme.breakpoints.down('lg')]: {
      top: 45,
      right: '4%',
    },
    [theme.breakpoints.down('md')]: {
      top: 30,
    },
    [theme.breakpoints.down('sm')]: {
      width: 65,
      height: 120,
      right: '-5%',
    },
  },
  '& .main': {
    width: 125,
    height: 200,
    borderRadius: '20%',
    position: 'relative',
    '& > *': {
      position: 'absolute',
      '&:not(.head)': {
        backgroundColor: theme.palette.text.primary,
      },
    },

    [theme.breakpoints.down('md')]: {
      width: 98,
      height: 170,
    },
    [theme.breakpoints.down('sm')]: {
      width: 65,
      height: 120,
    },
  },
  '& .head': {
    width: 60,
    height: 60,
    borderRadius: '100%',
    border: `8px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.text.secondary,
    top: 0,
    right: '50%',
    transform: 'translateX(50%)',
    [theme.breakpoints.down('lg')]: {
      width: 55,
      height: 55,
    },
    [theme.breakpoints.down('md')]: {
      width: 50,
      height: 50,
      border: `6px solid ${theme.palette.text.primary}`,
    },
    [theme.breakpoints.down('sm')]: {
      width: 35,
      height: 35,
      border: `3px solid ${theme.palette.text.primary}`,
    },

    '& .eyes': {
      width: 7,
      height: 7,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: '#000',
      top: '10px',
      [theme.breakpoints.down('md')]: {
        width: 6,
        height: 6,
      },
      [theme.breakpoints.down('sm')]: {
        // width: 65,
        // height: 120,
      },
      // left: '10px',
    },
    '& .leftEye': {
      left: '7px',
      [theme.breakpoints.down('md')]: {
        left: 8,
        top: 10,
      },
      [theme.breakpoints.down('sm')]: {
        left: 5,
        top: 8,
      },
    },
    '& .rightEye': {
      right: '7px',
      [theme.breakpoints.down('md')]: {
        right: 8,
        top: 10,
      },
      [theme.breakpoints.down('sm')]: {
        right: 5,
        top: 8,
      },
    },
    '& .dieEye': {
      position: 'absolute',
      // display: 'inline-block',
      color: '#000',
      fontWeight: 700,
      width: 'fit-content',
      height: 'fit-content',
      top: 1,
      animation: 'dieEyeAnim 0.5s',
    },
    '@keyframes dieEyeAnim': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    '& .dieEyeRght': {
      right: 7,
      [theme.breakpoints.down('sm')]: {
        right: 4,
        top: -1,
      },
    },
    '& .dieEyeLft': {
      left: 7,
      [theme.breakpoints.down('sm')]: {
        left: 4,
        top: -1,
      },
    },

    '& .mouth': {
      position: 'absolute',
      width: 21,
      height: 18,
      border: '2px solid transparent',
      // top: ,
      right: 2,
      transform: 'translateX(-45%)',
      boxSizing: 'border-box',
      borderRadius: '50%',
      [theme.breakpoints.down('md')]: {
        width: 18,
        height: 17,
        // right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        right: -2,
      },
      // borderBottomColor: 'black',
    },
    '& .mouthhappy': {
      borderBottomColor: 'black',
      top: 15,

      [theme.breakpoints.down('md')]: {
        top: 14,
      },
      [theme.breakpoints.down('sm')]: {
        top: 7,
      },
    },
    '& .mouthSad': {
      borderTopColor: 'black',
      top: 28,
      [theme.breakpoints.down('md')]: {
        top: 25,
      },
      [theme.breakpoints.down('sm')]: {
        top: 20,
      },
    },

    // '& .eye': {},

    // [theme.breakpoints.down('md')]: {
    //   width: 45,
    //   height: 45,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: 36,
    //   height: 36,
    //   right: '50%',
    // },
  },
  '& .body': {
    width: 45,
    height: 90,
    top: 55,
    right: '50%',
    transform: 'translateX(50%)',
    borderRadius: '25%',
    [theme.breakpoints.down('lg')]: {
      width: 40,
      height: 80,
      top: 51,
    },
    [theme.breakpoints.down('md')]: {
      width: 35,
      height: 60,
      top: 47,
    },
    [theme.breakpoints.down('sm')]: {
      width: 28,
      height: 48,
      top: 32,
    },
  },
  '& .arms': {
    width: 60,
    height: 14,
    borderRadius: '25%',
    top: '36%',
    [theme.breakpoints.down('lg')]: {
      width: 47,
      top: '35%',
    },
    [theme.breakpoints.down('md')]: {
      width: 30,
      height: 12,
    },
    [theme.breakpoints.down('sm')]: {
      width: 28,
      height: 10,
      top: 32,
    },
  },
  '& .armsRght': {
    right: 8,
    transform: 'rotate(40deg)',
    [theme.breakpoints.down('lg')]: {
      top: '35%',
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
    },
  },
  '& .armsLft': {
    left: 8,
    transform: 'rotate(140deg)',
    [theme.breakpoints.down('lg')]: {
      top: '35%',
    },
    [theme.breakpoints.down('sm')]: {
      left: 0,
    },
  },
  '& .legs': {
    width: 11,
    height: 55,
    borderRadius: '30%',
    bottom: 0,
    top: 140,
    [theme.breakpoints.down('lg')]: {
      top: 125,
    },
    [theme.breakpoints.down('md')]: {
      top: 95,
      height: 45,
    },
    [theme.breakpoints.down('sm')]: {
      height: 36,
      top: 76,
      width: 9,
    },
  },
  '& .legRght': {
    right: '40%',
    transform: 'translateX(40%)',
  },
  '& .legLft': {
    left: '40%',
    transform: 'translateX(-40%)',
  },
}));
