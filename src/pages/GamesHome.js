import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { GameCard } from '../components/Home/GameCard';
import NavBar from '../components/Home/Navbar';

const GamesHome = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth='xs' sx={{ marginTop: '4rem', height: '80%' }}>
        {/* <Typography variant='h3' fullWidth align='center'>
          Let the game begin!
        </Typography> */}
        {/* <Wrapper> */}
        {/* <GameCard url='/wordle' img='/static/wordle-upd.png' /> */}
        <GameCard url='/hangman' img='/static/Murdle.png' />
        {/* </Wrapper> */}
      </Container>
    </React.Fragment>
  );
};

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  height: '100%',

  '& > div': {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& > div': {
      width: '100%',
    },
  },
}));

export default GamesHome;
