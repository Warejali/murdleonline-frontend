import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  DialogContent,
  Divider,
  styled,
  Typography,
} from '@mui/material';
import { StatsContext } from '../../context/statsContext';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function UserStatsDialog(props) {
  const { toggleDialog, open, otherGame } = props;
  const { loading, userStats } = useContext(StatsContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Dialog fullWidth maxWidth='sm' onClose={toggleDialog} open={open}>
      <DialogContent>
        <Typography variant='h4' align='center' gutterBottom>
          Statistics
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-evenly'
            flexWrap='wrap'
            mt={2}
            colgap={4}
            rowgap={2}
            sx={{ rowGap: '0.5rem', columnGap: '1rem' }}
          >
            <StatsInner>
              <Typography variant='h4' color='info.main'>
                {userStats.length !== 0 ? userStats?.[0]?.played : '0'}
              </Typography>
              <Typography variant='h4' color='textSecondary'>
                Played
              </Typography>
            </StatsInner>
            <StatsInner>
              <Typography variant='h4' color='info.main'>
                {userStats.length !== 0
                  ? (userStats?.[0]?.won_percentage * 1).toFixed(2)
                  : '0'}
              </Typography>
              <Typography variant='h4' color='textSecondary'>
                Win %
              </Typography>
            </StatsInner>
            <StatsInner>
              <Typography variant='h4' color='info.main'>
                {userStats.length !== 0
                  ? (userStats?.[0]?.lost_percentage * 1).toFixed(2)
                  : '0'}
              </Typography>
              <Typography variant='h4' color='textSecondary'>
                Loss %
              </Typography>
            </StatsInner>
          </Box>
        )}
        {!isLoggedIn && (
          <>
            <Box my={3}>
              <Divider />
            </Box>
            <Box
              display='flex'
              alignItems='center'
              flexDirection='column'
              width='fit-content'
              mx={'auto'}
              gap={2}
              mb={2}
            >
              <SaveStatsLoginContent>
                <Avatar
                  variant='rounded'
                  color='secondary'
                  sx={{ backgroundColor: 'secondary.main' }}
                >
                  <InsertChartOutlinedIcon />
                </Avatar>
                <Box>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    // gutterBottom
                  >
                    Link your stats to a free account
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Your stats and streak will save whenever you play.
                  </Typography>
                </Box>
              </SaveStatsLoginContent>
              <Button
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={() => navigate('/login')}
              >
                Log in or create a free account
              </Button>
            </Box>
          </>
        )}

        {/* <Box my={3}>
          <Divider />
        </Box>
        <Box maxWidth='380.5px' mx={'auto'}>
          <Button
            variant='outlined'
            color='secondary'
            fullWidth
            endIcon={<FontDownloadOutlinedIcon />}
            onClick={() => navigate(`/${otherGame.toLowerCase()}`)}
          >
            Play {otherGame}
          </Button>
        </Box> */}
      </DialogContent>
    </Dialog>
  );
}

UserStatsDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const StatsInner = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'baseline',
}));

const SaveStatsLoginContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  flexWrap: 'nowrap',
  [theme.breakpoints.down('500')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));
