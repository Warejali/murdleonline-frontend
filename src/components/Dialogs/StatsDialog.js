import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import LinearProgress from '@mui/material/LinearProgress';

import { Box, DialogContent, Divider, styled, Typography } from '@mui/material';

export default function StatsDialog(props) {
  const { toggleDialog, open } = props;

  return (
    <Dialog fullWidth maxWidth='sm' onClose={toggleDialog} open={open}>
      <DialogContent>
        <Typography variant='h4' align='center' gutterBottom>
          Statistics
        </Typography>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-evenly'
          flexWrap='wrap'
          mt={2}
          colgap={4}
          rowgap={2}
          sx={{ rowGap: '0.5rem', columnGap: '1.5rem' }}
        >
          <StatsInner>
            <Typography variant='h4' color='info.main'>
              1
            </Typography>
            <Typography variant='h4' color='textSecondary'>
              Played
            </Typography>
          </StatsInner>
          <StatsInner>
            <Typography variant='h4' color='info.main'>
              0
            </Typography>
            <Typography variant='h4' color='textSecondary'>
              Win %
            </Typography>
          </StatsInner>
          <StatsInner>
            <Typography variant='h4' color='info.main'>
              2
            </Typography>
            <Typography
              variant='h4'
              color='textSecondary'
              align='center'
              sx={{ maxWidth: 75 }}
            >
              Current Streak
            </Typography>
          </StatsInner>
          <StatsInner>
            <Typography variant='h4' color='info.main'>
              2
            </Typography>
            <Typography
              variant='h4'
              color='textSecondary'
              align='center'
              sx={{ maxWidth: 75 }}
            >
              Max Streak
            </Typography>
          </StatsInner>
        </Box>
        <Box mt={4} px={2} display='flex' gap='1rem' flexDirection='column'>
          {statsDistribution.map((el, ind) => (
            <Box
              key={ind}
              display='flex'
              alignItems='center'
              gap='1rem'
              flexWrap='nowrap'
            >
              <Typography
                variant='h4'
                color='text.secondary'
                sx={{ minWidth: 15 }}
              >
                {ind + 1}
              </Typography>
              <Box position='relative' width={el > 0 ? '100%' : '12%'}>
                <Progressbar
                  variant='determinate'
                  value={el > 0 ? 100 : -1}
                  color={el > 0 ? 'info' : 'inherit'}
                  className='progress'
                  sx={{
                    width: '100%',
                  }}
                />
                <ProgressNo>{el}</ProgressNo>
              </Box>
            </Box>
          ))}
        </Box>
        <Box my={3}>
          <Divider />
        </Box>
        {/* <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          sx={{ textTransform: 'uppercase' }}
        >
          Next wordle in {` - `} {hours}:{minutes}:{seconds}
        </Typography> */}
      </DialogContent>
    </Dialog>
  );
}

StatsDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const Progressbar = styled(LinearProgress)(() => ({
  minHeight: 30,
  borderRadius: 8,
  position: 'relative',
  '& div': {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

const ProgressNo = styled(Box)(() => ({
  position: 'absolute',
  right: 10,
  top: 3,
  color: '#fff',
  fontWeight: 700,
}));

const StatsInner = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'baseline',
}));

const statsDistribution = ['0', '0', '0', '0', '0', '1'];
