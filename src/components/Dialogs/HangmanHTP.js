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

export default function HangManHTP(props) {
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
          Guess The Word In 5 Tries
        </Typography>

        <Box
          mt={3}
          component='ul'
          marginLeft='20px'
          sx={{ '& > *:not(:last-of-type)': { marginBottom: 1 } }}
        >
          <li>Guess letters to complete the word and save the innocent man.</li>
          <li>Each wrong guess will result in loss of a heart, you get 5 hearts.</li>
        </Box>
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

HangManHTP.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
