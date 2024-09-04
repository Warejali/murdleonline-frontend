import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Logo from '../common/Logo';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

import ThemeModeIcon from '../common/ThemeModeIcon';
import { AuthContext } from '../../context/authContext';
import AccountPopover from '../common/Accountpopover';
import { Button, Typography } from '@mui/material';

export default function NavBar(props) {
  const [infoDialog, setInfoDialog] = useState(false);
  const [statsDialog, setStatsDialog] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToggleDialog = () => {
    setInfoDialog((st) => !st);
  };
  const handleStatsDialog = () => {
    setStatsDialog((st) => !st);
  };

  return (
    <AppBar elevation={1} position='static' color='inherit'>
      <Container maxWidth='lg'>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box flexBasis='45%'>
            <ThemeModeIcon />
          </Box>
          <Box flexBasis='55%' display='flex' justifyContent='space-between'>
            <Typography
              variant='h4'
              noWrap
              align='center'
              sx={{
                letterSpacing: '.1rem',
                color: 'red',
              }}
            >
              GAMES
            </Typography>
            <Box>
              {isLoggedIn ? (
                <AccountPopover />
              ) : (
                <Box display='flex' gap={1}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    variant='outlined'
                    color='secondary'
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
