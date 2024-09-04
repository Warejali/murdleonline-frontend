import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import {
  Box,
  DialogContent,
  Divider,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import LetterCard from '../board/LetterCard';

export default function HowToPlay(props) {
  const { toggleDialog, open } = props;
  const theme = useTheme();

  return (
    <Dialog fullWidth maxWidth='sm' onClose={toggleDialog} open={open}>
      <DialogContent>
        <Typography variant='h4' align='center' gutterBottom>
          HOW TO PLAY
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          gutterBottom
          sx={{ textDecoration: 'underline' }}
        >
          Guess The Wordle In 6 Tries
        </Typography>

        <Box
          mt={3}
          component='ul'
          marginLeft='20px'
          sx={{ '& > *:not(:last-of-type)': { marginBottom: 1 } }}
        >
          <li>Each guess world must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close game was to the
            word.
          </li>
        </Box>
        <Typography mt={3} variant='subtitle1' gutterBottom>
          Examples
        </Typography>
        <LetterCardGrid>
          <LetterCard letter='W' status='correct' />
          <LetterCard letter='E' status='empty' />
          <LetterCard letter='A' status='empty' />
          <LetterCard letter='R' status='empty' />
          <LetterCard letter='Y' status='empty' />
        </LetterCardGrid>
        <Typography variant='body1' component='span'>
          <strong>W</strong> is in the word and in the correct spot.
        </Typography>
        <LetterCardGrid>
          <LetterCard letter='P' status='empty' />
          <LetterCard letter='I' status='absent' />
          <LetterCard letter='L' status='empty' />
          <LetterCard letter='L' status='empty' />
          <LetterCard letter='S' status='empty' />
        </LetterCardGrid>
        <Typography variant='body1' component='span'>
          <strong>I</strong> is in the word and in the wrong spot.
        </Typography>
        <LetterCardGrid>
          <LetterCard letter='V' status='empty' />
          <LetterCard letter='A' status='empty' />
          <LetterCard letter='G' status='empty' />
          <LetterCard letter='U' status='present' />
          <LetterCard letter='E' status='empty' />
        </LetterCardGrid>
        <Typography variant='body1' component='span'>
          <strong>U</strong> is not in the word in any spot.
        </Typography>

        <Box my={3}>
          <Divider />
        </Box>
        <Typography
          variant='subtitle1'
          align='center'
          sx={{ textTransform: 'uppercase' }}
        >
          a new puzzle is released daily at midnight
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

HowToPlay.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const LetterCardGrid = styled('div')(({ theme }) => ({
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  '& .letterCard': { width: 45, height: 45, padding: '0px 8px' },
}));
