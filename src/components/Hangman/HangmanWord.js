import { Box, styled, Typography } from '@mui/material';

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '.25em',
        // alignSelf: 'end',
      }}
    >
      {wordToGuess.split('').map((letter, i) => (
        <Text
          key={`guess-${letter}-${i}`}
          valid={!guessedLetters.includes(letter) && reveal ? true : undefined}
        >
          <Typography
            component='h2'
            align='center'
            sx={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
            }}
          >
            {letter.toUpperCase()}
          </Typography>
        </Text>
      ))}
    </Box>
  );
}

const Text = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'valid',
})(({ valid, theme }) => ({
  flex: 1,
  minWidth: 18,
  position: 'relative',
  borderBottom: `1px solid ${theme.palette.text.primary}`,
  color: valid ? 'red !important' : theme.palette.text.primary,
  '& > *': {
    fontSize: '3.3rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.7rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem !important',
    },
    [theme.breakpoints.down('450')]: {
      fontSize: '1.4  rem !important',
    },
  },
}));
