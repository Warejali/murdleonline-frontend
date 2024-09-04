import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Logo from './Logo';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HowToPlay from '../Dialogs/HowToPlay';
// import StatsDialog from '../Dialogs/StatsDialog';
import ThemeModeIcon from './ThemeModeIcon';
import HangManHTP from '../Dialogs/HangmanHTP';
import UserStatsDialog from '../Dialogs/UserStatsDialog';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import AccountPopover from './Accountpopover';

export default function NavBar(props) {
  const [infoDialog, setInfoDialog] = useState(false);
  const [statsDialog, setStatsDialog] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const handleToggleDialog = () => {
    setInfoDialog((st) => !st);
  };
  const handleStatsDialog = () => {
    setStatsDialog((st) => !st);
  };

  return (
    <React.Fragment>
      <AppBar elevation={1} position='static' color='inherit'>
        <Container maxWidth='lg'>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <IconButton
                aria-label='how to play'
                component='label'
                color='inherit'
                onClick={handleToggleDialog}
              >
                <InfoOutlinedIcon />
              </IconButton>
              <ThemeModeIcon />
            </Box>
            <Logo
              title={props.title}
              marginLeft={isLoggedIn ? '0px' : '-35px'}
            />
            <Box>
              <IconButton
                aria-label='stats'
                component='label'
                color='inherit'
                onClick={handleStatsDialog}
              >
                <InsertChartOutlinedIcon />
              </IconButton>
              {isLoggedIn && <AccountPopover />}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {props.title === 'Wordle' ? (
        <>
          <HowToPlay open={infoDialog} toggleDialog={handleToggleDialog} />
          {/* <StatsDialog open={statsDialog} toggleDialog={handleStatsDialog} /> */}
          <UserStatsDialog
            open={statsDialog}
            toggleDialog={handleStatsDialog}
            otherGame='Hangman'
          />
        </>
      ) : (
        <>
          <HangManHTP open={infoDialog} toggleDialog={handleToggleDialog} />
          <UserStatsDialog
            open={statsDialog}
            toggleDialog={handleStatsDialog}
            otherGame='Wordle'
          />
        </>
      )}
    </React.Fragment>
  );
}
