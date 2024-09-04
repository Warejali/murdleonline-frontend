/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  styled,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import useCountdown from '../hooks/useCountdown';
import Loading from '../components/common/Loading';
import NavBar from '../components/common/NavBar';
import { HangmanDrawing } from '../components/Hangman/HangmanDrawing';
import { HangmanWord } from '../components/Hangman/HangmanWord';
import HangmnaKeyboard from '../components/keyboard/HangManKeyboard';
import { AuthContext } from '../context/authContext';
import { StatsContext } from '../context/statsContext';
import { useWindow } from '../hooks/useWindow';
import useWordData from '../hooks/useWordData';
import { keys } from '../utils/keys';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation, useMatch } from 'react-router-dom';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// ^ Game status => 0 = playing, 1 = won, -1 = lost

function padWithZero(number) {
  return (number < 10 ? '0' : '') + number;
}

export default function Hangman() {
  const { wordOfDay, fetching } = useWordData();
  const {
    handleStartCountdown,
    countdownSettings,
    countdownTimer,
    countDownStatus,
  } = useCountdown();
  const { saveUserStats } = useContext(StatsContext);
  const { isLoggedIn } = useContext(AuthContext);

  const [gameStatus, setGameStatus] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [chances, setChances] = useState(2);

  const [keyboardLetters, setKeyboardLetters] = useState(
    keys.map((el) => ({ ...el, color: 'greySilver' }))
  );

  useWindow('keydown', handleKeyDown);
  function handleKeyDown(e) {
    const key = e.key.toUpperCase();
    onKeyPressed(key);
  }

  useEffect(() => {
    if (fetching) {
      setGameStatus(0);
      setGuessedLetters([]);
      setKeyboardLetters(keys.map((el) => ({ ...el, color: 'greySilver' })));
    }
  }, [wordOfDay, isLoggedIn, fetching]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordOfDay?.includes(letter)
  );

  const isLoser = incorrectLetters.length > 4;
  const isWinner = wordOfDay
    ?.split('')
    ?.every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    if (isLoser || isWinner) {
      setGameStatus(isWinner ? 1 : -1);
      setChances((st) => st - 1);
    }
  }, [isLoser, isWinner]);

  useEffect(() => {
    if (gameStatus !== 0) {
      saveUserStats(2, gameStatus === 1 ? true : false);
    }
    if (chances === 0) {
      handleStartCountdown(2);
      setTimeout(() => {
        setChances(2);
      }, 1000);
    }
  }, [gameStatus]);

  function onKeyPressed(key) {
    const k = key?.target?.name || key;

    if (keys.some((el) => el.key === k.toLowerCase())) {
      if (gameStatus !== 0 || countDownStatus) return;
      if (guessedLetters.includes(k.toLowerCase()) || isLoser || isWinner)
        return;
      setKeyboardLetters((kl) =>
        kl.map((el) =>
          el.key === k.toLowerCase()
            ? {
                ...el,
                lock: true,
                color: wordOfDay.includes(k.toLowerCase()) ? 'green' : 'red',
              }
            : el
        )
      );
      setGuessedLetters((currentLetters) => [
        ...currentLetters,
        k.toLowerCase(),
      ]);
    }
  }

  function replayGame() {
    setGameStatus(0);
    setGuessedLetters([]);
    setKeyboardLetters(keys.map((el) => ({ ...el, color: 'greySilver' })));
    // reFetchWord();
  }

  return (
    <React.Fragment>
      <NavBar title='Home' />
      {fetching ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth='lg' sx={{ position: 'relative' }}>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              gap='1rem'
              height='calc(100vh - 65px)'
              minHeight='480px'
              py={3}
            >
              <Wrapper>
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  gap='2rem'
                >
                  <HangmanWord
                    reveal={
                      (chances === 0 || countdownSettings.timeleft) &&
                      gameStatus !== 0
                    }
                    guessedLetters={guessedLetters}
                    wordToGuess={wordOfDay}
                  />
                  {isLoser ? (
                    <>
                      <Typography variant='subtitle1'>
                        You haven't guessed the word
                      </Typography>
                      {console.log(chances)}
                      {(chances === 0 || countdownSettings.timeleft) && (
                        <Typography variant='subtitle1'>
                          Correct Word : {wordOfDay}
                        </Typography>
                      )}

                      {!countdownSettings.timeleft && (
                        <Button
                          variant='contained'
                          color='success'
                          onClick={replayGame}
                        >
                          Play Again
                        </Button>
                      )}
                    </>
                  ) : (
                    isWinner && (
                      <>
                        <Typography variant='subtitle1'>
                          You have guessed the word
                        </Typography>

                        {!countdownSettings.timeleft && (
                          <Button
                            variant='contained'
                            color='success'
                            onClick={replayGame}
                          >
                            Play Again
                          </Button>
                        )}
                      </>
                    )
                  )}
                  {gameStatus === 0 && (
                    <HangmnaKeyboard
                      keys={keyboardLetters}
                      onKeyPressed={onKeyPressed}
                      type='letters'
                    />
                  )}
                </Box>
                <HangmanDrawing
                  numberOfGuesses={incorrectLetters.length}
                  endGame={gameStatus === -1}
                />
              </Wrapper>
            </Box>
            <Box
              position='absolute'
              top='3%'
              left='50%'
              // minWidth='90px'
              sx={{ transform: 'translateX(-50%)' }}
              display='flex'
              gap={1}
              alignItems='center'
              justifyContent='center'
            >
              {/* <Avatar
                variant='square'
                src='/static/hang.png'
                alt='Lives Left'
                sx={{ width: 25, height: 25 }}
              /> */}
              {/* <AccessibilityNewIcon fontSize='medium' /> */}

              {/* <Typography variant='h5'> */}
              {countdownSettings?.timeleft &&
              countdownSettings?.gameId &&
              countdownTimer ? (
                <Box display='flex' alignItems='center' gap={1}>
                  <AccessibilityNewIcon fontSize='medium' color='error' />
                  <Typography variant='h5' color='error'>
                    {`${padWithZero(countdownTimer?.hours)} : `}
                    {`${padWithZero(countdownTimer?.mins)}: `}
                    {`${padWithZero(countdownTimer?.secs)} `}
                  </Typography>
                </Box>
              ) : (
                Array.from({ length: chances }).map((_, i) => (
                  // <Avatar
                  //   variant='square'
                  //   src='/static/hang.png'
                  //   alt='Lives Left'
                  //   sx={{ width: 25, height: 25 }}
                  // />
                  <AccessibilityNewIcon
                    key={i}
                    fontSize='medium'
                    color='warning'
                  />
                ))
              )}
              {/* </Typography> */}
            </Box>
          </Container>
        </>
      )}
    </React.Fragment>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '3.5rem',

  [theme.breakpoints.down('435')]: {
    flexDirection: 'column-reverse',
  },
}));
